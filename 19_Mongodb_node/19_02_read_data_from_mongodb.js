const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const database = "e-comm";

async function connectAndGetData() {
  try {
    const result = await client.connect();
    const db = result.db(database);
    const collection = db.collection("products");
    const response = await collection.find({ name: "m 40" }).toArray();
    console.log(response);
  } finally {
    await client.close();
  }
}
connectAndGetData();
