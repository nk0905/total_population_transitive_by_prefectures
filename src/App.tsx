import React from 'react';
import './wdyr';
import { Navigate, Route, Routes } from 'react-router-dom';
import PopulationTransition from './pages/PopulationTransition.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/population-transition" />} />
      <Route path="/population-transition" element={<PopulationTransition />} />
    </Routes>
  );
}

export default App;
