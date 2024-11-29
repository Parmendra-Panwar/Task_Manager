import express from "express";
import { authenticate } from "../middleware/authenticate";
import { getTodos, createTodo } from "../controllers/todoController";

const router = express.Router();

router.get("/", authenticate, (req, res, next) => {
  try {
    getTodos(req, res);
  } catch (error) {
    next(error); // Pass errors to the error-handling middleware
  }
});

router.post("/", authenticate, (req, res, next) => {
  try {
    createTodo(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
