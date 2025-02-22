import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import AuthWidget from '../components/auth/AuthWidget'
import ModalWindow from '../components/ModalWindow/ModalWindow'
import { useAuthStore } from '../components/auth/store/AuthStore'
import router from '../components/AppRouter/AppRouter'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-multi-carousel/lib/styles.css'
import styles from './App.module.scss'

const App = () => {
  const showAuthWidget = useAuthStore((state) => state.showAuthWidget)
  const setShowAuthWidget = useAuthStore((state) => state.setShowAuthWidget)
  const handleClose = () => {
    setShowAuthWidget(false)
  }

  return (
    <ErrorBoundary fallback={<NotFoundPage />}>
      <div className={styles.app}>
        <RouterProvider router={router} />
        {showAuthWidget && (
          <ModalWindow handleClose={handleClose} form={<AuthWidget />} />
        )}
      </div>
    </ErrorBoundary>
  )
}

export default App
