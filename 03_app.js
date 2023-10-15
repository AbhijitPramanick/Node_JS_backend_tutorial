// Node JS Basics
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //   process.exit();
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
