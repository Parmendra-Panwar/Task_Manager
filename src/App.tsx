import './App.css'
import Header from './components/Header'
import ParticularTodo from './components/Particular/ParticularTodo'
import TodoContainer from './components/TodoContainer'

function App() {
  return (
    <div className="App">
      <Header />
      <TodoContainer/>
      {/* <ParticularTodo/> */}
    </div>
  )
}

export default App
