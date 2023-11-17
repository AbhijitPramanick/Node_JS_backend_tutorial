const express = require("express");
const app = express();
require("./config");
const product = require("./products");

app.use(express.json());

app.post("/create", async (req, resp) => {
  console.log(req.body);
  resp.send("done");
  const data = product(req.body);
  const result = await data.save();
  console.log(result);
});

app.get("/list", async (req, resp) => {
  const data = await product.find();
  resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await product.deleteOne(req.params);
  resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
  let data = await product.updateOne(
    { _id: req.params },
    { $set: { price: 210 } }
  );
  resp.send(data);
});

app.listen(5000);
