import "./TodoContainer.css";
import TodoList from "./TodoList";
function TodoContainer() {
  return (
    <div className="todo-container">
      <h1>Tasks</h1>
      <div className="creater">
        <input
          placeholder="Enter Task Here"
          className="inputText styled-input"
          type="text"
        />
        <input type="date" className="styled-date" />

        <button className="button-30 " role="button">
          ➕
        </button>
      </div>
      <TodoList />
    </div>
  );
}

export default TodoContainer;
