import mongoose from "mongoose";
import { DB_NAME } from "../contants"

let isConnected: boolean = false;

const connectDB = async () => {
    if (isConnected)
        return;

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        isConnected = true;

        console.log(`MongoDB connected successfully!!!\nDB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error: ", error);
        process.exit(1);
    }
}

export default connectDB;