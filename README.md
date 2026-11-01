# yoyaku-test

LINE の LIFF(LINE Front-end Framework)を使ったミニアプリの動作確認用サンプルです。LINE ログイン済みのユーザーの表示名とプロフィール画像を表示するだけの小さな実装で、リポジトリ名の「yoyaku(予約)」に関する機能(予約の登録・管理など)は**実装されていません**。

## ステータス

実験・検証用のサンプル(PoC)です。機能追加の予定やテストはなく、メンテナンスも想定していません。

## 特長

- LIFF SDK(v2, CDN 配信)の初期化と `liff.getProfile()` によるプロフィール(表示名・画像)の取得と表示
- 未ログインの外部ブラウザでは「LINEアカウントでログインしてください。」と表示(自動ログインは行わない)
- Express による静的ファイル配信のみのシンプルなサーバー

## 技術スタック

- Node.js / Express 5(`liff-mini-app/package.json`)
- フロントエンド: 素の HTML / CSS / JavaScript、LIFF SDK(`https://static.line-scdn.net/liff/edge/2/sdk.js`)

## セットアップ

詳細な手順は [`liff-mini-app/README.md`](liff-mini-app/README.md) を参照してください。概要は次のとおりです。

1. LINE Developers コンソールで LINE ログインチャネルを作成し、LIFF アプリを追加する(Scope に `profile` と `openid`)。
2. `liff-mini-app/public/script.js` の `liffId`(初期値は `"YOUR_LIFF_ID"`)を、自分の LIFF ID に置き換える。
3. 依存関係をインストールして起動する。

```bash
cd liff-mini-app
npm install
node index.js   # http://localhost:3000 で起動
```

LIFF のエンドポイント URL は HTTPS が必要です。ローカル確認では ngrok 等のトンネリングで公開した URL を設定します。

## 使い方

LIFF アプリの URL(`https://liff.line.me/<LIFF ID>`)に、LINE アプリ内ブラウザ等からアクセスすると、プロフィール情報が表示されます。

## 構成

```
liff-mini-app/
  index.js          Express サーバー(public/ を配信、ポートは 3000 固定)
  public/
    index.html      画面
    script.js       LIFF 初期化・プロフィール取得
    style.css       スタイル
  package.json
```

## 注意事項

- `script.js` の LIFF ID はプレースホルダーです。自分の LIFF ID を設定する場合も、公開リポジトリへコミットするかどうかは各自で判断してください。
- `npm test` は未実装です(`no test specified`)。
- ライセンスは未設定です(`package.json` の license 欄は ISC ですが、LICENSE ファイルはありません)。
