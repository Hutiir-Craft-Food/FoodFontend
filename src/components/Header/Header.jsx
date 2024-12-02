import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import ModalWindow from '../ModalWindow/ModalWindow'
import SignInForm from '../SignInForm/SignInForm'
import styles from './Header.module.scss'

export default function Header() {
  const [showSignInForm, setShowSignInForm] = useState(false)
  const [showSignUpContainer, setShowSignUpContainer] = useState(false)

  const handleClose = () => {
    setShowSignInForm(false)
    setShowSignUpContainer(false)
  }

  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.rowOne}>
            <div className={styles.logo}>
              <img src="public\images\Asset36and4x.png" alt="logo" />
            </div>
            <div className={styles.nav}>
              <Navbar />
            </div>
          </div>
          <div className={styles.rowTwo}>
            <div>
              <button className={styles.catalogButton}>
                Каталог
                <img src="/images/CaretDown.svg" alt="CaretDown" />
              </button>
            </div>
            <div class="search-container">
              <input type="text" placeholder="Я шукаю ..." />
            </div>{' '}
            <div className={styles.iconsContainer}>
              <div className={styles.userIcon}>
                <img
                  src="/images/user_log out_default.svg"
                  alt="user icon"
                  onClick={() => setShowSignInForm(true)}
                />{' '}
                {/* <button onClick={() => setShowSignInForm(true)}>

                </button> */}
              </div>

              <div className={styles.heartIcon}>
                <img src="/images/heartIcon_default.svg" alt="heart icon" />
              </div>
              <div className={styles.backetIcon}>
                <img
                  src="/images/bascket_default_noNotif.svg"
                  alt="user icon"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <ModalWindow
        show={showSignInForm}
        handleClose={handleClose}
        form={<SignInForm />}
      />
      {/* <ModalWindow
        show={showSignUpContainer}
        handleClose={handleClose}
        form={
          <SignUpContainer setShowSignUpContainer={setShowSignUpContainer} />
        }
      /> */}
    </>
  )
}
