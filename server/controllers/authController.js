import db from "../config/db.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  // checking if user alreday exits
  const checkUserQuery = "SELECT * FROM users WHERE email=?";
  await db.query(checkUserQuery, [req.body.email], (error, result) => {
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
export const login = (req, res) => {};
export const logout = (req, res) => {};
