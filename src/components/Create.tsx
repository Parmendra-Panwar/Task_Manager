import { useRef } from "react";

function Create({ refreshTodos }: { refreshTodos: () => void }) {
  const Taskdata = useRef<HTMLInputElement>(null);
  const TaskDate = useRef<HTMLInputElement>(null);

  const addTodo = async () => {
    const title = Taskdata.current?.value;
    const date = TaskDate.current?.value;

    if (!title || !date) {
      alert("Please fill in both fields!");
      return;
    }

    const newTodo = { title, date };

    try {
      const response = await fetch("http://localhost:8080/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        throw new Error("Failed to add task");
      }

      alert("Task added successfully!");

      // Clear input fields
      if (Taskdata.current) Taskdata.current.value = "";
      if (TaskDate.current) TaskDate.current.value = "";

      // Refresh the todos
      refreshTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
      alert("Failed to add the task!");
    }
  };

  return (
    <div className="creater">
      <input
        placeholder="Enter Task Here"
        className="inputText styled-input"
        type="text"
        ref={Taskdata}
      />
      <input type="date" className="styled-date" ref={TaskDate} />
      <button className="button-30" onClick={addTodo}>
        ➕
      </button>
    </div>
  );
}

export default Create;
