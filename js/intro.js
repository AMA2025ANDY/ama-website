// js/intro.js

// 刷新时强制回顶，重新播放开场动画
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const logoContainer = document.getElementById('intro-logo');
    const video = document.getElementById('hero-video');
    const skipBtn = document.getElementById('skip-intro');

    // 1. 锁定页面
    body.classList.add('locked');

    // 用户一旦自己滚动，立即接管：解锁 + 放弃自动滚动
    let userTookOver = false;
    function takeOver() {
        userTookOver = true;
        body.classList.remove('locked');
    }
    window.addEventListener('wheel', takeOver, { once: true, passive: true });
    window.addEventListener('touchmove', takeOver, { once: true, passive: true });

    // === 定义下滑函数 ===
    function scrollDown() {
        if (userTookOver) return;   // 用户已经自己滚了，不再自动滚动
        body.classList.remove('locked');
        if (skipBtn) skipBtn.style.opacity = '0';
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
        console.log("Intro finished.");
    }

    // 点击 logo / 视频 / 跳过按钮，立即跳过 intro
    if (logoContainer) logoContainer.style.pointerEvents = 'auto';
    [logoContainer, video, skipBtn].forEach(el => {
        if (el) el.addEventListener('click', scrollDown);
    });

    // 2. 智能判断逻辑
    if (video) {
        video.onended = () => {
            console.log("Video ended, scrolling now...");
            scrollDown();
        };
        // 保险：按视频真实时长 + 0.5 秒自动滚（读不到时长就退回 8 秒）
        video.onloadedmetadata = () => {
            const ms = isFinite(video.duration) ? (video.duration * 1000) + 500 : 8000;
            setTimeout(scrollDown, ms);
        };
    } else {
        setTimeout(scrollDown, 3000);
    }

    // Logo 滚动变淡逻辑
    let isTicking = false;
    window.addEventListener('scroll', () => {
        if (!isTicking) {
            window.requestAnimationFrame(() => {
                if (logoContainer) {
                    let opacity = 1 - (window.scrollY / (window.innerHeight * 0.5));
                    logoContainer.style.opacity = Math.max(0, opacity);
                }
                isTicking = false;
            });
            isTicking = true;
        }
    });
});