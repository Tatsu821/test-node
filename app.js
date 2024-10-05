// app.js
const express = require('express');
const app = express();
const path = require('path');

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'docs')));

// "/" (ホームページ) のルート設定
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs/home.html'));
});

// "/(user_id)/mypage" のルーティング設定
const mypageRouter = require('./routes/mypage');
app.use('/', mypageRouter);

// サーバーの起動
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
