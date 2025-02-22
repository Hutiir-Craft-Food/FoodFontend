import { useState, useEffect } from 'react'
import { useAuthStore } from '../auth/store/AuthStore'
import Navbar from '../Navbar/Navbar'
import ModalWindow from '../ModalWindow/ModalWindow'
import styles from './Header.module.scss'

export default function Header() {
  const [isScrolled, setScrolled] = useState(false)
  const [searchItem, setSearchItem] = useState('')
  const setShowAuthWidget = useAuthStore((state) => state.setShowAuthWidget)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const handleInputChange = (e) => {
    const searchItem = e.target.value
    setSearchItem(searchItem)
  }
  const handleAuthentication = () => {
    setShowAuthWidget(true)
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
              <img src="images\logoHK-36@4x.svg" alt="logo" />
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
                <img src="\images\caret-down.svg" alt="CaretDown" />
              </button>
            </div>
            <div className={styles.searchContainer}>
              <input
                type="search"
                placeholder="Я шукаю . . ."
                value={searchItem}
                onChange={handleInputChange}
              />
              <button className={styles.magnifyingGlass}>
                <img
                  className={styles.magnifyingGlass}
                  src="\images\magnifying-glass.svg"
                  alt="magnifyingGlass"
                />
              </button>
            </div>{' '}
            <div className={styles.iconsContainer}>
              <div className={styles.userIcon}>
                <img
                  src="/images/user-logout-default.svg"
                  alt="user icon"
                  onClick={() => handleAuthentication()}
                />
              </div>

              <div className={styles.heartIcon}>
                <img src="/images/heartIcon-default.svg" alt="heart icon" />
              </div>
              <div className={styles.backetIcon}>
                <img
                  src="\images\bascket-default-noNotif.svg"
                  alt="user icon"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
