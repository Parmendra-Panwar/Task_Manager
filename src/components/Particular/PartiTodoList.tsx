
import PartiTodo from "./PartiTodo";

interface TodoType {
  id: number;
  title: string;
  date: string;
}

const PartiTodoList = () => {
  const todoList: TodoType[] = [
    { id: 1, title: "Buy milk", date: "2020-01" },
    { id: 2, title: "Buy eggs", date: "2020-01" },
    { id: 3, title: "Buy bread", date: "2020-01" },
  ];

  return (
    <div className="todo-list">
      {todoList.map((todo) => (
        <PartiTodo key={todo.id} toDo={todo} />
      ))}
    </div>
  );
};

export default PartiTodoList