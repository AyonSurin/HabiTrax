// src/server.ts
import express from "express";
import habitRoutes from "./routes/habitRoutes";
import authRoutes from "./routes/authRoutes";
import * as dotenv from "dotenv";

dotenv.config(); // Load env variables

const app = express();

app.use(express.json()); // Parse JSON bodies

app.use("/api", habitRoutes); // Use habit routes

app.use("/api/auth", authRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
