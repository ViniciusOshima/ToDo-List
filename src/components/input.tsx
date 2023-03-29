import {PlusCircle} from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

import styles from './input.module.css'

interface AddTasksProps {
  addTasks: (myTasks:string) => void
}

export function Input ({addTasks}:AddTasksProps) {
  const [taskChange, setTaskChange] = useState('')

  function handleNewTaskChange (event: ChangeEvent<HTMLTextAreaElement>) {
    setTaskChange(event.target.value)
    console.log(taskChange)
  }

  function handleNewTask (event: FormEvent) {
    event.preventDefault()

    addTasks(taskChange)

    setTaskChange('')
  }

  return (
    <form className={styles.form} onSubmit={handleNewTask}>
      <textarea value={taskChange} onChange={handleNewTaskChange} name='newTask' placeholder="Adicione uma nova tarefa"></textarea>
      <button type='submit'>Criar <PlusCircle size={20}/></button>
    </form>
  )
}