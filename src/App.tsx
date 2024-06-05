import React from 'react';
import './wdyr';
import { Navigate, Route, Routes } from 'react-router-dom';
import PopulationTransition from './pages/PopulationTransition.page';
import { LoadingProvider } from './contexts/Loading.context';
import AxiosClientProvider from './AxiosClientProvider';
import Error from './pages/Error.page';

function App() {
  return (
    <AxiosClientProvider>
      <LoadingProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/population-transition" />} />
          <Route path="/population-transition" element={<PopulationTransition />} />
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<Navigate to="/error" />} />
        </Routes>
      </LoadingProvider>
    </AxiosClientProvider>
  );
}

export default App;
