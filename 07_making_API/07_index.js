// const http = require("http");
// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "content-type": "application/json" });
//     resp.write(
//       JSON.stringify({ name: "Abhijit Pramanick", email: "abhijit@test.in" })
//     );
//     resp.end();
//   })
//   .listen(5000);

//-----------------------------------------------------
//Instead of writing data in the write method of resp object, we are importing the data from another JS file and utilising it.
const http = require("http");
http
  .createServer((req, resp) => {
    resp.writeHead(200, { "content-type": "application/json" });
    const data = require("./07_data");
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(5500);
