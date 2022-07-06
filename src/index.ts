import express from "express";
import dotenv from "dotenv";
import { usersRouter } from "./routes";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use("/api", usersRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
