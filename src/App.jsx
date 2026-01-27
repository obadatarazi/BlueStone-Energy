import { useState, useEffect } from 'react'
import { ErrorBoundary } from './components/ErrorBoundary'
import { LanguageProvider } from './contexts/LanguageContext'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import { HomePage } from './components/pages/HomePage'
import { AboutPage } from './components/pages/AboutPage'
import { AdvisoryPage } from './components/pages/AdvisoryPage'
import { TradingPage } from './components/pages/TradingPage'
import { ContactPage } from './components/pages/ContactPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Handle hash navigation
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      setCurrentPage(hash)
    }

    // Check initial hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId)
    window.location.hash = pageId
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />
      case 'advisory':
        return <AdvisoryPage />
      case 'trading':
        return <TradingPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage onNavigate={handlePageChange} />
    }
  }

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-white">
          <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
          <main className="flex-grow">
            {renderPage()}
          </main>
          <Footer />
          <BackToTop />
        </div>
      </LanguageProvider>
    </ErrorBoundary>
  )
}

export default App
