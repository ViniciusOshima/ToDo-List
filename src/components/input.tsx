import {PlusCircle} from 'phosphor-react'
import { FormEvent, useState } from 'react'

import styles from './input.module.css'

export function Input () {
  const [myTasks, setMyTasks] = useState([
    'hello',
  ])

  function handleNewTask (event: FormEvent) {
    event.preventDefault()

    setMyTasks([...myTasks, event.target.newTask.value ])
    console.log(myTasks)
  }

  return (
    <form className={styles.form} onSubmit={handleNewTask}>
      <textarea name='newTask' placeholder="Adicione uma nova tarefa"></textarea>
      <button type='submit'>Criar <PlusCircle size={20}/></button>
    </form>
  )
}