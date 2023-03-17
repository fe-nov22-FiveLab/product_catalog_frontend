import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Catalog } from './components/Catalog';
import { Footer } from './components/Footer';
import { PhonesPage } from './pages/PhonesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header';
import { CartPage } from './components/CartPage/CartPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
