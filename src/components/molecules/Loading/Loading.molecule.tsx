import React from 'react';
import loadingStyle from './Loading.molecule.module.scss';

interface LoadingPropsType {
  isLoading: boolean;
}

export const LoadingComponent: React.FC<LoadingPropsType> = ({ isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <div className={loadingStyle.loadingOverlay}>
          <div className={loadingStyle.loadingSpinner}></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

LoadingComponent.whyDidYouRender = true;
