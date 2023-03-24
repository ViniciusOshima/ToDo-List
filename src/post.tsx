import { Trash } from 'phosphor-react'
import styles from './post.module.css'

export function Post () {
  return (
    <div className={styles.post}>
      <button className={styles.checked}></button>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button className={styles.deleteNote}><Trash size={20} /></button>
    </div>
  )
}