import styles from './status.module.css'

export function Status () {
  return (
    <div className={styles.status}>
      <div className={styles.tarefasCriadas}>
        <strong>Tarefas criadas</strong>
        <h3>0</h3>
      </div>

      <div className={styles.tarefasConcluidas}>
        <strong>Concluídas</strong>
        <h3>0</h3>
      </div>
    </div>
    
  ) 
}