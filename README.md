# 都道府県別の人口遷移グラフアプリ

## セットアップ

- モジュールをダウンロード

```
$ npm ci
```

## ローカル環境でデバッグモード起動

1. ウェブサーバーを起動

```
$ npm start
```

2. ブラウザで (http://localhost:3000) へアクセス

## Lint / format

### ESLint でルールに従った自動修正

eslint を実行

```
$ npm run lint:fix
```

### Prettier でルールに従った自動修正

prettier を実行

```
$ npm run format:fix
```

## src 配下のディレクトリ構成

- api: 外部 API とのデータの受け渡しを行う
  - interfaces: api のパラメーターやレスポンスの型定義をする
- components: 各画面から呼び出すコンポーネントを配置
  - molecules: 画面の部品
  - templates: 画面構造
- pages: api の通信や、画面で使用する関数や変数を定義する
- types: 各コンポーネントでデータやpropsの型定義をする