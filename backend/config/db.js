import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://nandiswarnabha:abcd123@cluster0.icjfc.mongodb.net/food-del")
    .then(() => 
    console.log("DB connected"));
}