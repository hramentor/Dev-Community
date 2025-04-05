const mongoose = require("mongoose");

//mongoose.connect("mongodb+srv://hramentor:xmC3aA0KTaFtrzbz@hra.ewxln.mongodb.net/")


const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://hramentor:xmC3aA0KTaFtrzbz@hra.ewxln.mongodb.net/devcommunitynew"
  );
};


module.exports=connectDB

// connectDB()
//   .then(() => {
//     console.log("Database Connection is established");
//   })
//   .catch((err) => {
//     console.log("Database Connection not established");
//   });








