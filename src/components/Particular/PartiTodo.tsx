import "../Todo.css";

type TodoProps = {
  toDo: {
    id: number;
    title: string;
    date: string;
  };
};

const PartiTodo = ({ toDo }: TodoProps) => {
  return (
    <div className="todo" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <h3 >{toDo.title}</h3>
      <h4 >{toDo.date}</h4>
      <button style={{width:"30px" , height:"30px" , backgroundColor:"green" , borderRadius:"6px" }} >✔</button>
    </div>
  );
};

export default PartiTodo;
