import { Request, Response } from "express";
import { db } from "../db";

class UsersController {
  async getUsers(_: Request, res: Response) {
    const users = await db.query("SELECT * FROM users ORDER BY id ASC");

    res.json(users.rows);
  }

  async getUser(req: Request, res: Response) {
    const userId = req.params.id;
    const user = await db.query("SELECT * FROM users WHERE id = $1", [userId]);

    res.json(user.rows[0]);
  }

  async createUser(req: Request, res: Response) {
    const { username, password, email } = req.body;
    const user = await db.query(
      "INSERT INTO users (username, password, email) values ($1, $2, $3) RETURNING *",
      [username, password, email]
    );

    res.json(user.rows[0]);
  }

  async updateUser(req: Request, res: Response) {
    const userId = req.params.id;
    const { username, password, email } = req.body;
    const user = await db.query(
      "UPDATE users set username = $1, password = $2, email = $3 WHERE id = $4 RETURNING *",
      [username, password, email, userId]
    );

    res.json(user.rows[0]);
  }

  async deleteUser(req: Request, res: Response) {
    const userId = req.params.id;
    const user = await db.query("DELETE FROM users where id = $1", [userId]);

    res.json(user.rows[0]);
  }
}

export const usersController = new UsersController();
