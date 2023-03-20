import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { PhonesPage } from './pages/PhonesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header';
import { CartPage } from './pages/CartPage/CartPage';
import { ItemCard } from './pages/ItemCard/ItemCard';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<p>Welcome to Nice Gadgets store!</p>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/phones">
            <Route index element={<PhonesPage />} />
            <Route path=":phoneId" element={<ItemCard />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
