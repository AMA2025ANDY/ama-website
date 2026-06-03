// js/intro.js

// 强制刷新回顶
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const logoContainer = document.getElementById('intro-logo');
    const video = document.getElementById('hero-video'); // 获取视频元素

    // 1. 锁定页面
    body.classList.add('locked');

    // 点击 logo 或视频立即跳过 intro
    const skipBtn = document.getElementById('skip-intro');
    if (logoContainer) logoContainer.style.pointerEvents = 'auto';
    [logoContainer, video, skipBtn].forEach(el => {
        if (el) el.addEventListener('click', scrollDown);
    });
    

    // === 定义下滑函数 ===
    function scrollDown() {
        body.classList.remove('locked');
        if (skipBtn) skipBtn.style.opacity = '0';
        window.scrollTo({
            top: window.innerHeight, 
            behavior: 'smooth'
        });
        console.log("Intro finished.");
        
    }



    // 2. 智能判断逻辑
    if (video) {
        // 如果视频加载成功，监听 "ended" 事件 (视频播完那一刻触发)
        video.onended = () => {
            console.log("Video ended, scrolling now...");
            scrollDown();
        };

        // 保险起见：如果视频太长(超过15秒)或者卡住了，强制在 15秒后跳转
        setTimeout(scrollDown, 15000); 

    } else {
        // 如果没视频，3秒后直接跳
        setTimeout(scrollDown, 3000);
    }

    // Logo 滚动变淡逻辑 (性能优化版)
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