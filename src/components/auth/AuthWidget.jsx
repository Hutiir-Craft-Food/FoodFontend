﻿import { useAuthStore, actions } from '../../components/auth/store/AuthStore'
import SignInContainer from './signin/SignInContainer'
import SignUpContainer from './signup/SignUpContainer'
import styles from './AuthWidget.module.scss'

function AuthWidget() {
  const action = useAuthStore((state) => state.action)

  return (
    <div className={styles['authContainer']}>
      <div className={styles['imageContainer']}>
        <img src="/images/sign-in.png" alt="food" />
      </div>
      <div className={styles['formContainer']}>
        {action === actions.LOGIN ? <SignInContainer /> : <SignUpContainer />}
      </div>
    </div>
  )
}

export default AuthWidget
