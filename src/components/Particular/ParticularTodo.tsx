import PartiTodoList from "./PartiTodoList"
import "./ParticularTodo.css"
const ParticularTodo = () => {
  return (
    <div className="todo-container">
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
      <PartiTodoList/>
    </div>
  )
}

export default ParticularTodo