import {PlusCircle} from 'phosphor-react'

import styles from './input.module.css'

export function Input () {
  return (
    <form className={styles.form}>
      <textarea placeholder="Adicione uma nova tarefa"></textarea>
      <button type='submit'>Criar <PlusCircle/></button>
    </form>
  )
}