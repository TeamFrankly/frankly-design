
class Navigation {
    constructor() {
        const nav = document.getElementById("navigation");
        nav.innerHTML =
        `<nav class="bottom-nav">
            <div class="bottom-nav-area">
                <a href="/index.html">
                    <img src="/assets/icon/nav/Home.svg" alt="홈으로 이동">
                    <p>홈</p>
                </a>
                <a href="/pages/Community/index.html" class="nav--active">
                    <img src="/assets/icon/nav/Chat.svg" alt="홈으로 이동">
                    <p>커뮤니티</p>
                </a>
                <a>
                    <img src="/assets/icon/nav/NtnlAsmbl.svg" alt="홈으로 이동">
                    <p>국회의원</p>
                </a>
                <a>
                    <img src="/assets/icon/nav/User.svg" alt="홈으로 이동">
                    <p>내 정보</p>
                </a>
            </div>
        </nav>`;
    }
}

window.onload = () => {
    new Navigation();
}