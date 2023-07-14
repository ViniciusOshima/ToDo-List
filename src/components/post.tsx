import { Trash } from 'phosphor-react'
import styles from './post.module.css'
import { MyTasksProps } from '../App'

interface ContentProps {
  content: string
  deleteTask: (content: string) => void
  id: string
  checkedTasks: (id: string) => void
  myTasks: MyTasksProps[]
  isCompleted: boolean
}

export function Post({ content, deleteTask, id, checkedTasks, isCompleted }: ContentProps) {
  function handleDeleteTask() {
    deleteTask(id)
  }

  function handleChecked() {
    checkedTasks(id)
  }

  return (
    <div className={isCompleted ? styles.postWithotBorder : styles.post}>
      <label className={styles.container}>
        <input onClick={handleChecked} checked={undefined} type="checkbox" />
        <div className={styles.checkmark}></div>
      </label>

      {isCompleted ? <p className={styles.contentCompleted}>{content}</p> : <p className={styles.content}>{content}</p>}


      <button onClick={handleDeleteTask} className={styles.deleteNote}>
        <Trash size={20} />
      </button>
    </div>
  )
}
