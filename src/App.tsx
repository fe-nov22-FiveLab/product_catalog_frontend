import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Catalog } from './components/Catalog';
import { Footer } from './components/Footer';
import { PhonesPage } from './pages/PhonesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="/phones" element={<PhonesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
