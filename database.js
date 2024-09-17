const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    const conection = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to mongoose DB");
  } catch (eror) {
    console.log(eror);
  }
};

module.exports = connectDB;
