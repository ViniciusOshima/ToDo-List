import logo from '../assets/Logo.svg'

import styles from './header.module.css'

export function Header () {
  return (
    <section className={styles.header}>
      <img src={logo} alt="Logo ToDo" width='126px' />
    </section>
  )
}