//Importing the express module
const express = require("express");

//Starting the execution of the express
const app = express();

//Rendering an HTML in Browser and demonstration of links to other pages
app.get("", (req, res) => {
  res.send(`<h1>This is Home page</h1>
  <a href='/about'>Go to About</a>
  <a href='/help'>Go to help</a>
  <a href='/contact'>Go to contact</a>`);
});

//Rendering an HTML in browser
app.get("/about", (req, res) => {
  console.log(`Data sent by the browser is : ${req.query.name}`);
  res.send(`
    <h1>This is about page</h1>
    <p>Fill the following form</p>
    <input type="text" placeholder="Enter text here ${req.query.name}"/>
    <button>Click here</button>

    <a href='/about'>Go to About</a>
    <a href='/help'>Go to help</a>
    <a href='/contact'>Go to contact</a>
    `);
});

//Rendering a JSON on the browser
app.get("/help", (req, res) => {
  res.send(`
    <h1>This is Help page.</h1>
    [{
        name:"Abhijit Pramanick",
        email:"abhijit@test.com"
    },
    {
        name:"Abhishek Pramanick",
        email:"abhishek@test.com"
    },
    {
        name:"Animesh Pramanick",
        email:"animesh@test.com"
    },
    {
        name:"Amitesh Pramanick",
        email:"amitesh@test.com"
    }]
    
    <a href='/about'>Go to About</a>
    <a href='/help'>Go to help</a>
    <a href='/contact'>Go to contact</a>`);
});

//Copy and paste this : http://localhost:5300/contact/?name=Abhijit
app.get("/contact", (req, res) => {
  console.log(`Data sent by the browser is : ${req.query.name}`);
  res.send(`
    <h1>This is contact page. Welcome, ${req.query.name}</h1>

    <a href='/about'>Go to About</a>
    <a href='/help'>Go to help</a>
    <a href='/contact'>Go to contact</a>`);
});
app.listen(5300);
