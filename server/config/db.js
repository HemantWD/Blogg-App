import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

// connecting to mysql database
const connectDB = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.envDATABASE_PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 10,
});

connectDB.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MYSQL Connected");
  }
});

export default connectDB;
