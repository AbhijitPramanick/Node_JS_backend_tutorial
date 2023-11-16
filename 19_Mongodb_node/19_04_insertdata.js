const dbConnect = require("./19_03_mongodb.js");

const handleInsert = async () => {
  const { client, collection } = await dbConnect();

  const result = await collection.insertMany([
    {
      name: "Xphone2",
      company: "Apple",
      price: 200,
      category: "mobile",
    },
    {
      name: "XphoneUltra3",
      company: "Apple",
      price: 210,
      category: "mobile",
    },
    {
      name: "Xphone4",
      company: "AppleOne",
      price: 190,
      category: "mobile",
    },
  ]);

  if (result.acknowledged) {
    console.log("Data inserted");
  }

  await client.close();
};

handleInsert();
