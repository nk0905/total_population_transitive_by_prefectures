// TODO API疎通後このファイルを削除する
export const mockPrefecturesData = [
  {
    prefCode: 1,
    prefName: '北海道',
    isChecked: false,
  },
  {
    prefCode: 2,
    prefName: '青森県',
    isChecked: false,
  },
  {
    prefCode: 3,
    prefName: '岩手県',
    isChecked: false,
  },
  {
    prefCode: 4,
    prefName: '宮城県',
    isChecked: false,
  },
  {
    prefCode: 5,
    prefName: '秋田県',
    isChecked: false,
  },
  {
    prefCode: 6,
    prefName: '山形県',
    isChecked: false,
  },
  {
    prefCode: 7,
    prefName: '福島県',
    isChecked: false,
  },
  {
    prefCode: 8,
    prefName: '茨城県',
    isChecked: false,
  },
  {
    prefCode: 9,
    prefName: '栃木県',
    isChecked: false,
  },
  {
    prefCode: 10,
    prefName: '群馬県',
    isChecked: false,
  },
  {
    prefCode: 11,
    prefName: '埼玉県',
    isChecked: false,
  },
  {
    prefCode: 12,
    prefName: '千葉県',
    isChecked: false,
  },
  {
    prefCode: 13,
    prefName: '東京都',
    isChecked: false,
  },
  {
    prefCode: 14,
    prefName: '神奈川県',
    isChecked: false,
  },
  {
    prefCode: 15,
    prefName: '新潟県',
    isChecked: false,
  },
  {
    prefCode: 16,
    prefName: '富山県',
    isChecked: false,
  },
  {
    prefCode: 17,
    prefName: '石川県',
    isChecked: false,
  },
  {
    prefCode: 18,
    prefName: '福井県',
    isChecked: false,
  },
  {
    prefCode: 19,
    prefName: '山梨県',
    isChecked: false,
  },
  {
    prefCode: 20,
    prefName: '長野県',
    isChecked: false,
  },
  {
    prefCode: 21,
    prefName: '岐阜県',
    isChecked: false,
  },
  {
    prefCode: 22,
    prefName: '静岡県',
    isChecked: false,
  },
  {
    prefCode: 23,
    prefName: '愛知県',
    isChecked: false,
  },
  {
    prefCode: 24,
    prefName: '三重県',
    isChecked: false,
  },
  {
    prefCode: 25,
    prefName: '滋賀県',
    isChecked: false,
  },
  {
    prefCode: 26,
    prefName: '京都府',
    isChecked: false,
  },
  {
    prefCode: 27,
    prefName: '大阪府',
    isChecked: false,
  },
  {
    prefCode: 28,
    prefName: '兵庫県',
    isChecked: false,
  },
  {
    prefCode: 29,
    prefName: '奈良県',
    isChecked: false,
  },
  {
    prefCode: 30,
    prefName: '和歌山県',
    isChecked: false,
  },
  {
    prefCode: 31,
    prefName: '鳥取県',
    isChecked: false,
  },
  {
    prefCode: 32,
    prefName: '島根県',
    isChecked: false,
  },
  {
    prefCode: 33,
    prefName: '岡山県',
    isChecked: false,
  },
  {
    prefCode: 34,
    prefName: '広島県',
    isChecked: false,
  },
  {
    prefCode: 35,
    prefName: '山口県',
    isChecked: false,
  },
  {
    prefCode: 36,
    prefName: '徳島県',
    isChecked: false,
  },
  {
    prefCode: 37,
    prefName: '香川県',
    isChecked: false,
  },
  {
    prefCode: 38,
    prefName: '愛媛県',
    isChecked: false,
  },
  {
    prefCode: 39,
    prefName: '高知県',
    isChecked: false,
  },
  {
    prefCode: 40,
    prefName: '福岡県',
    isChecked: false,
  },
  {
    prefCode: 41,
    prefName: '佐賀県',
    isChecked: false,
  },
  {
    prefCode: 42,
    prefName: '長崎県',
    isChecked: false,
  },
  {
    prefCode: 43,
    prefName: '熊本県',
    isChecked: false,
  },
  {
    prefCode: 44,
    prefName: '大分県',
    isChecked: false,
  },
  {
    prefCode: 45,
    prefName: '宮崎県',
    isChecked: false,
  },
  {
    prefCode: 46,
    prefName: '鹿児島県',
    isChecked: false,
  },
  {
    prefCode: 47,
    prefName: '沖縄県',
    isChecked: false,
  },
];

// 下記URLのページのサンプルレスポンスを引用
// https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
export const mockPopulationData = {
  message: null,
  result: {
    boundaryYear: 2020,
    data: [
      {
        label: '総人口',
        data: [
          {
            year: 1980,
            value: 12817,
          },
          {
            year: 1985,
            value: 12707,
          },
          {
            year: 1990,
            value: 12571,
          },
          {
            year: 1995,
            value: 12602,
          },
          {
            year: 2000,
            value: 12199,
          },
          {
            year: 2005,
            value: 11518,
          },
          {
            year: 2010,
            value: 10888,
          },
          {
            year: 2015,
            value: 10133,
          },
          {
            year: 2020,
            value: 9302,
          },
          {
            year: 2025,
            value: 8431,
          },
          {
            year: 2030,
            value: 7610,
          },
          {
            year: 2035,
            value: 6816,
          },
          {
            year: 2040,
            value: 6048,
          },
          {
            year: 2045,
            value: 5324,
          },
        ],
      },
      {
        label: '年少人口',
        data: [
          {
            year: 1980,
            value: 2906,
            rate: 22.67,
          },
          {
            year: 1985,
            value: 2769,
            rate: 21.79,
          },
          {
            year: 1990,
            value: 2346,
            rate: 18.66,
          },
          {
            year: 1995,
            value: 2019,
            rate: 16.02,
          },
          {
            year: 2000,
            value: 1728,
            rate: 14.17,
          },
          {
            year: 2005,
            value: 1442,
            rate: 12.52,
          },
          {
            year: 2010,
            value: 1321,
            rate: 12.13,
          },
          {
            year: 2015,
            value: 1144,
            rate: 11.29,
          },
          {
            year: 2020,
            value: 936,
            rate: 10.06,
          },
          {
            year: 2025,
            value: 822,
            rate: 9.75,
          },
          {
            year: 2030,
            value: 705,
            rate: 9.26,
          },
          {
            year: 2035,
            value: 593,
            rate: 8.7,
          },
          {
            year: 2040,
            value: 513,
            rate: 8.48,
          },
          {
            year: 2045,
            value: 443,
            rate: 8.32,
          },
        ],
      },
      {
        label: '生産年齢人口',
        data: [
          {
            year: 1980,
            value: 8360,
            rate: 65.23,
          },
          {
            year: 1985,
            value: 8236,
            rate: 64.81,
          },
          {
            year: 1990,
            value: 8144,
            rate: 64.78,
          },
          {
            year: 1995,
            value: 8048,
            rate: 63.86,
          },
          {
            year: 2000,
            value: 7595,
            rate: 62.26,
          },
          {
            year: 2005,
            value: 7032,
            rate: 61.05,
          },
          {
            year: 2010,
            value: 6387,
            rate: 58.66,
          },
          {
            year: 2015,
            value: 5538,
            rate: 54.65,
          },
          {
            year: 2020,
            value: 4756,
            rate: 51.13,
          },
          {
            year: 2025,
            value: 4187,
            rate: 49.66,
          },
          {
            year: 2030,
            value: 3693,
            rate: 48.53,
          },
          {
            year: 2035,
            value: 3251,
            rate: 47.7,
          },
          {
            year: 2040,
            value: 2681,
            rate: 44.33,
          },
          {
            year: 2045,
            value: 2261,
            rate: 42.47,
          },
        ],
      },
      {
        label: '老年人口',
        data: [
          {
            year: 1980,
            value: 1550,
            rate: 12.09,
          },
          {
            year: 1985,
            value: 1702,
            rate: 13.39,
          },
          {
            year: 1990,
            value: 2081,
            rate: 16.55,
          },
          {
            year: 1995,
            value: 2535,
            rate: 20.12,
          },
          {
            year: 2000,
            value: 2876,
            rate: 23.58,
          },
          {
            year: 2005,
            value: 3044,
            rate: 26.43,
          },
          {
            year: 2010,
            value: 3179,
            rate: 29.2,
          },
          {
            year: 2015,
            value: 3442,
            rate: 33.97,
          },
          {
            year: 2020,
            value: 3578,
            rate: 38.46,
          },
          {
            year: 2025,
            value: 3422,
            rate: 40.59,
          },
          {
            year: 2030,
            value: 3212,
            rate: 42.21,
          },
          {
            year: 2035,
            value: 2972,
            rate: 43.6,
          },
          {
            year: 2040,
            value: 2854,
            rate: 47.19,
          },
          {
            year: 2045,
            value: 2620,
            rate: 49.21,
          },
        ],
      },
    ],
  },
};
