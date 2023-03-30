import styles from './status.module.css'

interface TasksProps {
  createdTasks: number
  taskCheckedOnStatus: number
  taskCheckedWithCreated: string
}

export function Status({
  createdTasks,
  taskCheckedOnStatus,
  taskCheckedWithCreated
}: TasksProps) {
  return (
    <div className={styles.status}>
      <div className={styles.tarefasCriadas}>
        <strong>Tarefas criadas</strong>
        <h3>{createdTasks}</h3>
      </div>

      <div className={styles.tarefasConcluidas}>
        <strong>Concluídas</strong>
        <h3>
          {taskCheckedOnStatus}{' '}
          {taskCheckedOnStatus > 0 ? taskCheckedWithCreated : null}
        </h3>
      </div>
    </div>
  )
}
