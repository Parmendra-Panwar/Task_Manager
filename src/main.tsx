import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoContainer from "./components/TodoContainer.tsx";
import PartiTodoList from "./components/Particular/PartiTodoList.tsx";
import Home from "./components/Home.tsx";
import TaskManagerBenefits from "./components/TMBenefits.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todos",
        element: <TodoContainer />,
      },
      {
        path: "/todos/:id",
        element: <PartiTodoList />,
      },
    ],
  },
  {
    path: "/help",
    element: <TaskManagerBenefits />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
