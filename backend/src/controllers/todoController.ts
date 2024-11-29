import { Request, Response } from "express";

export const getTodos = (req: Request, res: Response): void => {
  const todos = [
    { id: 1, title: "Buy milk", date: "2024-01-01" },
    { id: 2, title: "Buy bread", date: "2024-01-02" },
  ];
  res.json(todos);
};

export const createTodo = (req: Request, res: Response): void => {
  const { title, date } = req.body;

  if (!title || !date) {
    res.status(400).json({ message: "Invalid input" });
    return;
  }

  const newTodo = { id: Date.now(), title, date };
  res.status(201).json({ message: "Todo created", todo: newTodo });
};
