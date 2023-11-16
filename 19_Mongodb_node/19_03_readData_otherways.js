const dbConnect = require("./19_03_mongodb");
// //Alternative 1
// dbConnect().then((resp) => {
//   resp
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

//Alternative 2
const main = async () => {
  const { client, collection } = await dbConnect();
  const result = await collection.find().toArray();
  console.log(result);

  //Close the Mongodb client after the operations are done.
  await client.close();
};
main();
