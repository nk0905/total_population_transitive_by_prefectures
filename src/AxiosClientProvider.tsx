import React, { useEffect } from 'react';
import { resasApi } from './api/resas.api';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { APP_ERROR_CODE, APP_ERROR_MESSAGE } from './services/constants';

const AxiosClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    resasApi.interceptors.request.use((config) => {
      return config;
    });

    resasApi.interceptors.response.use(
      (response: AxiosResponse) => {
        // RESASの仕様でエラーが起きてもレスポンスヘッダーのステータスは200になりこちらに流れてくる
        if (response.data.statusCode) {
          let errorMessage = '';
          switch (response.data.statusCode) {
            case APP_ERROR_CODE.BAD_REQUEST:
              errorMessage = APP_ERROR_MESSAGE.BAD_REQUEST;
              break;
            case APP_ERROR_CODE.FORBIDDEN:
              errorMessage = APP_ERROR_MESSAGE.FORBIDDEN;
              break;
            case APP_ERROR_CODE.NOT_FOUND:
              errorMessage = APP_ERROR_MESSAGE.NOT_FOUND;
              break;
            case APP_ERROR_CODE.TOO_MANY_REQUESTS:
              errorMessage = APP_ERROR_MESSAGE.TOO_MANY_REQUESTS;
              break;
            default:
              errorMessage = APP_ERROR_MESSAGE.INTERNAL_SERVER_ERROR;
              break;
          }
          navigate('/error', { state: { message: errorMessage } });
        }
        return response;
      },
      (error: AxiosError) => {
        Promise.reject(error);
      },
    );
  }, []);

  return <>{children}</>;
};

export default AxiosClientProvider;
