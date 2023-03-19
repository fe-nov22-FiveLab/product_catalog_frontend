import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { PhonesPage } from './pages/PhonesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header';
import { CartPage } from './pages/CartPage/CartPage';
import { ItemCard } from './pages/ItemCard/ItemCard';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<p>Welcome to Nice Gadgets store!</p>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/phones" element={<PhonesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/phone/:phoneId" element={<ItemCard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
