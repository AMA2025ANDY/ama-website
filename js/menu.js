// js/menu.js

document.addEventListener("DOMContentLoaded", () => {
    const introSentence = document.getElementById('intro-sentence');
    const fixedNavbar = document.getElementById('fixed-navbar');
    
    let isTicking = false;

    window.addEventListener('scroll', () => {
        if (!isTicking) {
            window.requestAnimationFrame(() => {
                // 当滑过屏幕高度的一半多时切换
                if (window.scrollY > window.innerHeight + 100) {
                    if (introSentence) introSentence.style.opacity = '0';
                    if (fixedNavbar) fixedNavbar.classList.add('visible');
                } else {
                    if (introSentence) introSentence.style.opacity = '1';
                    if (fixedNavbar) fixedNavbar.classList.remove('visible');
                }
                isTicking = false;
            });
            isTicking = true;
        }
    });
});