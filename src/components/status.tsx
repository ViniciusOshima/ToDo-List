import styles from './status.module.css'

interface TasksProps {
  createdTasks: number
}

export function Status ({createdTasks}: TasksProps) {
  return (
    <div className={styles.status}>
      <div className={styles.tarefasCriadas}>
        <strong>Tarefas criadas</strong>
        <h3>{createdTasks}</h3>
      </div>

      <div className={styles.tarefasConcluidas}>
        <strong>Concluídas</strong>
        <h3>0</h3>
      </div>
    </div>
    
  ) 
}