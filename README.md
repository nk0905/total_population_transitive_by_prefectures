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

2. ブラウザで(http://localhost:3000)へアクセス

## Lint

### ESLint 実行

```
$ npm run lint
```

### ESLint でルールに従った自動修正

eslint を実行

```
$ npm run lint:fix
```

## src 配下のディレクトリ構成

- api: 外部 API とのデータの受け渡しを行う
  - interfaces: api のパラメーターやレスポンスの型定義をする
- components: 各画面から呼び出すコンポーネントを配置
  - molecules: 画面の部品
  - templates: 画面構造
- logics: 各画面で使うロジックを定義する
- pages: api の通信や、画面で使用する関数や変数を定義する
- services: その他の機能群
  - consts: 定数の定義を行う
  - utils: 複数の画面で使用する関数や、複雑なロジックを持つ関数を定義する
