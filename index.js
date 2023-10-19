const newman = require('newman');

const collections = [
    './IndividualCollection/SignIn.postman_collection.json',
    './IndividualCollection/WorkSpace.postman_collection.json',

];
const environmentFile = './FeatureTesting_Variables.postman_environment.json'

let environmentVariables = [];
environmentVariables.push(
  {
    enabled: true,
    key: "foo",
    value: "bar",
    type: 'any'
  }
);

collections.forEach((collections) => {

    newman.run( {
      collection: collections,
      environment: environmentFile,
      envVar: environmentVariables,

      reporters: ['cli', 'htmlextra', 'json'],
      reporter: {
  
      }, 
      color: 'auto', // For colored output
    })    
})

  // });
    // (err, summary) => {
    //     if (err) {
    //         throw err;
    //     }
    //     // // Extract the clientHandshakeToken from the environment for the current collection
    //     summary.environment.values.find((v) => v.key === 'clientHandshakeToken').value = clientHandshakeToken;
    //     const targetObject = environmentFile.values.find((v) => v.key === 'clientHandshakeToken');
    //     console.log("TARGET OBJECT____:", targetObject)
    //     if(targetObject) {
    //       targetObject.value = clientHandshakeToken
    //     }
    //     console.log("TOKEN_____:", targetObject.value)
    //     // Get the updated environment after each run
    //    // environmentFile.values = summary.environment.values;
        
    //     // console.log(`clientHandshakeToken for ${collection}:`, clientHandshakeToken);
        
    //     // globalVariables[globalVariableName] = clientHandshakeToken;
        
    //     // summary.globals[globalVariableName] = clientHandshakeToken; 
    //     // globalVariableModule[globalVariableName] = clientHandshakeToken;       // Now you can use the clientHandshakeToken for this collection as needed.
    //     // // Now, you can access the global variable across collections
    //     // console.log(`Global ${globalVariableName} for ${collection}:`, summary.globals[globalVariableName]);

    //     // // console.log(`Environment for ${collection}:`, summary.environment);
    //     // console.log(`Global variables for ${collection}:`, globalVariables);
        

    //   })


























































































// // environmentFile = environmentFile.toJSON();
// const globalVariableName = 'clientHandshakeToken';
//  var clientHandshakeToken = '';
// // Create a module to store and share the global variable
// const globalVariableModule = {
//   [globalVariableName]: '',
// };



// // Define the new value for the global variable
// const newValue = 'new_value';

// // Define the global variables object
// const globalVariables = {
//   [globalVariableName]: globalVariableModule[globalVariableName],
// };


// const outputFolder = './'; // Directory where reports will be saved

// collections.forEach((collection) => {

//   const globalVariables = {
//     [globalVariableName]: globalVariableModule[globalVariableName], // Use the shared global variable
// };

//     newman.run(  {
//       collection: require(collection),
//       environment: environmentFile,
//       globals: environmentFile,
//       reporters: ['cli', 'htmlextra', 'json'],
//       reporter: {
//         // html: {
//         //     export: html_filename, // Specify the correct export path
//         // },
//         // json: {
//         //     export: json_filename, // Specify the JSON export path 
//           // },  
  
//       }, 
//       color: 'auto', // For colored output
//     },


//   // });
//     (err, summary) => {
//         if (err) {
//             throw err;
//         }
//         // // Extract the clientHandshakeToken from the environment for the current collection
//         summary.environment.values.find((v) => v.key === 'clientHandshakeToken').value = clientHandshakeToken;
//         const targetObject = environmentFile.values.find((v) => v.key === 'clientHandshakeToken');
//         console.log("TARGET OBJECT____:", targetObject)
//         if(targetObject) {
//           targetObject.value = clientHandshakeToken
//         }
//         console.log("TOKEN_____:", targetObject.value)
//         // Get the updated environment after each run
//        // environmentFile.values = summary.environment.values;
        
//         // console.log(`clientHandshakeToken for ${collection}:`, clientHandshakeToken);
        
//         // globalVariables[globalVariableName] = clientHandshakeToken;
        
//         // summary.globals[globalVariableName] = clientHandshakeToken; 
//         // globalVariableModule[globalVariableName] = clientHandshakeToken;       // Now you can use the clientHandshakeToken for this collection as needed.
//         // // Now, you can access the global variable across collections
//         // console.log(`Global ${globalVariableName} for ${collection}:`, summary.globals[globalVariableName]);

//         // // console.log(`Environment for ${collection}:`, summary.environment);
//         // console.log(`Global variables for ${collection}:`, globalVariables);
        

//       })
      // .on('beforeRequest', (item, callback) => {
      //   // Update the value of the global variable
      //   //clientHandshakeToken = summary.environment.values.find((v) => v.key === 'clientHandshakeToken').value;
      //   const targetObject = environmentFile.values.find((v) => v.key === 'clientHandshakeToken');
      //   if(targetObject) {
      //     targetObject.value = clientHandshakeToken
      //   }
      //   // Get the updated environment after each run
      //  // environmentFile.values = summary.environment.values;
        
      //   // console.log(`clientHandshakeToken for ${collection}:`, clientHandshakeToken);
        
      //   globalVariables[globalVariableName] = clientHandshakeToken;
      //   // globalVariableModule[globalVariableName] = clientHandshakeToken;
      //   // globalVariables[globalVariableName] = clientHandshakeToken;
      
      //   // Call the callback function to continue with the request
      //   callback(null, item);
      // });

  // });


// const newman = require('newman');

// // Define the path to your collection and environment file
// // const collectionFile =   './IndividualCollection/SignIn.postman_collection.json'
// const collectionFile = [
//     './IndividualCollection/SignIn.postman_collection.json',
//     // './IndividualCollection/WorkSpace.postman_collection.json',
//     // './IndividualCollection/Project.postman_collection.json',
//     // './IndividualCollection/Bug.postman_collection.json',
//     // './IndividualCollection/crashing.postman_collection.json',



//     // './FeatureTesting.postman_collection.json',
  
//   // Add more collection file paths as needed
// ];
  
  
  

// const environmentFile = './FeatureTesting_Variables.postman_environment.json';

// // Define a variable to store the extracted token
// let clientHandshakeToken = '';

// // Define the options for running the collection
// const runOptions = {
//   collection: collectionFile,
//   environment: environmentFile,
//   reporters: ['cli'], // You can add more reporters if needed
//   color: 'auto', // For colored output
// };

// // Run the collection using Newman
// newman.run(runOptions, (err, summary) => {
//   if (err) {
//     throw err;
//   }

//   // Extract the "clientHandshakeToken" variable from the environment
//   const environment = summary.environment;
//   clientHandshakeToken = environment.values.find((v) => v.key === 'clientHandshakeToken').value;

//   console.log('clientHandshakeToken:', clientHandshakeToken);

//   // Now you can use the "clientHandshakeToken" variable as needed in your script.
//   // For example, you can export it to a file or use it in subsequent requests.

//   // Perform any additional tasks with the extracted token here.

//   // If you want to export the token to a file:
//   // const fs = require('fs');
//   // fs.writeFileSync('clientHandshakeToken.txt', clientHandshakeToken, 'utf-8');
// });


// for (const collectionFile of collections) {
//   // Run each collection with the current environment
//   newman.run({
//     collection: collectionFile,
//     environment: environmentFile,
//   }, function (err, summary) {
//     if (err) {
//       console.error(`Error running ${collectionFile}: ${err}`);
//     } else {
//       // Get the updated environment after each run
//       environmentFile.values = summary.environment.values;
//       // console.log("environment variables______:", environmentFile.values )
//       console.log(`${collectionFile} run completed.`);
//     }
//   });
// }


