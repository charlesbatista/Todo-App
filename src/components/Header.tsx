import styles from './Header.module.css'
import logo from '../assets/img/Logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="ToDo App Logo" title="ToDo App" />
    </header>
  );
}
