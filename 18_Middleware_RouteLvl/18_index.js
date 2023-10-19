const express = require("express");

const app = express();

const reqFilter = require(`./middleware`);
// Middleware

// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("<h1>Provide age.</h1>");
//   } else if (req.query.age < 18) {
//     resp.send(`<h1>You are not allowed to access this page.</h1>`);
//   } else {
//     next();
//   }
// };

//Following was the application level middleware, where as Route-level middleware can be applied to spcific routes, group of routes or the every route.

// app.use(reqFilter);

//making seperate files of middleware is a good practice, beacuse middlewares can be more than 1 , making seperate files for each helps

app.set("view engine", "ejs");

app.get("/profile", (_, resp) => {
  resp.render("profile");
});
app.get("/user", reqFilter, (_, resp) => {
  resp.render("user");
});
app.listen(3200);
