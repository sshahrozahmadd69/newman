const newman = require("newman");
const fs = require("fs");

const collections = [
  "./IndividualCollection/SignIn.postman_collection.json",
  "./IndividualCollection/WorkSpace.postman_collection.json",
  //  './IndividualCollection/Project.postman_collection.json',
  //  './IndividualCollection/Bug.postman_collection.json'
];

function delay(ms) {
  console.log("WAITING")
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const runCollection = async (collections) => {
  let environmentFile = "./FeatureTesting_Variables.postman_environment.json";
  
  

  for (let i = 0; i < collections.length; i++) {
    // let environmentFile = "./data.json";
    
    await delay(3000)
    newman.run(
      {
        collection: collections[i],
        environment: environmentFile,

        reporters: [ "htmlextra", "json"],
        reporter: {},
        color: "auto", // For colored output
      },
      (err, summary) => {
        if (err) {
          console.error(`Error running collection: ${err}`);
          return;
        }
        setTimeout(() => {
          console.log("waiting for 5 sec"), 5000;
        });

        const environmentData = JSON.parse(
          fs.readFileSync(environmentFile, "utf8")
        );

        const collectionEnvironment = summary.environment.values;
        environmentData.values = collectionEnvironment.map((variable) => ({
          key: variable.key,
          value: variable.value,
          enabled: true,
        }));

        // Update the environment file with the variables from each collection run
        fs.writeFileSync(
          "./data.json",
          JSON.stringify(environmentData, null, 2)
        );
        console.log("Environment variables updated in file:", environmentFile);
        
      }
    );

    await delay(3000)

    
  }
};

runCollection(collections);



// collections.forEach((collection) => {

//   let environmentFile = './data.json'

//   console.log("CHECKKKK");
//     newman.run({

//       collection: collection,
//       environment: environmentFile,

//       reporters: ['cli', 'htmlextra', 'json'],
//       reporter: {

//       },
//       color: 'auto', // For colored output
//     },
//     (err, summary) => {
//       if (err) {
//           console.error(`Error running collection: ${err}`);
//           return;
//       }

//       const environmentData = JSON.parse(fs.readFileSync(environmentFile, 'utf8'));

//       const collectionEnvironment = summary.environment.values;
//       environmentData.values = collectionEnvironment.map(variable => ({
//           key: variable.key,
//           value: variable.value,
//           enabled: true
//       }));

//       // Update the environment file with the variables from each collection run
//       fs.writeFileSync('./data.json', JSON.stringify(environmentData, null, 2));
//       console.log('Environment variables updated in file:', environmentFile);
//     });

//     setTimeout(() => {console.log("waiting for 3 sec"), 3000})
// })