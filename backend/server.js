import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";
import cartRouter from "./routes/cartRoute.js";
import foodRouter from "./routes/foodRoute.js";
import orderRouter from "./routes/orderRoute.js";
import userRouter from "./routes/userRoute.js";


const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

//Db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user",userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter);

app.get("/",(req, res) => {
    res.send("API working");
});

app.listen(port, (req,res) => {
    console.log("Server is listening to port 8080");
});

//mongodb+srv://nandiswarnabha:<db_password>@cluster0.nc8ak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//mongodb+srv://nandiswarnabha:<db_password>@cluster0.icjfc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0