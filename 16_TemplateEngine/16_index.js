// const express = require("express");

// const app = express();

// app.set("view engine", "ejs");
// app.get("/profile", (_, resp) => {
//   resp.render("profile");
// });
// app.listen(3000);

//-------------------------------------------------
const express = require("express");
const app = express();
const user = {
  name: "Abhijit Pramanick",
  email: "Abhijit@test.com",
  city: "Patna",
  skills: ["C++", "JS", "Python"],
};
app.set("view engine", "ejs");
app.get("/profile", (_, resp) => {
  resp.render("profile", { user });
});

app.get("/login", (_, resp) => {
  resp.render("login");
});
app.listen(3200);
