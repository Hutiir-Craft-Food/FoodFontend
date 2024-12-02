// import { useState } from 'react'
import { Link } from 'react-router-dom'
// import ModalWindow from '../ModalWindow/ModalWindow'
// import SignInForm from '../SignInForm/SignInForm'
// import SignUpContainer from '../SignUpContainer/SignUpContainer'
import styles from './Navbar.module.scss'

export default function Navbar() {
  // const [showSignInForm, setShowSignInForm] = useState(false)
  // const [showSignUpContainer, setShowSignUpContainer] = useState(false)

  // const handleClose = () => {
  //   setShowSignInForm(false)
  //   setShowSignUpContainer(false)
  // }

  return (
    <>
      <nav className={styles.navbarContainer}>
        <div className={styles.links}>
          <Link to="/about" className={styles.linkStyles}>
            Про нас
          </Link>
          <Link to="/manufacturers" className={styles.linkStyles}>
            Виробники
          </Link>
          <Link to="/cooperation" className={styles.linkStyles}>
            Співпраця
          </Link>
          <Link to="/delivery-and-payment" className={styles.linkStyles}>
            Доставка і оплата
          </Link>
          <Link to="/blog" className={styles.linkStyles}>
            Блог
          </Link>
          {/* <Link to="/" className="me-5">
            Головна сторінка
          </Link> */}

          {/* <button className="m-2" onClick={() => setShowSignInForm(true)}>
            Вхід
          </button>
          <button className="m-2" onClick={() => setShowSignUpContainer(true)}>
            Реєстрація
          </button> */}
        </div>
      </nav>
    </>
  )
}
