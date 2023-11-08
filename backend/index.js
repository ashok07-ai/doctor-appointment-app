import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import authRoute from "./routes/auth.js"
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

const corsOptions = {
    origin: true
}

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// routes
// auth routes
app.use('/api/v1/auth', authRoute)

// database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)

        console.log("Database connected successfully!!")
    } catch (error) {
        console.log("Database connection error!!", error)
    }
}


app.get('/', (req, res) => {
    res.send("Welcome to backend of Doctor Appointment App")
})

app.listen(port, () => {
    connectDB()
    console.log(`Server is running on port ${port}`)
})