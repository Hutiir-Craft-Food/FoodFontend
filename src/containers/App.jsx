import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import AuthWidget from '../components/auth/AuthWidget'
import ModalWindow from '../components/ModalWindow/ModalWindow'
import { AuthContext } from './AuthContext'
import router from '../components/AppRouter/AppRouter'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-multi-carousel/lib/styles.css'
import styles from './App.module.scss'

const App = () => {
  const [token, setToken] = useState(null)
  const [showAuthWidget, setShowAuthWidget] = useState(true)

  const handleClose = () => {
    setShowAuthWidget(false)
  }

  return (
    <ErrorBoundary fallback={<NotFoundPage />}>
      <AuthContext.Provider value={{ token, setToken }}>
        <div className={styles.app}>
          <RouterProvider router={router} />
          {showAuthWidget && <ModalWindow handleClose={handleClose} form={<AuthWidget />} />}
        </div>
      </AuthContext.Provider>
    </ErrorBoundary>
  )
}

export default App
