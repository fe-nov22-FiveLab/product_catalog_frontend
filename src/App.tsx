import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { PhonesPage } from './pages/PhonesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage/CartPage';
import { ItemCard } from './pages/ItemCard/ItemCard';
import { FavouritesPage } from './pages/FavouritesPage';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import ScrollTop from './components/Scroll';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Breadcrumbs />
      <ScrollTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/phones">
            <Route index element={<PhonesPage />} />
            <Route path=":phoneId" element={<ItemCard />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ScrollTop>
      <Footer />
    </div>
  );
};

export default App;
