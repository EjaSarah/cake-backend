import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose 
    .connect(
      //only copy the first line when copying connection string from mongodb atlas
      "mongodb+srv://sarahwrites4me:3Bcakes@cluster0.8mc6r.mongodb.net/backend"
    )
    .then(() => console.log("DB Connected"));
};
