import express from "express";
import dotenv from "dotenv";
import auth from "./routes/auth.js";
import blogPost from "./routes/blogPost.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

// config env
dotenv.config();

// database config

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json("Image Uploaded");
});

app.use("/api", auth);
app.use("/blog", blogPost);

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
