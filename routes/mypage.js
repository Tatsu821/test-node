// routes/mypage.js
const express = require('express');
const router = express.Router();
const path = require('path');

// ユーザーIDを受け取ってmypage.htmlを返す
router.get('/:user_id/mypage', (req, res) => {
    const userId = req.params.user_id;
    // 静的ファイルを返す (user_idを使って動的処理を行う場合はEJSなどを使う)
    res.sendFile(path.join(__dirname, '../docs/mypage.html'));
});

module.exports = router;
