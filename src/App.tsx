import React from 'react';
import { Catalog } from './components/Catalog';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PhonesPage } from './pages/PhonesPage';
import { NotFoundPage } from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
