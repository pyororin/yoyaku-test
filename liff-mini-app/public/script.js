// window.onload イベントハンドラ: HTMLドキュメントの読み込みが完了したときに実行される関数
window.onload = () => {
  // HTML要素を取得
  const statusElement = document.getElementById('status');
  const displayNameElement = document.getElementById('displayName');
  const profilePictureElement = document.getElementById('profilePicture');

  // ★★★★★ LIFF ID (LINE Developersコンソールで発行されたものを設定してください) ★★★★★
  const liffId = "YOUR_LIFF_ID"; 
  // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

  statusElement.textContent = 'LIFFを初期化しています...';

  // LIFF SDKの初期化
  liff.init({ liffId: liffId })
    .then(() => { // 初期化成功時の処理
      statusElement.textContent = 'LIFFの初期化に成功しました。';
      
      // LINEアプリ内ブラウザで実行されているか、またはLINEログイン済みかを判定
      if (!liff.isLoggedIn() && !liff.isInClient()) {
        // LINEログインもされておらず、かつLINEアプリ内ブラウザでもない場合
        // (例: 通常のPCブラウザでアクセスし、まだLINEログインしていない状態)
        statusElement.textContent = 'LINEアカウントでログインしてください。';
        // 必要に応じてログイン処理を促す (例: liff.login() を呼び出す)
        // liff.login(); 
      } else {
        // LINEログイン済み、またはLINEアプリ内ブラウザでアクセスしている場合
        // ユーザープロファイルを取得
        liff.getProfile()
          .then(profile => {
            // プロファイル情報をHTML要素に設定
            displayNameElement.textContent = profile.displayName;
            profilePictureElement.src = profile.pictureUrl;
            statusElement.textContent = 'プロフィール情報を取得しました。';
          })
          .catch((err) => {
            // プロファイル取得エラー時の処理
            console.error('プロファイル取得エラー:', err);
            statusElement.textContent = 'プロファイル取得エラー: ' + err.message;
          });
      }
    })
    .catch((err) => { // 初期化失敗時の処理
      console.error('LIFF初期化失敗:', err);
      statusElement.textContent = 'LIFF初期化失敗: ' + err.message;
    });
};
