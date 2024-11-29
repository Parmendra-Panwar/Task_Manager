import Todo from "./Todo";

interface TodoType {
  id: number;
  title: string;
  date: string;
}

interface TodoListProps {
  todos: TodoType[];
  deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, deleteTodo }: TodoListProps) => {
  if (todos.length === 0) {
    return <div>No tasks found!</div>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} to_do={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
