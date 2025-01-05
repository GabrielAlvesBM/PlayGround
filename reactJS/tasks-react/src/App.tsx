import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'

function App() {
  const [tasks, setTasks] = useState<{task: string; checked: boolean}[]>([])
  const [taskInput, setTaskInput] = useState<string>('')

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  function addTask () {
    if (taskInput.trim()) {
      const newTask = { task: taskInput, checked: false }
      const updatedTasks = [...tasks, newTask]

      setTasks(updatedTasks)
      setTaskInput('')

      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }
  }

  function toggleChecked (index: number) {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, checked: !task.checked } : task
    )

    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
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
