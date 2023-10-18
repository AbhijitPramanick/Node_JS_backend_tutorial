const express = require("express");
const path = require("path");

const app = express();
const filePath = path.join(__dirname, "Public");

app.use(express.static(filePath));

app.listen(5300);

// http://localhost:5300
// http://localhost:5300/about.html
// http://localhost:5300/help.html
