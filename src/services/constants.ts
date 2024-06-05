export const populationKinds = {
  total: '総人口',
  young: '年少人口',
  productionAge: '生産年齢人口',
  geriatric: '老年人口',
} as const;

export const All_CITY_PARAM = '-';

// エラーコード
export const APP_ERROR_CODE = {
  BAD_REQUEST: '400',
  FORBIDDEN: '403',
  NOT_FOUND: '404',
  TOO_MANY_REQUESTS: '429',
  INTERNAL_SERVER_ERROR: '500',
} as const;

// エラーメッセージ
export const APP_ERROR_MESSAGE = {
  BAD_REQUEST: '不明なエラーが発生しました。',
  FORBIDDEN: 'APIキーが設定されていない、またはご指定のAPIキーが無効です',
  NOT_FOUND: 'リクエストURLが見つかりません',
  TOO_MANY_REQUESTS: 'リクエスト制限',
  INTERNAL_SERVER_ERROR: '通信エラーが発生しました。',
} as const;
