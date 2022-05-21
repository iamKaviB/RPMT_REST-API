const mongoose = require("mongoose");

let mongoDb;

const connectDB = async () => {
  try {
    const connectionString = process.env.MONGO_URI;
    mongoDb = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected')

   
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
  return mongoDb;
};

module.exports = connectDB;