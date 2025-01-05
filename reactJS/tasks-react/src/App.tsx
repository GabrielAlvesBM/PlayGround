import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState<{task: string; checked: boolean}[]>([])
  const [taskInput, setTaskInput] = useState<string>('')

  function addTask () {
    if (taskInput.trim()) {
      setTasks([...tasks, { task: taskInput, checked: false }])
      setTaskInput('')
    }
  }

  function toggleChecked (index: number) {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, checked: !task.checked } : task
    ))
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
          <li id={index.toString()} key={index}>
            <input type="checkbox"
              checked={task.checked}
              onChange={() => toggleChecked(index)}
            />
            {task.task}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
