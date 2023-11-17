// Mongoose is a popular Node.js library for MongoDB that simplifies database interactions by providing features such as schema definition, validation, middleware, and a user-friendly query API. It adds a layer of abstraction over the MongoDB driver, making it easier to work with MongoDB in a Node.js environment. Mongoose is often chosen for its ease of use, schema enforcement, and additional features that enhance the development experience.

// In Mongoose:

// Schema: Defines the structure and rules for documents in a MongoDB collection, specifying fields, types, and constraints.

// Model: Represents a MongoDB collection and provides methods for creating, reading, updating, and deleting documents based on a defined schema. It acts as an interface between the application and the database, allowing structured interaction with MongoDB data.
// -------------------------------------------
const mongoose = require("mongoose");

const saveInDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const productSchema = new mongoose.Schema({
    name: String,
  });
  const productsModel = mongoose.model("products", productSchema);
  const data = new productsModel({ name: "z40" });
  const result = await data.save();
};

// __v: The version key added by Mongoose. It represents the version of the document. When you update a document, Mongoose increments the version number. This is helpful when dealing with concurrent updates from multiple clients to ensure that changes are applied in the correct order.
