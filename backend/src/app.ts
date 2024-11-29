import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes";
import connectDB from "./config/database";
import { errorHandler } from "./middleware/errorMiddleware";

dotenv.config();

const app = express();

// Connect to the database
// connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(cors());

// Routes
app.use("/api/todos", todoRoutes);

// Error Handling
app.use(errorHandler);

export default app; 
