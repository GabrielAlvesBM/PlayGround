import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'

import trashIcon from './assets/trash.svg'

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
    const updatedTasks = tasks.map((task, indexTask) => 
      indexTask === index ? { ...task, checked: !task.checked } : task
    )

    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  function deleteItem (index: number) {
    const updateTasks = tasks.filter((_, indexTask) => indexTask !== index)

    setTasks(updateTasks)
    localStorage.setItem('tasks', JSON.stringify(updateTasks))
  }

  return (
    <>
      <input className='task-input' type="text" name="taskInput" id='taskInput'
        placeholder='Insira sua tarefa' autoComplete='off' value={taskInput} maxLength={50}
        onChange={(event) => setTaskInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key == 'Enter') addTask()
        }} />
      
      <ul className='task-list'>
        {tasks.map((task, index) => (
          <li id={index.toString()} key={index}>
            <input className='checkbox'
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleChecked(index)}
            />

            <span className='checkbox'>{task.task}</span>

            <button className='delete-task'
              onClick={() => deleteItem(index)}
            ><img src={trashIcon} alt="Ícone de Lixeira" /></button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
