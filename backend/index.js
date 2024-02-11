import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import { error } from "console";

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

// json to be sent to the server
app.use(express.json());

// listen on port 3000 and print if serving is running on 300
app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

// api routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// middleware for catching errors
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";

	return res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});
