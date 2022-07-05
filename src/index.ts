import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const app = express();
const port = process.env.PORT;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "quiz",
  password: "admin",
});

const getUsers = (req: Request, res: Response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      console.log(error);
    }
    res.status(200).json(results.rows);
  });
};

app.get("/", getUsers);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
