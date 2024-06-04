import React, { createContext, useState } from 'react';

export const LoadingContext = createContext(
  {} as {
    isLoading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  },
);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>{children}</LoadingContext.Provider>
  );
};
