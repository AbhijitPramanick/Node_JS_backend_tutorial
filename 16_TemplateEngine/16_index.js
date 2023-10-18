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
};
app.set("view engine", "ejs");
app.get("/profile", (_, resp) => {
  resp.render("profile", { user });
});
app.listen(3200);
