import ToDoList from "./components/ToDoList"
import './styles/styles.css'

function App() {

  return (
 <div className="App">
    <header>
    <h2>Things To Do</h2>
    <input type="text" 
    autoComplete="off" 
    placeholder="Escreva a tarefa" 
    name="task" 
    className="input"
    />

    <button>Adicionar</button>
    </header>
    <div className="line"></div>

    <ToDoList />
    </div>
  )
}

export default App

//teste para commit