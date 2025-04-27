import { Router } from "express";
import { getAllBlogs, createBlog, getBlogById, searchBlogs } from "../controllers/blogController.js";
const router = Router();
router.get("/", getAllBlogs);
router.post("/", createBlog);
router.get("/details/:id", getBlogById);
router.get("/search", searchBlogs);
export default router;
