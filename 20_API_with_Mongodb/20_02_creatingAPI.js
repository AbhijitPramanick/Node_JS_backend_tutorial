const dbConnect = require("./20_01_mongodb");

//import express module and creating an executable form
const express = require("express");
const app = express();

app.get("/", async (_, resp) => {
  const { client, collection } = await dbConnect();
  const data = await collection.find().toArray();
  console.log(data);
  resp.send(data);

  await client.close();
});
app.listen(5600);
