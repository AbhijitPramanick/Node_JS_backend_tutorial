const express = require("express");
const app = express();
module.exports = reqFilter = (req, resp, next) => {
  if (!req.query.age) resp.send("<h1>Provide age</h1>");
  else if (req.query.age < 18)
    resp.send(`<h1>You are not allowed to access this</h1>`);
  else next();
};
