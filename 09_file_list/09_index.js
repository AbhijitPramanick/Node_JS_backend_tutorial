// //Importing modules
// const fs = require("fs");
// const path = require("path");

// //Setting the directory path of the current directory we are present.
// // The path.join(__dirname) in Node.js is used to create an absolute path by joining the parts of a file path together.
// // The '__dirname' variable represents the directory name of the current module, which is the directory where the current JavaScript file is located.
// const dirPath = path.join(__dirname, "09_files");

// //Creating 05 files by using loop in a file named '09_files'.
// //giving the path name will ensure the files are created in the folder we desire
// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(
//     `${dirPath}/SampleText${i + 1}.txt`,
//     `This is sample text in the file number ${i + 1}`
//   );
// }

// -------------------------------------------------------------

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "09_files");
for (let i = 0; i < 5; i++) {
  fs.writeFileSync(
    `${dirPath}/Sample${i + 1}.txt`,
    `File number ${i + 1} : Here there, this is a sample text`
  );
}
fs.readdir(dirPath, (err, files) => {
  files.forEach((items) => {
    console.log(`File name is ${items}`);
  });
});
