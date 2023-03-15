import React from 'react';
import { Catalog } from './components/Catalog';
import { Navigate, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="home" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
