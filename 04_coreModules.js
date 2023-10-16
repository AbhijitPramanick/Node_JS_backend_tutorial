//Global and non global core modules in node js
// Modules are the blocks of encapsulated code that communicate with an external application on the basis of their related functionality.
// The core modules include bare minimum functionalities of Node.js.
// Basically, core modules are modules that are built into node. js these modules come automatically with the node. js installation.
// console is an example of global module, hence need not be import upon use.
// fs, http, buffer are exampls of non global moldules, henace are nedded to be imported before use.

//Non global core module
const fs = require("fs");
fs.writeFileSync("04_hello.txt", "Hey there this is Abhijit Pramanick");

// Global core module
console.log("Directory name -->> " + __dirname);
console.log("File name -->> ", __filename);
