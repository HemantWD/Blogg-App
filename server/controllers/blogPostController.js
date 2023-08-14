import db from "../config/db.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const getBlogs = (req, res) => {
  const getBlog = "SELECT * FROM blog";
  db.query(getBlog, (error, result) => {
    if (error) {
      res.status(500).json(error);
    }
    res.status(200).json(result);
  });
};

export const addBlog = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json("Not Authenticated");
  }

  jwt.verify(token, process.env.JWT_KEY, (error, userInfo) => {
    if (error) {
      return res.status(403).json("Token is not valid");
    }

    const addBlogQuery =
      "INSERT INTO blog(`title`,`description`,`img`,`uid`) VALUES (?, ?, ?, ?)";

    const values = [
      req.body.title,
      req.body.description,
      req.body.img,
      userInfo.id,
    ];

    db.query(addBlogQuery, values, (error, result) => {
      if (error) {
        return res.status(500).json(error);
      }
      return res.status(200).json("Blog has been added");
    });
  });
};

export const deleteBlog = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json("Not Authenticated");
  }

  jwt.verify(token, process.env.JWT_KEY, (error, userInfo) => {
    if (error) {
      return res.status(403).json("Token is not valid");
    }

    const blogId = req.params.id;
    const deleteBlogQuery = "DELETE FROM blog WHERE `id`=? AND `uid`=?";
    db.query(deleteBlogQuery, [blogId, userInfo.id], (error, result) => {
      if (error) {
        return res.status(403).json("You can delete only your post");
      }
      return res.status(200).json("Post has been deleted");
    });
  });
};
