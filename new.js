const newman = require("newman");
const fs = require("fs").promises;

const collections = [
  "./IndividualCollection/SignIn.postman_collection.json",
  "./IndividualCollection/WorkSpace.postman_collection.json",
  "./IndividualCollection/Project.postman_collection.json",
  "./IndividualCollection/Bug.postman_collection.json",
];

(async () => {
  let environmentData = JSON.parse(
    await fs.readFile(
      "./FeatureTesting_Variables.postman_environment.json",
      "utf8"
    )
  );

  for (const collection of collections) {
    const summary = await runCollection(collection, environmentData);
    if (summary) {
      environmentData = updateEnvironmentData(environmentData, summary);
    }
  }

  await fs.writeFile(
    "./FeatureTesting_Variables.postman_environment.json",
    JSON.stringify(environmentData, null, 2)
  );
  console.log("All collections executed and environment file updated.");
})();

function runCollection(collection, environmentData) {
  return new Promise((resolve, reject) => {
    newman.run(
      {
        collection: collection,
        environment: environmentData,
        reporters: ["cli", "htmlextra", "json"],
        reporter: {},
        color: "auto",
      },
      (err, summary) => {
        if (err) {
          console.error(`Error running collection: ${err}`);
          reject(err);
        } else {
          resolve(summary);
        }
      }
    );
  });
}

function updateEnvironmentData(environmentData, summary) {
  const collectionEnvironment = summary.environment.values;
  environmentData.values = collectionEnvironment.map((variable) => ({
    key: variable.key,
    value: variable.value,
    enabled: true,
  }));
  console.log(
    "Environment variables updated for collection:",
    summary.collection.name
  );
  return environmentData;
}

