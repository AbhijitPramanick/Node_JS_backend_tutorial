const express = require("express");
const path = require("path");

const app = express();
const filePath = path.join(__dirname, "public");

//Following we are demonstrating the getting the pages with showing extensions to the user, so that the user does not get to know about the our file formats

app.get("/", (_, resp) => {
  resp.sendFile(`${filePath}/index.html`);
});
app.get("/contact", (_, resp) => {
  resp.sendFile(`${filePath}/contact.html`);
});
app.get("/about", (_, resp) => {
  resp.sendFile(`${filePath}/about.html`);
});

app.get("/admin", (_, resp) => {
  resp.sendFile(`${filePath}/admin.html`);
});

app.get("/careers", (_, resp) => {
  resp.sendFile(`${filePath}/careers.html`);
});
app.get("/user", (_, resp) => {
  resp.sendFile(`${filePath}/user.html`);
});

//Preparing the failed fetching page by displaying 404 status in a new page
app.get("*", (_, resp) => {
  resp.sendFile(`${filePath}/pageNotFound.html`);
});
//Listen to the app
app.listen(6200);
