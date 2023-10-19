// Adding middleware to each and every route can lead to repetitive code and make your codebase harder to maintain. To address this issue, you can create a route instance with the middleware applied to it. This approach is often referred to as "route grouping" or "route middleware."
const express = require("express");
const app = express();

//Importing the middleware function
const reqFilter = require(`./middleware`);

//// Create a route instance with middleware applied
const route = express.Router();
route.use(reqFilter);

app.set("view engine", "ejs");

app.get("/profile", (_, resp) => {
  resp.render("profile");
});
route.get("/user", (_, resp) => {
  resp.render("user");
});
app.get("/contact", (_, resp) => {
  resp.send(`<h1>This is contact page.</h1>`);
});
route.get("/help", (_, resp) => {
  resp.send(`<h1>This is help page.</h1>`);
});

// Mount the route instance at a specific URL
app.use("/", route);

app.listen(3200);
