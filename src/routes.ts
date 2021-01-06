import { Router, Request, Response } from "express";
import authMiddleware from "./middlewares/auth";

import {
  get_all_users,
  get_user,
  create_user,
  delete_user,
} from "./controllers/admin/userController";

import {
  login,
  auth,
  guest,
} from "./controllers/admin/authController";

import {
  get_all_teachers,
  get_teacher,
  create_teacher
} from "./controllers/base/teacherController";

const routes = Router();

routes.get("/", async (request: Request, response: Response) => {
  response.send("WellCome!");
});

routes
  .get("/api/users", get_all_users)
  .get("/api/users/:id", get_user)
  .post("/api/users", create_user)
  .delete("/api/users/:id", delete_user)

  .post("/api/auth/login", login)
  .get("/api/auth/guest", guest)
  .get("/api/auth/auth", authMiddleware, auth)
  
  .get("/api/teachers", get_all_teachers)
  .get("/api/teachers/:id", get_teacher)
  .post("/api/teachers/",create_teacher)
  
export default routes;
