import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
      "INSERT INTO users(`name`,`email`,`password`) VALUES (?,?,?)";

    const values = [req.body.name, req.body.email, hashedPassword];

    db.query(insertUserQuery, values, (error, result) => {
      if (error) {
        return res.json(error);
      }
      return res.status(200).json("User Registered Successfully");
    });
  });
};
export const login = (req, res) => {
  const { email, password } = req.body;
  // verifying user
  const getUserQuery = "SELECT * FROM users WHERE email=?";
  db.query(getUserQuery, [email], (error, result) => {
    if (error) {
      res.json(error);
    }
    if (result.length === 0) {
      return res.status(404).json("User is not Registered!!");
    }
    // verifying password
    const hashedPassword = result[0].password;
    const isPasswordValid = bcrypt.compareSync(password, hashedPassword);
    if (!isPasswordValid) {
      return res.status(400).json("Invalid email or password");
    }
    // Generating a JWT tokenx
    const token = jwt.sign({ id: result[0].id }, "jwtkey");
  });
};
export const logout = (req, res) => {};
