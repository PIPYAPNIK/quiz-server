import { Router } from "express";
import { usersController } from "../controllers";

export const usersRouter = Router();

usersRouter.get("/users", usersController.getUsers);
usersRouter.get("/users/:id", usersController.getUser);
usersRouter.put("/users/:id", usersController.updateUser);
usersRouter.post("/users", usersController.createUser);
usersRouter.delete("/users/:id", usersController.deleteUser);
