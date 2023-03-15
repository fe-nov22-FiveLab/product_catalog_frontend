import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Catalog } from './components/Catalog';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="home" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
