import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Todo.css";

interface TodoProps {
  to_do: {
    id: number;
    title: string;
    date: string;
  };
  deleteTodo: (id: number) => void;
}

const Todo = ({ to_do, deleteTodo }: TodoProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/api/todos/${to_do.id}`);
  };
  return (
    <div
      className="todo"
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <h3 onClick={handleClick}>{to_do.title}</h3>
      <h4 style={{ marginLeft: "20px" }}>{to_do.date}</h4>
      <button
        className="button-82-pushable"
        role="button"
        onClick={() => deleteTodo(to_do.id)}
      >
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">✖</span>
      </button>
    </div>
  );
};

export default Todo;
