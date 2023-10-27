// const newman = require('newman');
// const fs = require('fs');
// const util = require('util');
// const exec = util.promisify(require('child_process').exec);

// // /**
// //  * Executes a shell command and return it as a Promise.
// //  * @param cmd {string}
// //  * @return {Promise<string>}
// //  */
// // function execShellCommand(cmd) {
// //   console.log(cmd);
// //   const exec = require('child_process').exec;
// //   return new Promise((resolve, reject) => {
// //    exec(cmd, (error, stdout, stderr) => {
// //     if (error) {
// //      console.warn(error);
// //     }
// //     // console.log(stdout);
// //     resolve(stdout? stdout : stderr);
// //    });
// //   });
// //  }

// const collections = [
//   './IndividualCollection/SignIn.postman_collection.json',
//    './IndividualCollection/WorkSpace.postman_collection.json',
//     // './IndividualCollection/Project.postman_collection.json',
//   //  './IndividualCollection/Bug.postman_collection.json'
// ];

// async function runCommands() {
//   // const commands = [
//   //   `sudo newman run ${collection} -e FeatureTesting_Variables.postman_environment.json -r htmlextra --reporter-htmlextra-export --reporter-html-export $reportFile`,
//   //   // Add more commands as needed
//   // ];

//   for (const collection of collections) {
//     try {
//       let command = `sudo newman run ${collection} -e FeatureTesting_Variables.postman_environment.json  -r cli,htmlextra --reporter-htmlextra-export --reporter-html-export $reportFile --verbose`;
//       console.log("> ", command)
//       const { stdout, stderr } = await exec(command);
//       console.log(`Command output: ${stdout}`);
//       console.error(`Command error: ${stderr}`);
//     } catch (error) {
//       console.error(`Error executing command: ${error.message}`);
//     }
//   }
// }

// runCommands();



