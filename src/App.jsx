import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import { AnasChbibPage } from './components/pages/AnasChbibPage'

function MainSite() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      setCurrentPage(hash)
    }

    handleHashChange()
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
        return <AboutPage mode="about" />
      case 'why':
        return <AboutPage mode="why" />
      case 'services':
        return <AdvisoryPage mode="services" />
      case 'advisory': // backward-compat
        return <AdvisoryPage mode="services" />
      case 'industries':
        return <TradingPage mode="industries" />
      case 'trading': // backward-compat
        return <TradingPage mode="industries" />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage onNavigate={handlePageChange} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
      <BackToTop />
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/anaschbib" element={<AnasChbibPage />} />
            <Route path="*" element={<MainSite />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ErrorBoundary>
  )
}

export default App
