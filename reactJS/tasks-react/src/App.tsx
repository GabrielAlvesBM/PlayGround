import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState<string[]>([])
  const [taskInput, setTaskInput] = useState<string>('')

  function addTask () {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput])
      setTaskInput('')
    }
  }

  return (
    <>
      <input className='task-input' type="text" name="taskInput" id='taskInput'
        placeholder='Insira sua tarefa' autoComplete='off' value={taskInput}
        onChange={(event) => setTaskInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key == 'Enter') addTask()
        }} />
      
      <ul className='task-list'>
        {tasks.map((task, index) => (
          <li id={index.toString()} key={index}>{task}</li>
        ))}
      </ul>
    </>
  )
}

export default App
