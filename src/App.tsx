import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Industry from './pages/Industry';
import Infrastructure from './pages/Infrastructure';
import Quality from './pages/Quality';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import { ToastContext } from './hooks/useToast';

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [pathname]);
  return null;
}

function PageWrap({ children }: { children: React.ReactNode }) {
  return <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>{children}</motion.div>;
}

export default function App() {
  const [toast, setToast] = useState('');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(''), 2600);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <ToastContext.Provider value={setToast}>
      <ScrollReset />
      <Navbar />
      <main className="pt-56 lg:pt-64">
        <Routes>
          <Route path="/" element={<PageWrap><Home /></PageWrap>} />
          <Route path="/about" element={<PageWrap><About /></PageWrap>} />
          <Route path="/products" element={<PageWrap><Products /></PageWrap>} />
          <Route path="/industry" element={<PageWrap><Industry /></PageWrap>} />
          <Route path="/infrastructure" element={<PageWrap><Infrastructure /></PageWrap>} />
          <Route path="/quality" element={<PageWrap><Quality /></PageWrap>} />
          <Route path="/contact" element={<PageWrap><Contact /></PageWrap>} />
          <Route path="/quote" element={<PageWrap><Quote /></PageWrap>} />
        </Routes>
      </main>
      <Footer />
      <Toast message={toast} />
    </ToastContext.Provider>
  );
}



