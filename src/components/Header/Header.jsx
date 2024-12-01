import Navbar from '../Navbar/Navbar'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <p>Header </p>
        <div className={styles.logo}>
          <img src="public\images\Asset36and4x.png" alt="logo" />
        </div>

        <Navbar />
        <div className={styles.userIcon}>
          <img src="public\images\user_log out_default.svg" alt="user icon" />
        </div>
      </div>
    </header>
  )
}
