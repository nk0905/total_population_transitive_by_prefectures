# 都道府県別の人口遷移グラフアプリ

## RESAS API KEY

### RESAS API 利用登録

以下にアクセスし利用登録を実施  
[RESAS-API](https://opendata.resas-portal.go.jp/)

### マイページの API Key をコピー

API Key をコピー

## 環境変数ファイルを作成

```
touch .env
```

## 環境変数ファイルの修正

.envファイル
```
RESAS_API_URL=https://opendata.resas-portal.go.jp/api/v1
RESAS_API_KEY=<RESAS API マイページでコピーしたAPI Keyを貼り付け>
```

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
  - types: api のパラメーターやレスポンスの型定義をする
- components: 各画面から呼び出すコンポーネントを配置
  - molecules: 画面の部品
  - templates: 画面構造
- contexts: 全画面共通で使用するデータ
- logics: 各画面で使うロジックを定義する
- pages: api の通信や、画面で使用する関数や変数を定義する
- services: その他の機能群
  - constants: 定数の定義を行う
  - utils: 複数の画面で使用する関数や、複雑なロジックを持つ関数を定義する
- types: 各コンポーネントでデータやpropsの型定義をする