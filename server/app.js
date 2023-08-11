import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import auth from "./routes/auth.js";
import cookieParser from "cookie-parser";

// config env
dotenv.config();

// database config

const app = express();

app.use(express.json());
app.use(cookieParser);
app.use(cors());
app.use("/api", auth);

//routes
// app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
