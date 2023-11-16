const dbConnect = require("./19_03_mongodb");

const handleDelete = async () => {
  const { client, collection } = await dbConnect();
  const result = await collection.deleteMany({ company: "iPhone" });
  console.log(result);
  if (result.acknowledged) {
    console.log(`${result.deletedCount} Data has been deleted.`);
  }
  await client.close();
};
handleDelete();

// { acknowledged: true, deletedCount: 1 }
