import { Trash } from 'phosphor-react'
import styles from './post.module.css'

interface ContentProps {
  content: string
  deleteTask: (content: string) => void
}

export function Post ({content, deleteTask} :ContentProps) {
  function handleDeleteTask () {
    deleteTask(content)
  }

  return (
    <div className={styles.post}>

      <label className={styles.container}>
        <input checked={undefined} type="checkbox" />
        <div className={styles.checkmark}></div>
      </label>

      <p className={styles.content}>{content}</p>
      <button onClick={handleDeleteTask} className={styles.deleteNote}><Trash size={20} /></button>
    </div>
  )
}