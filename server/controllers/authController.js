import db from "../config/db.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { hashpassword, comparePassword } from "../helper/auth.js";
import jwt from "jsonwebtoken";

dotenv.config();

export const register = (req, res) => {
  // checking if user alreday exits
  const checkUserQuery = "SELECT * FROM users WHERE email=?";
  db.query(checkUserQuery, [req.body.email], (error, result) => {
    if (error) {
      return res.json(error);
    }
    if (result.length) {
      return res.status(409).json("Alreday Registered Please log in");
    }

    // Hashing the Password using bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    // Register if user doesn't exits
    const insertUserQuery =
      "INSERT INTO users(`name`,`email`,`password`) VALUES (?)";

    const values = [req.body.name, req.body.email, hashedPassword];

    db.query(insertUserQuery, [values], (error, result) => {
      if (error) {
        return res.json(error);
      }
      return res.status(200).json("User Registered Successfully");
    });
  });
};
export const login = (req, res) => {
  // verifying user
  const getUserQuery = "SELECT * FROM users WHERE email=?";
  db.query(getUserQuery, [req.body.email], (error, result) => {
    if (error) {
      res.json(error);
    }
    if (result.length === 0) {
      return res.status(404).json("User is not Registered!!");
    }
    // verifying password

    const isPasswordValid = comparePassword(
      req.body.password,
      result[0].password
    );

    if (!isPasswordValid) {
      return res.status(400).json("Invalid email or password");
    }
    // Generating a JWT tokenx
    const token = jwt.sign({ id: result[0].id }, process.env.JWT_KEY);
    const { password, ...other } = result[0];
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .send({
        success: true,
        message: "Successfully Logged In",
        other,
      });
  });
};
export const logout = (req, res) => {
  res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Logged out Succefully" });
};
