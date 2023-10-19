// const express = require("express");
// const app = express();

// //Middleware
// const reqFilter = (req, res, next) => {
//   if (!req.query.age) {
//     res.send(`Please provide your age.`);
//   } else if (req.query.age < 18) {
//     res.send(`You are not allowed to access this page`);
//   } else {
//     next();
//   }
// };

// app.use(reqFilter);

// app.set("view engine", "ejs");
// app.get("/profile", (req, resp) => {
//   resp.render("profile");
// });
// app.get("/user", (req, resp) => {
//   resp.render("user");
// });
// app.listen(3200);

// --------------------------------------

const express = require("express");

const app = express();

// Middleware
const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Provide age.");
  } else if (req.query.age < 18) {
    resp.send(`You are not allowed to access this page`);
  } else {
    next();
  }
};

app.use(reqFilter);

app.set("view engine", "ejs");

app.get("/profile", (req, resp) => {
  resp.render("profile");
});
app.get("/user", (req, resp) => {
  resp.render("user");
});
app.listen(3200);
