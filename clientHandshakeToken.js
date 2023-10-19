const newman = require('newman');

const collectionFiles = [
  './IndividualCollection/SignIn.postman_collection.json',
    './IndividualCollection/WorkSpace.postman_collection.json',
  // './path/to/collection3.json',
  // Add more collection file paths as needed
];

const environmentFile = './FeatureTesting_Variables.postman_environment.json'

// Define a function to run Newman for a single collection
function runCollection(collectionFile) {
  return new Promise((resolve, reject) => {
    newman.run({
      collection: require(collectionFile),
      environment: environmentFile,
      reporters: ['cli', 'htmlextra', 'json'],
    }, (err) => {
      if (err) {
        console.error(`Error running collection: ${collectionFile}`, err);
        reject(err);
      } else {
        console.log(`Collection run completed: ${collectionFile}`);
        resolve();
      }
    });
  });
}

// Run all collections sequentially
async function runCollections() {
  for (const collectionFile of collectionFiles) {
    await runCollection(collectionFile);
  }
}

runCollections()
  .then(() => {
    console.log('All collections have been run successfully.');
  })
  .catch((error) => {
    console.error('Error running collections:', error);
  });
