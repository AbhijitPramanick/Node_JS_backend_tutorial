// How to connect mongodb with nodeJS?

const { MongoClient } = require("mongodb");

//Alternative
// const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const database = "e-comm";

async function connectAndDoStuff() {
  try {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection("products");
    let response = await collection.find({}).toArray();
    console.log(response);
  } finally {
    await client.close();
  }
}
connectAndDoStuff();
