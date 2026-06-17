// =====================================================================
//  js/home-renderer.js
// =====================================================================
//  首页瀑布流渲染 + 项目弹窗(modal) + 分类筛选 + 鼠标跟随器
//  + Vimeo 悬停出声 + 网址同步(?id=) 的总控脚本。
//
//  常用可调点速查:
//   • 文字粗细: data.js 文字块加 bold:true → 该段用 700 粗体
//               (样式在 home.css 的 .text-content.text-bold)
//   • 视频出声: data.js 视频项加 sound:true → 首页封面悬停出声
//   • Vimeo 出声初始化延迟: 搜 initVimeoSound 那行的 800(视频慢就调大)
//   • 弹窗高度重算时机: 搜 recalculateModalLayout 的 50/300/1000
// =====================================================================

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
            // modal 里标了 cursor 的图,鼠标移上去变成指定 png 指针
            const cursorStyle = (isModal && item.cursor)
                ? `cursor: url('${ASSET_BASE}/assets/projects/${projectId}/${item.cursor}') 16 16, auto;`
                : '';
            return `<img src="${ASSET_BASE}/assets/projects/${projectId}/${item.src}" class="${isModal?'modal-media':''}" style="width:100%; display:block; ${cursorStyle}" alt="Img">`;
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
                const wantSound = item.sound === true;
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

      if (item.type === 'flipbook') {
            const urls = (item.pages || []).map(f =>
                `${ASSET_BASE}/assets/projects/${projectId}/${f}`
            );
            const fbId = 'flipbook-' + Math.random().toString(36).slice(2, 9);
            return `
            <div class="flipbook-wrap">
                <div class="flipbook" id="${fbId}" data-flipbook data-pages='${JSON.stringify(urls)}'></div>
                <div class="fb-nav">
                    <button class="fb-prev" type="button" aria-label="Previous">‹</button>
                    <button class="fb-next" type="button" aria-label="Next">›</button>
                </div>
            </div>`;
        }

        return '';
    }

    // === 5. 渲染首页格子 ===
    projectsData.forEach(project => {
        const item = document.createElement('div');
        item.classList.add('waterfall-item');
        item.setAttribute('data-category', project.category);
        if (project.matchRow) item.setAttribute('data-match-row', '1');
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
            <div class="modal-topbar">
                <div class="modal-topbar-inner">
                    <h1 class="modal-title">${project.title}</h1>
                </div>
            </div>
            <div class="modal-project-header">
                <div class="modal-meta">
                    <span>${project.location || ''}</span>
                    <span>${project.category}</span>
                    <span>${project.year}</span>
                </div>
            </div>
            <div class="modal-waterfall-container">`;

        if (project.content && project.content.length > 0) {
            for (const item of project.content) {
                if (typeof item === 'object' && item.type === 'text-file') {
                    // 外部 txt 文字块。加 bold:true 可让这段用 700 粗体（见 home.css 的 .text-bold）
                    const txtPath = `${ASSET_BASE}/assets/projects/${project.id}/${item.src}`;
                    let textData = '';
                    try {
                        const response = await fetch(txtPath);
                        if (response.ok) textData = await response.text();
                        else textData = "Loading text failed.";
                    } catch (err) { console.error(err); }
                    
                    htmlContent += `
                        <div class="waterfall-item modal-item layout-${item.layout || 'wide'} project-text-block"${item.matchRow ? ' data-match-row="1"' : ''}>
                            ${item.title ? `<div class="text-title">${escapeHTML(item.title)}</div>` : ''}
                            <div class="text-content ${item.bold ? 'text-bold' : ''}">${escapeHTML(textData)}</div>
                        </div>`;
                }
                else if (typeof item === 'object' && item.type === 'text') {
                    // 直接写在 data.js 里的文字块。同样支持 bold:true
                    htmlContent += `
                        <div class="waterfall-item modal-item layout-${item.layout || 'wide'} project-text-block"${item.matchRow ? ' data-match-row="1"' : ''}>
                            ${item.title ? `<div class="text-title">${escapeHTML(item.title)}</div>` : ''}
                            ${item.text ? `<div class="text-content ${item.bold ? 'text-bold' : ''}">${escapeHTML(item.text)}</div>` : ''}
                        </div>`;
                }
                else if (typeof item === 'object' && item.type === 'carousel') {
                    // 横向轮播。data.js 写法: { type:'carousel', layout:'wide', images:['01.jpg','02.jpg'] }
                    const imgs = (item.images || []).map(src =>
                        `<img src="${ASSET_BASE}/assets/projects/${project.id}/${src}" class="carousel-img" alt="Img">`
                    ).join('');
                    const dots = (item.images || []).map((_, i) =>
                        `<span class="carousel-dot${i === 0 ? ' active' : ''}" data-i="${i}"></span>`
                    ).join('');
                    htmlContent += `
                        <div class="waterfall-item modal-item layout-${item.layout || 'wide'} project-carousel" data-index="0">
                            <div class="carousel-track">${imgs}</div>
                            <button class="carousel-btn carousel-prev" aria-label="Prev">‹</button>
                            <button class="carousel-btn carousel-next" aria-label="Next">›</button>
                            <div class="carousel-dots">${dots}</div>
                        </div>`;
                }
                else if (typeof item === 'object') {
                    htmlContent += `<div class="waterfall-item modal-item layout-${item.layout || 'half'}"${item.matchRow ? ' data-match-row="1"' : ''}>${generateMediaHTML(item, project.id, true)}</div>`;
                }
                else if (typeof item === 'string') {
                    htmlContent += `<div class="waterfall-item modal-item layout-half">${generateMediaHTML(item, project.id, true)}</div>`;
                }
            }
        }

        htmlContent += `</div>`;

        // === RELATED：同 category 的其他项目，最多 5 个 ===
        const related = projectsData.filter(p =>
            p.category === project.category && p.id !== project.id
        ).slice(0, 5);

        if (related.length > 0) {
            htmlContent += `
                <div class="related-section">
                    <h2 class="related-title">RELATED</h2>
                    <div class="related-grid">`;
            related.forEach(rel => {
                const cover = { type: rel.type, src: rel.filename, provider: rel.provider, poster: rel.poster };
                htmlContent += `
                    <div class="related-item waterfall-item" data-related-id="${rel.id}" data-title="${escapeHTML(rel.title)}">
                        ${generateMediaHTML(cover, rel.id, true)}
                    </div>`;
            });
            htmlContent += `</div></div>`;
        }

        modalBody.innerHTML = htmlContent;
        setTimeout(() => initVimeoSound(modalBody), 600);
        modalBody.querySelectorAll('.project-carousel').forEach(car => {
            const track = car.querySelector('.carousel-track');
            const dots = car.querySelectorAll('.carousel-dot');
            const total = track.children.length;
            if (total === 0) return;

            const go = (i) => {
                const idx = (i + total) % total;
                car.dataset.index = idx;
                track.style.transform = `translateX(-${idx * 100}%)`;
                dots.forEach((d, k) => d.classList.toggle('active', k === idx));
            };

            // 自动播放：每 30 秒下一张；任何手动操作后重置计时
            let autoTimer = null;
            const startAuto = () => {
                clearInterval(autoTimer);
                autoTimer = setInterval(() => go(+car.dataset.index + 1), 30000);
            };
            // 手动切换的包装：切换 + 重置 30 秒
            const goManual = (i) => { go(i); startAuto(); };

            // 进入视窗后 5 秒内先自切一次，之后转入 30 秒常规循环
            let kicked = false;
            const io = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !kicked) {
                        kicked = true;
                        io.disconnect();
                        setTimeout(() => {
                            go(+car.dataset.index + 1);
                            startAuto();
                        }, 1000);
                    }
                });
            }, { threshold: 0.3 });
            io.observe(car);

            car.querySelector('.carousel-prev').addEventListener('click', () => goManual(+car.dataset.index - 1));
            car.querySelector('.carousel-next').addEventListener('click', () => goManual(+car.dataset.index + 1));
            dots.forEach(d => d.addEventListener('click', () => goManual(+d.dataset.i)));

            // 鼠标滚轮横向切换（节流，防止一滚翻好几张）
            let wheelLock = false;
            car.addEventListener('wheel', (e) => {
                if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
                e.preventDefault();
                if (wheelLock) return;
                wheelLock = true;
                goManual(+car.dataset.index + (e.deltaX > 0 ? 1 : -1));
                setTimeout(() => { wheelLock = false; }, 400);
            }, { passive: false });

            // 手机触摸滑动
            let startX = 0, touching = false;
            car.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                touching = true;
            }, { passive: true });
            car.addEventListener('touchend', (e) => {
                if (!touching) return;
                touching = false;
                const dx = e.changedTouches[0].clientX - startX;
                if (Math.abs(dx) < 40) return;
                goManual(+car.dataset.index + (dx < 0 ? 1 : -1));
            }, { passive: true });
        });

        modalBody.querySelectorAll('.modal-item img').forEach(img => {
            if (img.complete) return;
            img.addEventListener('load', () => recalculateModalLayout());
            img.addEventListener('error', () => recalculateModalLayout());
        });

        // 点击标题：平滑滚回顶部
        const modalTitle = modalBody.querySelector('.modal-topbar .modal-title');
        const scrollBox = document.querySelector('.modal-content');
        if (modalTitle && scrollBox) {
            modalTitle.style.cursor = 'pointer';
            modalTitle.style.pointerEvents = 'auto';   // topbar 是 pointer-events:none，标题要单独开
            modalTitle.addEventListener('click', () => {
                scrollBox.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }


        const modalContent = document.querySelector('.modal-content');
if (modalContent) {
    modalContent.onscroll = () => {
        if (modalContent.scrollTop > 100) {
            modalContent.classList.add('expanded');
        } else {
            modalContent.classList.remove('expanded');
        }
    };
}

        // 把 CLOSE 按钮移进吸顶条，和标题同一行一起反相
        const topbar = modalBody.querySelector('.modal-topbar');
        if (topbar && closeBtn) topbar.appendChild(closeBtn);

        // RELATED 点击：在当前弹窗内切换到新项目
        modalBody.querySelectorAll('.related-item').forEach(el => {
            el.addEventListener('click', () => {
                const id = el.getAttribute('data-related-id');
                const target = projectsData.find(p => p.id === id);
                if (target) {
                    modalBody.scrollTop = 0;
                    openModal(target);
                }
            });
        });

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        history.replaceState(null, '', `?id=${project.id}`);

       const recalculateModalLayout = () => {
            const grid = document.querySelector('.modal-waterfall-container');
            if (!grid) return;

            const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')) || 1;
            const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('row-gap')) || 0;
            const toSpan = (px) => Math.ceil((px + rowGap) / (rowHeight + rowGap));

            const items = Array.from(document.querySelectorAll('.modal-item'));

            // 第一步：先给所有"非文字"块（图片/视频）按自身高度算行数
            items.forEach(item => {
                if (item.classList.contains('project-text-block')) return; // 文字块稍后处理
                const h = item.scrollHeight;
                if (h === 0) return;
                item.style.gridRowEnd = "span " + toSpan(h);
            });

            // 第二步：文字块对齐到"同一视觉行里最高的图片"高度
            items.forEach(item => {
                if (!item.classList.contains('project-text-block')) return;

                const myTop = item.offsetTop;
                let rowMax = 0;
                items.forEach(other => {
                    if (other === item) return;
                    if (other.classList.contains('project-text-block')) return;
                    if (Math.abs(other.offsetTop - myTop) < 50) {
                        rowMax = Math.max(rowMax, other.offsetHeight);
                    }
                });

                if (rowMax > 0) {
                    item.style.gridRowEnd = "span " + toSpan(rowMax);
                } else {
                    item.style.gridRowEnd = "span " + toSpan(item.scrollHeight + 50);
                }
            });

            // 第三步：带 matchRow 的图片块，对齐到同一行最高格子的底边
            items.forEach(item => {
                if (!item.getAttribute('data-match-row')) return;

                const myTop = item.offsetTop;
                const myBottom = myTop + item.offsetHeight;
                let maxBottom = 0;
                items.forEach(other => {
                    if (other === item) return;
                    const oTop = other.offsetTop;
                    const oBottom = oTop + other.offsetHeight;
                    // 视觉上有纵向重叠 = 同一行
                    if (oTop < myBottom && oBottom > myTop) {
                        maxBottom = Math.max(maxBottom, oBottom);
                    }
                });

                if (maxBottom > myTop) {
                    item.style.gridRowEnd = "span " + toSpan(maxBottom - myTop);
                }
            });
        };

        setTimeout(recalculateModalLayout, 50);
        setTimeout(recalculateModalLayout, 300);
        setTimeout(recalculateModalLayout, 1000);
        setTimeout(() => initFlipbooks(modalBody), 200);

        // 🌟 修复 2（绝杀）：监听浏览器字体加载，等自定义字体全部渲染完后，再算最后一次！
        if (document.fonts) {
            document.fonts.ready.then(() => {
                // 加 100ms 延迟确保浏览器已经完成了重绘
                setTimeout(recalculateModalLayout, 100);
            });
        }
    }

     // 翻书

function initFlipbooks(scope) {
        if (typeof St === 'undefined') return;
        const books = scope.querySelectorAll('[data-flipbook]');
        books.forEach(el => {
            if (el.dataset.fbInit) return;
            el.dataset.fbInit = '1';

            let pages = [];
            try { pages = JSON.parse(el.dataset.pages || '[]'); } catch (e) {}
            if (!pages.length) return;

            const pageFlip = new St.PageFlip(el, {
                width: 400, height: 533,
                size: 'stretch',
                minWidth: 250, maxWidth: 600,
                minHeight: 333, maxHeight: 800,
                showCover: false,
                usePortrait: window.innerWidth <= 768,   // 手机单页，桌面双页
                flippingTime: 1000,
                drawShadow: true,
                maxShadowOpacity: 0.6,
                mobileScrollSupport: true
            });
            pageFlip.loadFromImages(pages);   // 图片模式：canvas 渲染，软页卷曲

            const wrap = el.closest('.flipbook-wrap');
            if (wrap) {
                const prev = wrap.querySelector('.fb-prev');
                const next = wrap.querySelector('.fb-next');
                if (prev) prev.addEventListener('click', () => pageFlip.flipPrev());
                if (next) next.addEventListener('click', () => pageFlip.flipNext());
            }
        });
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

        // 第一步：所有格子先按自身高度正常算（保持现有瀑布流）
        for (let x = 0; x < allItems.length; x++) {
            if (getComputedStyle(allItems[x]).display !== 'none') resizeGridItem(allItems[x]);
        }

        // 第二步：带 data-match-row 的矮图，拉到同一行最高格子的高度
        const grid = document.getElementsByClassName("waterfall-container")[0];
        if (!grid) return;
        const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

        const items = Array.from(allItems).filter(it => getComputedStyle(it).display !== 'none');
        items.forEach(item => {
            if (!item.getAttribute('data-match-row')) return;

            const myTop = item.offsetTop;
            let rowMax = 0;
            items.forEach(other => {
                if (other === item) return;
                if (Math.abs(other.offsetTop - myTop) < 50) {  // 顶部差 50px 内算同一行
                    rowMax = Math.max(rowMax, other.offsetHeight);
                }
            });

            if (rowMax > 0) {
                item.style.gridRowEnd = "span " + Math.ceil(rowMax / rowHeight);
            }
        });
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

    function initVimeoSound(root = document) {
        if (typeof Vimeo === 'undefined') return; // SDK 没加载就跳过
        const frames = root.querySelectorAll('iframe[data-vimeo-sound="1"]:not([data-sound-init])');
        frames.forEach(frame => {
            frame.setAttribute('data-sound-init', '1');
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
    setTimeout(initVimeoSound, 2000);

    window.addEventListener("resize", debounce(resizeAllGridItems, 100));
});