import { Trash } from 'phosphor-react'
import styles from './post.module.css'

interface ContentProps {
  content: string
}

export function Post ({content} :ContentProps) {
  return (
    <div className={styles.post}>

      <label className={styles.container}>
        <input checked={undefined} type="checkbox" />
        <div className={styles.checkmark}></div>
      </label>

      <p className={styles.content}>{content}</p>
      <button className={styles.deleteNote}><Trash size={20} /></button>
    </div>
  )
}