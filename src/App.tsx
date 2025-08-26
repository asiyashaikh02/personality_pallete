import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Test from './pages/Test';
import Results from './pages/Results';
import Features from './pages/Features';
import { TestResult } from './types/temperament';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} isAuthenticated={isAuthenticated} />;
      case 'about':
        return <About />;
      case 'test':
        return <Test onNavigate={setCurrentPage} onTestComplete={setTestResult} />;
      case 'results':
        return <Results result={testResult} onNavigate={setCurrentPage} user={user} />;
      case 'features':
        return <Features />;
      default:
        return <Home onNavigate={setCurrentPage} isAuthenticated={isAuthenticated} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        user={user}
        setUser={setUser}
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;