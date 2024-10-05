// script.js
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    // test-node/(user_id)/mypage のURLに対応する
    if (path.match(/^\/test-node\/\d+\/mypage\/?$/)) {
        const userId = path.split('/')[2];  // test-node の後の user_id を取得
        fetch('/mypage.html')  // test-node内のmypage.htmlを読み込む
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;

                // ユーザーIDを表示する
                document.getElementById('userId').textContent = userId;
            });
    }
});
