import { ClipboardText } from 'phosphor-react'
import styles from './postWithoutContent.module.css'

export function PostWithoutContent () {
  return (
    <section className={styles.post}>
      <ClipboardText/>
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </section>
    
  )
}