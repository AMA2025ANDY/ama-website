// js/home-renderer.js (Upgrade: 强制竖屏比例 + 完美对齐)

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('projects-container');
    if (!container || typeof projectsData === 'undefined') return;

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('modal-close');
    const backdrop = document.querySelector('.modal-backdrop');
    let activeGridItem = null;

    // === 0. 工具函数 ===
    // HTML 转义:防止文案里的 < > & 破坏页面或注入
    function escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str == null ? '' : String(str);
        return div.innerHTML;
    }

    // 防抖 (Debounce)
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // === 1. 智能鼠标跟随器 ===
    let cursorFollower = document.getElementById('cursor-follower');
    if (!cursorFollower) {
        cursorFollower = document.createElement('div');
        cursorFollower.id = 'cursor-follower';
        document.body.appendChild(cursorFollower);
    }

    let mouseX = 0, mouseY = 0;
    let isCursorTicking = false;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        const targetItem = e.target.closest('.waterfall-item');
        if (targetItem) {
            const title = targetItem.getAttribute('data-title');
            if (title && cursorFollower) {
                cursorFollower.innerText = title;
                cursorFollower.classList.add('active');
            }
        } else {
            if (cursorFollower) cursorFollower.classList.remove('active');
        }

        if (!isCursorTicking) {
            window.requestAnimationFrame(() => {
                if (cursorFollower) {
                    cursorFollower.style.left = mouseX + 'px';
                    cursorFollower.style.top = mouseY + 'px';
                }
                isCursorTicking = false;
            });
            isCursorTicking = true;
        }
    });

    // === 2. 进入纯净网格模式 ===
    function enterGridMode() {
        const videoBg = document.querySelector('.video-container');
        if(videoBg) videoBg.style.display = 'none';
        
        const logo = document.getElementById('intro-logo');
        if(logo) logo.style.display = 'none';
        
        const introText = document.querySelector('.intro-text-section');
        if(introText) introText.style.display = 'none';

        const mainContent = document.querySelector('.main-content');
        if(mainContent) {
            mainContent.style.top = '0';
            mainContent.style.minHeight = '100vh';
            mainContent.style.paddingTop = '150px';
            mainContent.style.background = '#fff';
        }

        const navBar = document.getElementById('fixed-navbar');
        if(navBar) {
            navBar.classList.add('visible');
            navBar.style.opacity = '1';
            navBar.style.transform = 'translateY(0)';
            navBar.style.pointerEvents = 'all';
            document.body.classList.add('grid-view-active');
        }
        
        document.body.classList.remove('locked');
    }

    // === 3. 核心筛选逻辑 ===
    window.filterProjects = function(category) {
        if (category) {
            enterGridMode();
            container.classList.add('grid-mode');
        } else {
            container.classList.remove('grid-mode');
        }

        const items = document.querySelectorAll('.waterfall-item');
        const architectureCategories = ['residential', 'commercial', 'hospitality'];

        items.forEach(item => {
            const itemCat = item.getAttribute('data-category');
            const safeCat = category ? category.toLowerCase() : 'all'; 
            const safeItemCat = itemCat ? itemCat.toLowerCase() : '';

            let shouldShow = false;

            if (safeCat === 'all') {
                if (architectureCategories.includes(safeItemCat)) shouldShow = true;
            } else {
                if (safeItemCat === safeCat) shouldShow = true;
            }

            if (shouldShow) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        setTimeout(resizeAllGridItems, 100);
    };

    // === 4. 生成媒体 HTML (核心修复：强制竖版 + 裁切) ===
    function generateMediaHTML(item, projectId, isModal = false) {
        // A. 简单的字符串文件
        if (typeof item === 'string') {
             const src = item;
             if (src.toLowerCase().endsWith('.mp4')) {
                const path = `${ASSET_BASE}/assets/projects/${projectId}/${src}`;
                return `<div class="video-wrapper"><video autoplay muted loop playsinline style="width:100%; display:block;" class="${isModal?'modal-media':''}"><source src="${path}" type="video/mp4"></video></div>`;
             } else {
                return `<img src="${ASSET_BASE}/assets/projects/${projectId}/${src}" class="${isModal?'modal-media':''}" alt="Img">`;
             }
        }

        // B. 对象类型数据
        if (item.type === 'image') {
            return `<img src="${ASSET_BASE}/assets/projects/${projectId}/${item.src}" class="${isModal?'modal-media':''}" style="width:100%; display:block;" alt="Img">`;
        }
        
        if (item.type === 'video') {
            // [重点修改]：Vimeo 视频强制竖版 (3:4)
            if (item.provider === 'vimeo') {
                const src = item.src || item.filename; 
                // 首页网格加遮罩，防止鼠标被iframe吸走
                const overlay = isModal ? '' : '<div style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:20; cursor:pointer;"></div>';
                
                // 1. padding-bottom: 133.33% = 3:4 比例 (竖长方形，和图片一致)
                // 2. transform: scale(1.4) = 放大视频，确保横屏视频填满竖屏格子，不留黑边
                const aspectRatio = "133.33%"; 

                // 只有首页封面 + data 里标了 sound:true 的，才用可控音量参数(去掉 background=1)
                const wantSound = item.sound === true && !isModal;
                const vimeoParams = wantSound
                    ? `autoplay=1&loop=1&muted=1&controls=0&byline=0&title=0&badge=0&autopause=0`
                    : `background=1&autoplay=1&loop=1&byline=0&title=0&badge=0&autopause=0`;
                const soundFlag = wantSound ? 'data-vimeo-sound="1"' : '';
                
                return `
                <div class="video-wrapper" style="position: relative; width: 100%; padding-bottom: ${aspectRatio}; height: 0; overflow: hidden; background: transparent;">
                    ${overlay}
                    <iframe ${soundFlag} src="https://player.vimeo.com/video/${src}?${vimeoParams}" 
                        style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; border: 0; transform: translate(-50%, -50%) scale(1.4); pointer-events: none;" 
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen 
                        title="Vimeo Video">
                    </iframe>
                </div>`;
            }
            
            // 普通 MP4 视频
            const src = item.src;
            const poster = item.poster ? `${ASSET_BASE}/assets/projects/${projectId}/${item.poster}` : '';
            const path = `${ASSET_BASE}/assets/projects/${projectId}/${src}`;
            return `<div class="video-wrapper"><video autoplay muted loop playsinline ${poster?`poster="${poster}"`:''} style="width:100%; display:block;" class="${isModal?'modal-media':''}"><source src="${path}" type="video/mp4"></video></div>`;
        }
        return '';
    }

    // === 5. 渲染首页格子 ===
    projectsData.forEach(project => {
        const item = document.createElement('div');
        item.classList.add('waterfall-item');
        item.setAttribute('data-category', project.category);
        item.setAttribute('data-title', project.title); 

        const layoutClass = `layout-${project.layout || 'half'}`;
        item.classList.add(layoutClass);

        item.onclick = (e) => {
            e.preventDefault();
            const isGridPage = container.classList.contains('grid-mode');
            if (isGridPage) {
                activeGridItem = item;
                if(cursorFollower) cursorFollower.classList.remove('active');
                item.classList.add('tearing');
                setTimeout(() => openModal(project), 500);
            } else {
                activeGridItem = null;
                openModal(project);
            }
        };

        const coverItem = { type: project.type, src: project.filename, provider: project.provider, poster: project.poster, sound: project.sound };
        item.innerHTML = generateMediaHTML(coverItem, project.id, false);
        container.appendChild(item);

        const media = item.querySelector('img, video');
        if (media) {
            media.onload = () => resizeGridItem(item);
            media.onloadeddata = () => resizeGridItem(item);
        } else {
            // Vimeo 强制触发计算
            setTimeout(() => resizeGridItem(item), 100);
        }
    });

    // === 6. 弹窗逻辑 ===
    async function openModal(project) {
        let htmlContent = `
            <div class="modal-project-header">
                <h1 class="modal-title">${project.title}</h1>
                <div class="modal-meta">
                    <span>${project.category}</span>
                    <span>${project.year}</span>
                </div>
            </div>
            <div class="modal-waterfall-container">`;

        if (project.content && project.content.length > 0) {
            for (const item of project.content) {
                if (typeof item === 'object' && item.type === 'text-file') {
                    const txtPath = `${ASSET_BASE}/assets/projects/${project.id}/${item.src}`;
                    let textData = '';
                    try {
                        const response = await fetch(txtPath);
                        if (response.ok) textData = await response.text();
                        else textData = "Loading text failed.";
                    } catch (err) { console.error(err); }
                    
                    htmlContent += `
                        <div class="waterfall-item modal-item layout-${item.layout || 'wide'} project-text-block">
                            ${item.title ? `<div class="text-title">${escapeHTML(item.title)}</div>` : ''}
                            <div class="text-content">${escapeHTML(textData)}</div>
                        </div>`;
                }
                else if (typeof item === 'object' && item.type === 'text') {
                    htmlContent += `
                        <div class="waterfall-item modal-item layout-${item.layout || 'wide'} project-text-block">
                            ${item.title ? `<div class="text-title">${escapeHTML(item.title)}</div>` : ''}
                            ${item.text ? `<div class="text-content">${escapeHTML(item.text)}</div>` : ''}
                        </div>`;
                }
                else if (typeof item === 'object') {
                    htmlContent += `<div class="waterfall-item modal-item layout-${item.layout || 'half'}">${generateMediaHTML(item, project.id, true)}</div>`;
                }
                else if (typeof item === 'string') {
                    htmlContent += `<div class="waterfall-item modal-item layout-half">${generateMediaHTML(item, project.id, true)}</div>`;
                }
            }
        }

        htmlContent += `</div>`;
        modalBody.innerHTML = htmlContent;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        history.replaceState(null, '', `?id=${project.id}`);

        const recalculateModalLayout = () => {
            const items = document.querySelectorAll('.modal-item');
            items.forEach(item => {
                const grid = document.querySelector('.modal-waterfall-container');
                if(!grid) return;

                const contentHeight = item.scrollHeight;
                if(contentHeight === 0) return;

                let extraBuffer = 0;
                if (item.classList.contains('project-text-block')) {
                    extraBuffer = 50; 
                }
                
                item.style.gridRowEnd = "span " + Math.ceil(contentHeight + extraBuffer);
            });
        };

        setTimeout(recalculateModalLayout, 50);
        setTimeout(recalculateModalLayout, 300);
        setTimeout(recalculateModalLayout, 1000);
    }

    // === 7. 辅助功能 ===
    function closeModal() {
        modal.classList.remove('active');
        history.replaceState(null, '', window.location.pathname);
        document.body.style.overflow = '';
        if (activeGridItem) {
            activeGridItem.classList.remove('tearing');
            activeGridItem.classList.add('putting-back');
            setTimeout(() => { if(activeGridItem) { activeGridItem.classList.remove('putting-back'); activeGridItem=null;} }, 600);
        }
        setTimeout(() => modalBody.innerHTML='', 400);
    }
    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(backdrop) backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });

    // 邮箱复制
    const emailTrigger = document.getElementById('email-trigger');
    if (emailTrigger) {
        emailTrigger.addEventListener('click', () => {
            const emailText = "pr@andymartinarchitecture.com";
            navigator.clipboard.writeText(emailText).then(() => {
                emailTrigger.classList.add('active');
                setTimeout(() => { emailTrigger.classList.remove('active'); }, 2000);
            }).catch(err => console.error('Copy failed', err));
        });
    }

    // 导航点击
    const navLinks = document.querySelectorAll('.fixed-navbar a, .intro-text-section a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.includes('?filter=')) {
                e.preventDefault();
                const filterValue = href.split('?filter=')[1];
                history.pushState(null, '', href);
                filterProjects(filterValue);
            }
        });
    });

    // 初始化
    const params = new URLSearchParams(window.location.search);
    const filterType = params.get('filter');
    const directId = params.get('id');
    if (filterType) setTimeout(() => filterProjects(filterType), 50);
    else setTimeout(resizeAllGridItems, 200);

    // 如果网址带 ?id=xxx，自动弹开对应项目
    if (directId) {
        const target = projectsData.find(p => p.id === directId);
        if (target) setTimeout(() => openModal(target), 300);
    }

    function resizeGridItem(item) {
        if (container.classList.contains('grid-mode')) return;
        const grid = document.getElementsByClassName("waterfall-container")[0];
        if (!grid) return;
        const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        
        const content = item.querySelector('.video-wrapper') || item.querySelector('img');
        if (!content) return;
        
        if (content.tagName === 'IMG' && !content.complete) return; 

        // Vimeo 高度基于 padding，所以 getBoundingClientRect 是准确的
        const rowSpan = Math.ceil((content.getBoundingClientRect().height) / rowHeight);
        item.style.gridRowEnd = "span " + rowSpan;
    }

    function resizeAllGridItems() {
        if (container.classList.contains('grid-mode')) return;
        const allItems = document.getElementsByClassName("waterfall-item");
        for (let x = 0; x < allItems.length; x++) {
             if (getComputedStyle(allItems[x]).display !== 'none') resizeGridItem(allItems[x]);
        }
    }

    // === Vimeo 悬停出声（淡入淡出 + 同时只响一个）===
    let currentSoundPlayer = null;
    let fadeTimer = null;

    function fadeVolume(player, from, to, ms) {
        if (fadeTimer) clearInterval(fadeTimer);
        const steps = 15, stepTime = ms / steps;
        let i = 0;
        fadeTimer = setInterval(() => {
            i++;
            const v = from + (to - from) * (i / steps);
            player.setVolume(Math.max(0, Math.min(1, v)));
            if (i >= steps) { clearInterval(fadeTimer); fadeTimer = null; }
        }, stepTime);
    }

    function initVimeoSound() {
        if (typeof Vimeo === 'undefined') return; // SDK 没加载就跳过
        const frames = document.querySelectorAll('iframe[data-vimeo-sound="1"]');
        frames.forEach(frame => {
            const player = new Vimeo.Player(frame);
            player.setVolume(0);
            const wrapper = frame.closest('.waterfall-item');
            if (!wrapper) return;

            wrapper.addEventListener('mouseenter', () => {
                if (currentSoundPlayer && currentSoundPlayer !== player) {
                    fadeVolume(currentSoundPlayer, 1, 0, 300);
                }
                currentSoundPlayer = player;
                fadeVolume(player, 0, 1, 400);
            });
            wrapper.addEventListener('mouseleave', () => {
                fadeVolume(player, 1, 0, 400);
                if (currentSoundPlayer === player) currentSoundPlayer = null;
            });
        });
    }

    // 等首页格子渲染完再初始化（视频加载慢就调大这个数字）
    setTimeout(initVimeoSound, 800);

    window.addEventListener("resize", debounce(resizeAllGridItems, 100));
});