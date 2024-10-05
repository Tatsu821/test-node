// script.js
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    // ユーザーIDに基づいてmypageを表示する場合
    if (path.match(/^\/\d+\/mypage\/?$/)) {
        const userId = path.split('/')[1];
        fetch('/docs/mypage.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;

                // ユーザーIDを表示する
                document.getElementById('userId').textContent = userId;
            });
    }
});
