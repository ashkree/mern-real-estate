import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
dotenv.config();

// database
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch(() => {
		console.log(err);
	});

// server
const app = express();

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

// api routes
app.use("/api/user", userRouter);
