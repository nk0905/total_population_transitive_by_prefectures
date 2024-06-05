import React from 'react';
import { useLocation } from 'react-router-dom';
import { ErrorPropsType } from '../types/error.type';
import ErrorTemplate from '../components/templates/Error/Error.template';

const Error: React.FC = () => {
  const location = useLocation();

  const props: ErrorPropsType = {
    message: location.state ? location.state.message : '',
  };
  return <ErrorTemplate {...props} />;
};

Error.whyDidYouRender = true;
export default Error;
