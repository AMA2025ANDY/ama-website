// Resources (资源/材质) — 对应 filter=resources
// =================================================================
//
//  ▌一个项目长这样:
//  {
//      id:       "文件夹名",        // 必须和 assets/projects/ 里的文件夹名一字不差
//      title:    "显示的项目名",
//      category: "residential",     // 决定分类筛选,只能填:
//                                   //   residential / commercial / objects / resources / editorial
//      year:     "2024",
//      location: "London",          // 可留空 " "
//      type:     "image",           // 首页封面用图还是视频: "image" 或 "video"
//      filename: "3.webp",          // 首页封面文件名 (图写 xx.webp;若 type是video则写 vimeo ID)
//      layout:   "half",            // 首页封面占多宽: full/wide/half/narrow/center
//      content: [ ... ]             // 点进去后显示的内容
//  },
//
//  ▌content 数组每行一个元素:
//    图片:   { type: "image", src: "1.webp", layout: "full" },
//    视频:   { type: "video", provider: "vimeo", src: "数字ID", layout: "full" },
//            ↑ content里的视频一律用 src,不要用 filename
//    文字档: { type: "text-file", src: "desc.txt", title: "Concept", layout: "full" },
//    空行:   { type: "text", title: " ", text: " ", layout: "half" },
//
//  ▌最容易写错: 每行 { } 结尾要有逗号;文字用英文双引号 "" 不能用中文引号 “”
// =====================================================================

const dataResources = [
    // ============================================
    // 5. Resources (资源/材质)
    // ============================================
    {
        id: "res-01-residential-tower",
        title: "Residential Tower",
        category: "resources", // 🔴 filter=resources
        year: "Ongoing",
        type: "image", filename: "1.webp", layout: "center", 
        content: [
            { type: "text-file", src: "desc.txt", title: "Concept", layout: "wide" }, 
            { type: "image", src: "1.webp", layout: "full" },
            { type: "image", src: "2.webp", layout: "wide" },
        ]
    },

];
