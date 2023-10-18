const express = require("express");
const app = express();

app.get("", (req, res) => {
  console.log(`The data sent by the browser -->> ${JSON.stringify(req.query)}`);
  console.log(`The data sent by the browser -->> ${req.query.name}`);
  console.log(`The data sent by the browser -->> `, req.query);
  console.log(`The data sent by the browser -->> `, req.query.name);
  res.send("This is Home page. Welcome, " + req.query.name);
});

app.get("/about", (req, res) => {
  res.send("This is About page.");
});

app.get("/help", (req, res) => {
  res.send("This is Help page.");
});

app.get("/contact", (req, res) => {
  res.send("This is Contact page.");
});
app.listen(4200);
