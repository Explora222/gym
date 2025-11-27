import React from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Clubs } from './pages/Clubs';
import { Memberships } from './pages/Memberships';
import { Classes } from './pages/Classes';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';
import { AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NotFound = () => (
  <div className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900 text-white">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
        alt="Gym Background" 
        className="w-full h-full object-cover opacity-20" 
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
    <div className="relative z-10 text-center px-4">
      <h1 className="text-8xl md:text-9xl font-black text-red-600 mb-2 italic tracking-tighter">404</h1>
      <h2 className="text-3xl font-bold uppercase italic mb-6">Wrong Turn</h2>
      <p className="text-lg text-stone-300 mb-8 max-w-md mx-auto">It looks like this muscle group doesn't exist yet. Let's get you back to the main floor.</p>
      <Link to="/" className="bg-white text-stone-900 px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-red-600 hover:text-white transition transform hover:-translate-y-1">
        Back to Home
      </Link>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/memberships" element={<Memberships />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;