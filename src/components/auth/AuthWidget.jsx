import { useState } from 'react'
import SignInForm from './signin/SignInForm'
import SignUpContainer from './signup/SignUpContainer'
import styles from './AuthWidget.module.scss'

function AuthWidget() {
  // todo:
  // 1. Create state showing login/register
  // 2. Repeat html structure
  // 	to have containers for image on the left
  // 	and SignIn/SignUp forms on the right
  // 3. Decouple containers on the rigth from state management
  //	and use zustand state management in them

  const [action] = useState('register')

  return (
    <div className={styles['authContainer']}>
      <div className={styles['imageContainer']}>
        <img src='/images/sign-in.png' alt='food' />
      </div>
      <div className={styles['formContainer']}>{action === 'login' ? <SignInForm /> : <SignUpContainer />}</div>
    </div>
  )
}

export default AuthWidget
