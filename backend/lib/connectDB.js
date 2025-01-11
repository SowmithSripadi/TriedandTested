import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Mongo db connected");
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
