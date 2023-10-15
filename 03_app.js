// Node JS Basics
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //   process.exit();
  const url = req.url;
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
