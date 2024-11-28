import React from "react";
import Todo from "./Todo";

interface TodoType {
  id: number;
  title: string;
  date: string;
}

const TodoList = () => {
  const todoList: TodoType[] = [
    { id: 1, title: "Buy milk", date: "2020-01" },
    { id: 2, title: "Buy eggs", date: "2020-01" },
    { id: 3, title: "Buy bread", date: "2020-01" },
  ];

  return (
    <div className="todo-list">
      {todoList.map((todo) => (
        <Todo key={todo.id} to_do={todo} />
      ))}
    </div>
  );
};

export default TodoList;
