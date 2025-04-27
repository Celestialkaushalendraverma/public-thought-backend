import "reflect-metadata"; // Make sure this is at the very top
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "dotenv/config";
import blogRoutes from "./routes/blogRoutes";
import { AppDataSource } from "./data-source";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
    res.send("API is working!");
});
app.use("/api/blogs", blogRoutes);
AppDataSource.initialize()
    .then(() => {
    console.log("📦 Database connected");
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error("❌ Database connection failed:", error);
});
