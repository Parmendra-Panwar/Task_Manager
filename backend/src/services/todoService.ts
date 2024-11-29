import Todo from "../models/Todo";

export const getAllTodos = async () => {
  return await Todo.find();
};

export const addTodo = async (title: string, description: string) => {
  const todo = new Todo({ title, description });
  return await todo.save();
};
