import { useState, useEffect } from 'react'
// import { AuthContext } from '../../containers/AuthContext'
import Navbar from '../Navbar/Navbar'
import ModalWindow from '../ModalWindow/ModalWindow'
import SignInForm from '../SignInForm/SignInForm'
// import useScrollingUp from '../../hooks/useScrolling'
// import { SearchInput } from '../../services/SearchableProductsList'
import styles from './Header.module.scss'

export default function Header() {
  const [isScrolled, setScrolled] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 250) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  // const authContext = useContext(AuthContext)
  const [searchItem, setSearchItem] = useState('')

  const handleInputChange = (e) => {
    const searchItem = e.target.value
    setSearchItem(searchItem)
  }
  const [showSignInForm, setShowSignInForm] = useState(false)
  // const [showSignUpContainer, setShowSignUpContainer] = useState(false)

  const handleClose = () => {
    setShowSignInForm(false)
    setShowSignUpContainer(false)
  }

  return (
    <>
      <header>
        <div
          className={`${styles.headerContainer}
           ${isScrolled ? styles.scrolledHeader : ''}
          }`}
        >
          <div className={styles.rowOne}>
            <div className={styles.logo}>
              <img src="public\images\Asset36and4x.png" alt="logo" />
            </div>
            <div className={styles.nav}>
              <Navbar />
            </div>
          </div>

          <div
            className={`${styles.rowTwo} ${
              isScrolled ? styles.stickyRowTwo : ''
            }`}
          >
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
