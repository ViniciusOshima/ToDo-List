import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import styles from './input.module.css'

interface AddTasksProps {
  addTasks: (myTasks: string) => void
}

export function Input({ addTasks }: AddTasksProps) {
  const [taskChange, setTaskChange] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTaskChange(event.target.value)

    event.target.setCustomValidity('')
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault()

    addTasks(taskChange)

    setTaskChange('')
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  return (
    <form className={styles.form} onSubmit={handleNewTask}>
      <textarea
        onInvalid={handleNewTaskInvalid}
        required
        value={taskChange}
        onChange={handleNewTaskChange}
        name="newTask"
        placeholder="Adicione uma nova tarefa"
      ></textarea>
      <button type="submit" disabled={taskChange.length == 0}>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  )
}
