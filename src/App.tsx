import { useState } from "react";
import TodoTask from "./components/TodoTask";
import "./styles/styles.css";
import { ITask } from "./Interfaces";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [task, setTask] = useState(""); //string é uma tipagem estática para meu state

  const [todoList, setTodoList] = useState<ITask[]>([]); //vamos guardar aqui nossa lista de testes; para tiparmos vamos criar uma interface

  function addTask(): void {
    if(task === "") {
      toast.error("digite alguma task")
    } else {
      const idRandom = (num: number) => Math.floor(Math.random() * num);

    const newTask = { id: idRandom(999999999999), nameTask: task };

    setTodoList([...todoList, newTask]);

    toast.success("Task cadastrada com sucesso");

    }
   
    }

  function deleteTask(DeleteTaskById: number): void {
    setTodoList(todoList.filter((taskName) => taskName.id !== DeleteTaskById));
  }

  return (
    <div className="App">

      <ToastContainer 
        autoClose={2500}
        pauseOnHover={false}
      />

      <header>
        <h2>Things To Do</h2>
        <input
          type="text"
          autoComplete="off"
          placeholder="Escreva a tarefa"
          name="task"
          className="input"
          value={task}
          onChange={(event) => setTask(event.target.value)} //estados
        />

        <button type="submit" className="btn-header" onClick={addTask}>
          Adicionar
        </button>
      </header>
      <div className="line"></div>
      {todoList.map((task, key) => (
        <TodoTask key={key} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default App;
