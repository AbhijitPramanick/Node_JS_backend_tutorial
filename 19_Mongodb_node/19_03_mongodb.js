const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "e-comm";

async function dbConnect() {
  const result = await client.connect();
  const db = result.db(database);
  const collection = db.collection("products");
  return { client, collection };
}
module.exports = dbConnect;
