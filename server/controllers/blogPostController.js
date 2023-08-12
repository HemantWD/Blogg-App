import db from "../config/db.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const getBlogs = (req, res) => {
  const getBlog = "SELECT * FROM blogs";
  db.query(getBlog, (error, result) => {
    if (error) {
      res.status(500).json(error);
    }
    res.status(200).json(result);
  });
};

export const addBlog = (req, res) => {
  const addBlog = "INSERT INTO blogs(`title`,`desccription`,`img`) VALUE (?)";

  const values = [req.body.title, req.body.desccription, req.body.img];
  db.query(addBlog, [values], (error, result) => {
    if (error) {
      return res.status(500).json(error);
    }
    return res.status(200).json("Blog has been updated");
  });
};

export const deleteBlog = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.status(401).json("Not Authenticated");
  }

  jwt.verify(
    token,
    process.env.JWT_KEY,
    {
      expiresIn: "2d",
    },
    (error, userInfo) => {
      if (error) {
        res.status(403).json("Token is not valid");
      }
      const blogId = req.params.id;
      const deleteBlog = "DELETE FROM blogs WHERE `id`=?";
      db.query(deleteBlog, [blogId], (req, res) => {
        if (error) {
          return res.status(403).json("You cannot delete this post");
        }
        return res.json("Post has been deleted!!");
      });
    }
  );
};
export const updateBlog = (req, res) => {
  res.json("from blog controller");
};
