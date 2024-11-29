import PartiTodo from "./PartiTodo";

interface TodoType {
  id: number;
  title: string;
  date: string;
}

interface TodoListProps {
  todos: TodoType[];
}

const PartiTodoList = ({ todos }: TodoListProps) => {
  const todoList: TodoType[] = todos;

  return (
    <div className="todo-list">
      {todoList.map((todo) => (
        <PartiTodo key={todo.id} toDo={todo} />
      ))}
    </div>
  );
};

export default PartiTodoList;
