const http = require("http");

function dataControl(req, resp) {
  resp.write(`<h1>Hello, this is Abhijit Pramanick</h1>`);
  resp.end();
}

http.createServer(dataControl).listen(4500);
