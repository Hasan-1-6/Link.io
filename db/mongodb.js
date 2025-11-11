import mongoose from "mongoose";

async function connectDB(env) {
  try {
    await mongoose.connect(env);
    console.log(`MongoDB connection established`);
  } catch (error) {
    console.error(`Failed to connect to DB : ${error}`);
    throw error;
  }
}

export default connectDB;
