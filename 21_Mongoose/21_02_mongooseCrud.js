const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");

const productSchema = mongoose.Schema({
  name: String,
  company: String,
  price: Number,
  category: String,
});

//Create operation

const saveInDB = async () => {
  const productModel = mongoose.model("products", productSchema);
  const data = new productModel({
    name: "Heaven 18",
    company: "Vivo",
    price: 180,
    category: "mobile",
  });
  const result = await data.save();
  console.log(result);
};

//Update operation

const updateInDB = async () => {
  const productModel = mongoose.model("products", productSchema);
  const data = await productModel.updateOne(
    { name: "POCO 91" },
    { $set: { price: 192 } }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const productModel = mongoose.model("products", productSchema);
  const data = await productModel.deleteOne({ name: "XphoneUltra3" });
  console.log(data);
};

const findInDB = async () => {
  const productModel = mongoose.model("products", productSchema);
  const data = await productModel.find({ price: { $gt: 200 } });
  console.log(data);
};

findInDB();
