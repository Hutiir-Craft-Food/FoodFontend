import { useState } from 'react'
import styles from './SignInContainer.module.scss'

export default function SignInContainer() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleEyeButtonClick = (e) => {
    e.preventDefault()
    setIsPasswordVisible((prevValue) => !prevValue)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSignIn = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()

      if (response.ok) {
        authContext.setToken(data.jwt)
        setEmail('')
        setPassword('')
      }
    } catch (error) {
      console.error('Failed:', error)
    }
  }

  return (
    <div className={styles.signInContainer}>
      <div className={styles.formContainer}>
        <h2>Вхід</h2>
        <form onSubmit={handleSignIn}>
          <div className={styles.emailContainer}>
            <label htmlFor="email">E-mail</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={handleEmailChange}
              autoFocus
            />
          </div>
          <div className={styles.passwordContainer}>
            <label htmlFor="password">Пароль</label>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              required
              onChange={handlePasswordChange}
            />
            <button
              id="togglePassword"
              className={`${styles.toggleEye} ${
                isPasswordVisible ? styles.openEye : styles.closeEye
              }`}
              aria-label={
                isPasswordVisible ? 'Приховати пароль' : 'Показати пароль'
              }
              onClick={handleEyeButtonClick}
            ></button>
          </div>
          <br />
          <a className={styles.fogetPasswordLink} href="#">
            Забули пароль?
          </a>
          <br />
          <button className={styles.signInButton} type="submit">
            Увійти
          </button>
          <br />
        </form>
        <div>
          <button
            className={styles.signUpLink}
            // TODO
            onClick={() => alert('Switch to SingUp')}
          >
            {' '}
            Зареєструватись
          </button>
        </div>
      </div>
    </div>
  )
}
