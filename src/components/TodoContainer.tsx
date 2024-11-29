import { useState, useEffect } from "react";
import "./TodoContainer.css";
import TodoList from "./TodoList";
import Create from "./Create";

interface TodoType {
  id: number;
  title: string;
  date: string;
}

function TodoContainer() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  };

  // Delete a todo
  const deleteTodo = async (id: number) => {
    try {
      const response = await fetch("http://localhost:8080/api/todos/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }

      // Update the todos in the state
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  // Fetch todos when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo-container">
      <h1>Tasks</h1>
      <Create refreshTodos={fetchTodos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoContainer;
