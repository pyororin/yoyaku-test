# LINE LIFFミニアプリ サンプル

## 概要
このプロジェクトは、LINE Front-end Framework (LIFF) を使用したLINEミニアプリの基本的なサンプルです。ユーザーのプロフィール情報を表示する機能が含まれています。

## 前提条件
* Node.js (例: v16以上)
* LINE Developersアカウント
* (ローカルテスト用) ngrok または類似のトンネリングツール

## セットアップ手順
1.  このリポジトリをクローンします。
2.  ターミナルで `liff-mini-app` ディレクトリに移動し、`npm install` を実行して依存関係をインストールします。
3.  LINE Developersコンソール ([https://developers.line.biz/console/](https://developers.line.biz/console/)) でLINEログインチャネルを作成し、「LIFF」タブから新しいLIFFアプリを追加します。
4.  LIFFアプリ設定で、**エンドポイントURL** を設定します。ローカルでテストする場合、まず `node index.js` でローカルサーバーを起動 (ポート3000) し、次に `ngrok http 3000` 等で発行された `https://xxxxxx.ngrok.io` のようなURLをエンドポイントURLとして設定します。
5.  発行された **LIFF ID** をコピーし、`liff-mini-app/public/script.js` ファイル内の `const liffId = "YOUR_LIFF_ID";` の `"YOUR_LIFF_ID"` 部分を実際のLIFF IDに置き換えます。
6.  LIFFアプリ設定で、**Scope** に `profile` と `openid` を含めてください。

## 実行方法
1.  ターミナルで `liff-mini-app` ディレクトリに移動します。
2.  `node index.js` を実行して、ローカルサーバーを起動します (通常はポート3000で起動します)。
3.  LIFFアプリのURL (`https://liff.line.me/YOUR_LIFF_ID`) にスマートフォンまたはPCのLINEアプリ内ブラウザ、あるいは通常のブラウザからアクセスします。

## 注意点
*   LIFFアプリのエンドポイントURLが正しく設定されていないと、このサンプルアプリのカスタムUI（ユーザー名や画像の表示）は機能しません。LINE提供のデフォルトページが表示される場合は、エンドポイントURLの設定を確認してください。
*   `script.js` 内のLIFF IDが正しく設定されていない場合、LIFFアプリは正しく初期化されません。
