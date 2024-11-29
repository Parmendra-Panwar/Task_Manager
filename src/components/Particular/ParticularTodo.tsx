import { useEffect, useState } from "react";
import PartiTodoList from "./PartiTodoList";
import "./ParticularTodo.css";
import { useParams } from "react-router-dom";
import PartiCreate from "../Create";

interface TodoType {
  id: number;
  title: string;
  date: string;
}

const ParticularTodo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  // Fetch the todos from the server
  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/todos/1");
      const data = await response.json();
      console.log(data.nestedTodo);
      setTodos(data.nestedTodo);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo-container">
      <PartiCreate refreshTodos={fetchTodos} />
      <PartiTodoList todos={todos} />
    </div>
  );
};

export default ParticularTodo;
