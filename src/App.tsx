import React from 'react';
import './wdyr';
import { Navigate, Route, Routes } from 'react-router-dom';
import PopulationTransition from './pages/PopulationTransition.page';
import { LoadingProvider } from './contexts/Loading.context';

function App() {
  return (
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/population-transition" />} />
        <Route path="/population-transition" element={<PopulationTransition />} />
      </Routes>
    </LoadingProvider>
  );
}

export default App;
