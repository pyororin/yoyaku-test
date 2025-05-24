// Express モジュールを読み込む
const express = require('express');
// Express アプリケーションを作成
const app = express();
// ポート番号を設定
const port = 3000;

//静적ファイル (HTML, CSS, JavaScriptなど) を 'public' ディレクトリから提供するように設定
app.use(express.static('public'));

app.get('/', (req, res) => {
  // 'public/index.html' が存在する場合、このルートは実質的に上書きされます。
  // APIエンドポイントとして残す場合は、パスを変更するなどの対応が必要です。
  res.json({ message: "Hello LIFF Mini App API!" });
});

// 指定したポートでサーバーを起動
app.listen(port, () => {
  console.log(`サーバーが http://localhost:${port} で起動しました`);
});
