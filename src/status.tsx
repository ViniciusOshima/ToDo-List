import styles from './status.module.css'

export function Status () {
  return (
    <div className={styles.status}>
      <div className={styles.tarefasCriadas}>
        <h2>Tarefas criadas</h2>
        <h3>0</h3>
      </div>

      <div className={styles.tarefasConcluidas}>
        <h2>Concluídas</h2>
        <h3>0</h3>
      </div>
    </div>
    
  ) 
}