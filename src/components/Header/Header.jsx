import { useState, useEffect } from 'react'
// import { AuthContext } from '../../containers/AuthContext'
import Navbar from '../Navbar/Navbar'
import ModalWindow from '../ModalWindow/ModalWindow'
import SignInForm from '../SignInForm/SignInForm'
// import useScrollingUp from '../../hooks/useScrolling'
// import { SearchInput } from '../../services/SearchableProductsList'
import styles from './Header.module.scss'

export default function Header() {
  const [fix, setFix] = useState(false)

  // const authContext = useContext(AuthContext)
  const [searchItem, setSearchItem] = useState('')

  const handleInputChange = (e) => {
    const searchItem = e.target.value
    setSearchItem(searchItem)
  }
  const [showSignInForm, setShowSignInForm] = useState(false)
  const [showSignUpContainer, setShowSignUpContainer] = useState(false)

  const handleClose = () => {
    setShowSignInForm(false)
    setShowSignUpContainer(false)
  }
  // const scrolledUp = useScrollingUp()

  function setFixed() {
    if (window.scrollY >= 250) {
      setFix(true)
    } else {
      setFix(false)
    }
  }
  window.addEventListener('scroll', setFixed)

  // // Sticky Menu Area
  // useEffect(() => {
  //   window.addEventListener('scroll', isSticky)
  //   return () => {
  //     window.removeEventListener('scroll', isSticky)
  //   }
  // })

  // /* Method that will fix header after a specific scrollable */
  // const isSticky = (e) => {
  //   const rowTwo = document.querySelector('.rowTwo')
  //   const scrollTop = window.scrollY
  //   scrollTop >= 56
  //     ? rowTwo.classList.addClassName('styles.isSticky')
  //     : rowTwo.classList.removeClassName('isSticky')
  // }

  return (
    <>
      <header>
        <div
          className={`${styles.headerContainer} ${fix ? styles.fixed : ''}`}
          // className={`fix ? ${styles.headerContainer} ${styles.fixed} : ${styles.headerContainer}`}

          // className={`${styles.toggleEye} ${
          //   isPasswordVisible ? styles.openEye : styles.closeEye
          // }`}
        >
          <div className={styles.rowOne}>
            <div className={styles.logo}>
              <img src="public\images\Asset36and4x.png" alt="logo" />
            </div>
            <div className={styles.nav}>
              <Navbar />
            </div>
          </div>
          {/* <div
            className={`${
              scrolledUp ? 'styles.stickyRowTwo' : 'styles.rowTwo'
            }`}
          > */}
          <div className={styles.rowTwo} id="rowTwo">
            <div>
              <button className={styles.catalogButton}>
                Каталог
                <img src="/images/CaretDown.svg" alt="CaretDown" />
              </button>
            </div>
            <div className={styles.searchContainer}>
              <input
                type="search"
                placeholder="Я шукаю ..."
                value={searchItem}
                onChange={handleInputChange}
              />
              <img
                className={styles.magnifyingGlass}
                src="/images/Icon.svg"
                alt="magnifyingGlass"
              />

              {/* <ul>
                {users.map((user) => (
                  <li key={user.id}>{user.firstName}</li>
                ))}
              </ul> */}
              {/* <ul>
                {products.map((product) => (
                  <li key={product.id}>{product.name}</li>
                ))}
              </ul> */}
            </div>{' '}
            <div className={styles.iconsContainer}>
              <div className={styles.userIcon}>
                <img
                  src="/images/user_log out_default.svg"
                  alt="user icon"
                  onClick={() => setShowSignInForm(true)}
                />

                {/* {{ token } ? (
                  <img
                    src="/images/user_logIn_default.svg"
                    alt="user icon"
                    onClick={() => setShowSignInForm(true)}
                  />
                ) : (
                  <img
                    src="/images/user_log out_default.svg"
                    alt="user icon"
                    onClick={() => setShowSignInForm(true)}
                  />
                )} */}

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
