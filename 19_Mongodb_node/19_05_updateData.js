const dbConnect = require("./19_03_mongodb");

const handleUpdate = async () => {
  const { client, collection } = await dbConnect();
  const result = await collection.updateMany(
    { company: "Apple" },
    { $set: { price: 150 } }
  );
  if (result.acknowledged) {
    console.log(`${result.modifiedCount} data has been updated.`);
  }
  await client.close();
};
handleUpdate();
