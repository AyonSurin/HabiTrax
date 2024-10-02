// src/server.ts
import express from "express";
import authRoutes from "./routes/authRoutes";
import dotenv from "dotenv";
import connectDB from "./config/db";
import habitRoutes from "./routes/habitRoutes";
import habitProgress from "./routes/habitProgress"

dotenv.config(); // Load env variables

const app = express();

connectDB();

app.use(express.json()); // Parse JSON bodies

app.use("/auth", authRoutes);

app.use("/habits", habitRoutes);

app.use("/progress", habitProgress)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
