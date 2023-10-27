const newman = require('newman');
const fs = require('fs');

const collections = [
    './IndividualCollection/SignIn.postman_collection.json',
     './IndividualCollection/WorkSpace.postman_collection.json',
    //  './IndividualCollection/Project.postman_collection.json',
    //  './IndividualCollection/Bug.postman_collection.json'
];
let currentIndex = 0;


let environmentFile = './FeatureTesting_Variables.postman_environment.json'


function runCollection() {
    while (currentIndex < collections.length) {
      let collection = collections[currentIndex];
  
      newman.run(
        {
          collection: collection,
          environment: environmentFile,
          reporters: ['cli', 'htmlextra', 'json'],
          reporter: {},
          color: 'auto', // For colored output
        },
        (err, summary) => {
          if (err) {
            console.error(`Error running collection: ${err}`);
            return;
          }
  
          const environmentData = JSON.parse(fs.readFileSync(environmentFile, 'utf8'));
  
          const collectionEnvironment = summary.environment.values;
          environmentData.values = collectionEnvironment.map((variable) => ({
            key: variable.key,
            value: variable.value,
            enabled: true,
          }));
  
          // Continue to the next collection
          currentIndex--;
        }
      );
    }
  
    // All collections have been processed
    console.log('All collections processed.');
  }
  
  // Start the loop
  runCollection();