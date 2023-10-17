// While revising the foloowing code, please comment the other uperation swhich you are not reading
const fs = require("fs");
const path = require("path");

//Create
const filePath = path.join(__dirname, "10_files");
fs.writeFileSync(`${filePath}/sampleText.txt`, "This is a sample text");

//Read
fs.readFile(`${filePath}/sampleText.txt`, "utf8", (err, item) => {
  if (!err) {
    console.log(`File read successfully`);
    console.log(item);
  }
});

//Update
fs.appendFileSync(
  path.join(filePath, "sampleText.txt"),
  "\nThis is update operation",
  (err) => {
    if (!err) console.log(`Update operation successful`);
    else console.log(`Error occured while updating the file`);
  }
);

//Renaming before the delete operation : rename is not a CRUD operation
fs.rename(
  path.join(filePath, "sampleText.txt"),
  path.join(filePath, "Apple.txt"),
  (err) => {
    if (!err) console.log(`Renaming process successful`);
    else console.log(`Error occured while renaming the file`);
  }
);

// DELETE operation
fs.unlinkSync(path.join(filePath, "Apple.txt"), (err) => {
  if (!err) console.log(`Delete operation successful`);
  else console.log(`Error occured while deleteing the file`);
});
