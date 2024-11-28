// import React from "react";
import "./Todo.css";
interface TodoProps {
  to_do: {
    id: number;
    title: string;
    date: string;
  };
}

const Todo = ({ to_do }: TodoProps) => {
  return (
    <div className="todo" style={{ display: "flex", flexDirection: "row" }}>
      <h3>{to_do.title}</h3>
      <h4 style={{ marginLeft: "20px" }}>{to_do.date}</h4>
      <button className="button-82-pushable" role="button">
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">✖</span>
      </button>
    </div>
  );
};

export default Todo;


