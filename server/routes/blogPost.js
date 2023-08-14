import express from "express";
import {
  getBlogs,
  addBlog,
  deleteBlog,
} from "../controllers/blogPostController.js";

const router = express.Router();

// router.get("/", getBlog);
router.get("/id", getBlogs);
router.post("/add", addBlog);
router.delete("/:id", deleteBlog);

export default router;
