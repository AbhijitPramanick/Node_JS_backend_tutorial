const dbConnect = require("./20_01_mongodb");

//import express module and creating an executable form
const express = require("express");
const app = express();

//importing mongodb module for creating instance of objectid used for deletion operation
const mongodb = require("mongodb");

//Middle ware use for getting data sent from postman
app.use(express.json());

app.get("/", async (_, resp) => {
  const { client, collection } = await dbConnect();
  const data = await collection.find().toArray();
  console.log(data);
  resp.send(data);

  await client.close();
});

app.post("/", async (req, resp) => {
  //Sending the data to the postman
  //   resp.send({ name: "Abhijit" });

  //Getting the data from the postman to the node and sending it again in the postman
  console.log(req.body);
  resp.send(req.body);

  //Storing the data sent from the postman in the mongodb
  const { client, collection } = await dbConnect();
  const result = await collection.insertMany(req.body);
  if (result.acknowledged) {
    console.log(`Data inserted`);
  }
  await client.close();
});

app.put("/:name", async (req, resp) => {
  const { client, collection } = await dbConnect();

  resp.send(req.body);
  const result = await collection.updateOne(
    // { company: "Nokia" },
    // { $set: { price: 180 } }

    //Alternative:
    // { company: req.body.company },
    // { $set: { price: req.body.price } }

    //Alternative:
    { name: req.params.name },
    { $set: { name: req.body.name } }
  );

  if (result.acknowledged) {
    console.log("Data updated");
  }
  await client.close();
});

app.delete("/:id", async (req, resp) => {
  const { client, collection } = await dbConnect();
  const result = await collection.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  if (result.acknowledged) {
    console.log(result);
    console.log(
      `${result.deletedCount} data with id: ${req.params.id} has been deleted.`
    );
    resp.send("Deletion done");
  } else {
    resp.send("Deletion failed");
  }
  await client.close();
});

app.listen(5600);
