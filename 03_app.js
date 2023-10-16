// Node JS Basics

//Importing global packages
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //   process.exit();

  //Parsing
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(`<html>`);
    res.write(
      `<head>
        <title>Enter message</title>
      </head>`
    );
    res.write(
      `<body>
        <form action = "/message" method="POST">
            <input type="text" name= "message">
            <button type="submit">Send</button>
        </form>
      </body>`
    );
    res.write(`</html>`);
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    // here we want to redirect the user to '/' and  we want to credate a new file and store the message in a new file with the message the user entered in it

    fs.writeFileSync("message03.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("content-type", "text/html");
  res.write(`<html>`);
  res.write(
    `<head>
        <title>My first page</title>
      </head>`
  );
  res.write(
    `<body>
        <h1> Hello there, this is Node js server.</h1>
      </body>`
  );
  res.write(`</html>`);
});
server.listen(3000);
