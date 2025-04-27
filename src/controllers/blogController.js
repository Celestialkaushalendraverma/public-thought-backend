import { AppDataSource } from "../data-source.js";
import { Blog } from "../entities/Blog.js";
import { ILike } from "typeorm"; // 👈 For case-insensitive search
export const getAllBlogs = async (_req, res) => {
    const blogRepo = AppDataSource.getRepository(Blog);
    const blogs = await blogRepo.find({ order: { id: "DESC" } });
    res.json(blogs);
};
export const createBlog = async (req, res) => {
    const { title, content, name, email } = req.body;
    const blog = new Blog();
    blog.title = title;
    blog.content = content;
    blog.name = name;
    blog.email = email;
    try {
        const savedBlog = await AppDataSource.getRepository(Blog).save(blog);
        res.status(201).json(savedBlog);
    }
    catch (err) {
        res.status(500).json({ message: "Error saving blog", error: err });
    }
};
export const getBlogById = async (req, res) => {
    const blogRepo = AppDataSource.getRepository(Blog);
    const { id } = req.params;
    try {
        const blog = await blogRepo.findOneBy({ id: Number(id) });
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.json(blog);
    }
    catch (error) {
        console.error("Error fetching blog by ID:", error);
        res.status(500).json({ message: "Server error" });
    }
};
// Search function for blogs by title or name
export const searchBlogs = async (req, res) => {
    const blogRepo = AppDataSource.getRepository(Blog);
    const { query } = req.query;
    console.log(query);
    // Validate if the query parameter exists
    if (!query || typeof query !== "string") {
        return res.status(400).json({ message: "Search query is required" });
    }
    try {
        // Searching blogs by title or name
        const blogs = await blogRepo.find({
            where: [
                { title: ILike(`%${query}%`) }, // Searching by title
                { name: ILike(`%${query}%`) } // Searching by name
            ],
            order: { created_at: "DESC" }, // Sorting by creation date
        });
        // Return the matching blogs
        res.json(blogs);
    }
    catch (error) {
        console.error("Error searching blogs:", error);
        res.status(500).json({ message: "Server error" });
    }
};
