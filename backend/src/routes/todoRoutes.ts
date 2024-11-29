import express from "express";
import { authenticate } from "../middleware/authenticate";
import { getTodos, createTodo , deteTodo } from "../controllers/todoController";

const router = express.Router();

// authenticate,

router.get("/",  (req, res, next) => {
  try {
    getTodos(req, res);
  } catch (error) {
    next(error); 
  }
});
 
router.post("/",  (req, res, next) => {
  try {
    createTodo(req, res);
  } catch (error) {
    next(error);
  }
});


router.post("/delete", deteTodo);

export default router;
