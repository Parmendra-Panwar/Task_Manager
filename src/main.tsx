import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import TodoContainer from './components/TodoContainer.tsx'
import PartiTodoList from './components/Particular/PartiTodoList.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: "/todos",
        element: <TodoContainer/>
      },
      {
        path: "/todos/:id",
        element: <PartiTodoList/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
