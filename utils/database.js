import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(
      "mongodb+srv://narenn185:narenn185@cluster0.ol44y0k.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "share_prompt",
      }
    );
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
