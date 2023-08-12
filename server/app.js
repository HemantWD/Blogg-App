import express from "express";
import dotenv from "dotenv";
import auth from "./routes/auth.js";
import blogPost from "./routes/blogPost.js";

// config env
dotenv.config();

// database config

const app = express();

app.use(express.json());

app.use("/api", auth);
app.use("/blog", blogPost);

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
