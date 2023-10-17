// In Node.js, the `process` object is a global object that provides information and control over the current Node.js process. It allows you to interact with the running Node.js application and access various properties and methods related to the process. Some of the common properties and methods of the `process` object include:

// 1. `process.argv`: An array that contains the command-line arguments used to start the Node.js process. `process.argv[0]` is the path to the Node.js executable, and `process.argv[1]` is the path to the JavaScript file being executed. Additional arguments follow these two elements.

// 2. `process.env`: An object that represents the current environment variables. You can use it to access environment variables or set new ones.

// 3. `process.cwd()`: A method that returns the current working directory of the Node.js process.

// 4. `process.exit([code])`: A method used to exit the current Node.js process. You can optionally provide an exit code as an argument. A code of 0 typically indicates a successful exit, while non-zero codes usually signify an error.

// 5. `process.pid`: A property that contains the process ID (PID) of the Node.js process.

// 6. `process.platform`: A property that indicates the platform on which Node.js is running, such as 'win32', 'linux', or 'darwin'.

// 7. `process.on(event, callback)`: A method to register event handlers for various process-related events, such as 'exit', 'uncaughtException', 'SIGINT', 'SIGTERM', and others.

// 8. `process.stdout` and `process.stderr`: Streams that represent standard output and standard error, respectively, allowing you to write to or read from these streams.

// 9. `process.stdin`: A stream that represents standard input, allowing you to read data from the command line.

// The `process` object is often used to handle command-line arguments, manage environment variables, monitor and control the application's behavior, and respond to various events during the execution of a Node.js program. It is an essential part of Node.js for building command-line tools and managing the runtime environment.

console.log(process.argv);
console.log(process.argv[0]); //path to the Node.js executable.
console.log(process.argv[1]); //path to the JavaScript file being executed.
console.log(process.argv[2]);
console.log(process.argv[3]);

//taking input from the command line and storing the input in another file, the file name is also given from the command line
const fs = require("fs");
const input = process.argv;
// fs.writeFileSync(input[2], input[3]);

//Now creating a file and storing the data from the command line and also renmoving an existing file from the command line input

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid input");
}
