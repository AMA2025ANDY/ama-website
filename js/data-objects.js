// Objects (物体/家具) — 对应 filter=objects
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

const dataObjects = [
    // ============================================
    // 4. Objects (物体/家具)
    // ============================================
    {
        id: "obj-01-polizzi-handle",
        title: "Polizzi Handle",
        category: "objects", // 🔴 对应 filter=objects
        year: "2010",
        type: "image", filename: "main.webp", layout: "center",
        content: [
            { type: "text-file", src: "desc01.txt", title: " ", bold: true, layout: "full" }, 
            { type: 'model3d', layout: 'wide', src: 'obj-01-polizzi-handle.glb' },
            { type: "image", src: "01.webp", layout: "narrow" },
            { type: "image", src: "blank.webp", layout: "half" },
            { type: "image", src: "02.webp", layout: "narrow" },
            { type: "image", src: "03.webp", layout: "narrow" },
            { type: 'model3d', layout: 'wide', src: 'obj-01-polizzi-handle-01.glb' },
            { type: "image", src: "main.webp", layout: "half" },
            
           
        ]
    },


     {
        id: "obj-13-milkstool",
        title: "Milk Stool",
        category: "objects",
        year: "2011",
        type: "image", filename: "main.webp", layout: "full",
        content: [
            { type: "image", src: "01.webp", layout: "half" },
            { type: "image", src: "02.webp", layout: "half" },
            { type: "image", src: "03.webp", layout: "center" },
            
        ]
    },





    {
        id: "obj-05-BicycleforThonet",
        title: "Bicycle for Thonet",
        category: "objects",
        year: "2012",
        type: "image", filename: "main.webp", layout: "wide",
        content: [
            { type: "text-file", src: "desc01.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "01.webp", layout: "half" },
            { type: "image", src: "02.webp", layout: "half" },
            { type: "image", src: "05.webp", layout: "half" },
            { type: "text-file", src: "desc02.txt", title: "Tectonic Translation and CNC Precision", layout: "half" },
            { type: "image", src: "03.webp", layout: "full" },
            { type: "text-file", src: "desc03.txt", title: "Minimalist Anatomy and Fixed-Gear Logic", layout: "full" },
            
        ]
    },


      {
        id: "obj-04-gumpy-loafer",
        title: "Gumpy Loafer",
        category: "objects", // 🔴 对应 filter=objects
        year: "1990",
        type: "image", filename: "1.webp", layout: "narrow",
        content: [
            // { type: "text-file", src: "desc01.txt", title: " ", layout: "wide" }, 
            { type: "image", src: "1.webp", layout: "half" },
            { type: "image", src: "2.webp", layout: "half" },
        ]
    },

    {
        id: "obj-06-chottocoffeetable",
        title: "Chotto Matte Coffee Table",
        category: "objects",
        year: "2014",
        type: "image", filename: "main.webp", layout: "wide",
        content: [
            
            { type: "image", src: "01.webp", layout: "half" },
            { type: "image", src: "02.webp", layout: "half", matchRow: true },
            { type: "image", src: "04.webp", layout: "center"},
            { type: "image", src: "05.webp", layout: "half" },
            { type: "image", src: "main.webp", layout: "full" },
            
        ]
    },

        {
        id: "obj-07-dizzysidetable",
        title: "Dizzy Side Table",
        category: "objects",
        year: "2011",
        type: "image", filename: "main.webp", layout: "narrow",
        content: [
            { type: "image", src: "main.webp", layout: "full" },
            
        ]
    },

     {
        id: "obj-08-glassblowing",
        title: "Glass Blowing",
        category: "objects",
        year: "2011",
        type: "image", filename: "main.webp", layout: "narrow",
        content: [
            { type: "image", src: "01.webp", layout: "half" },
            { type: "image", src: "04.webp", layout: "narrow" },
            { type: "image", src: "02.webp", layout: "wide" },
            { type: "image", src: "03.webp", layout: "narrow" },
            { type: "image", src: "05.webp", layout: "center" },
            
        ]
    },



     {
        id: "obj-09-gontable",
        title: "Gon Table",
        category: "objects",
        year: "2009",
        type: "image", filename: "main.webp", layout: "narrow",
        content: [
            { type: "image", src: "main.webp", layout: "full" },
            { type: "image", src: "01.webp", layout: "narrow" },
            { type: "image", src: "02.webp", layout: "center" },
            
        ]
    },


      {
        id: "obj-10-herefordroadlamp",
        title: "Hereford Road Lamp",
        category: "objects",
        year: "2012",
        type: "image", filename: "main.webp", layout: "full",
        content: [
            { type: "image", src: "main.webp", layout: "full" },
            { type: "image", src: "01.webp", layout: "narrow" },
            { type: "image", src: "02.webp", layout: "full" },
            
        ]
    },

    {
        id: "obj-11-isolalamp",
        title: "Isola Lamp",
        category: "objects",
        year: "2011",
        type: "image", filename: "main.webp", layout: "narrow",
        content: [
            { type: "image", src: "main.webp", layout: "full" },
            { type: "image", src: "01.webp", layout: "narrow" },
            { type: "image", src: "02.webp", layout: "full" },
            
        ]
    },


   


    {
        id: "obj-12-maxitable",
        title: "Mazi Table",
        category: "objects",
        year: "2011",
        type: "image", filename: "01.webp", layout: "narrow",
        content: [
            { type: "image", src: "01.webp", layout: "full" },
            { type: "image", src: "main.webp", layout: "full" },
            
            
        ]
    },



     {
        id: "obj-16-brickrange-Weinerchaise",
        title: "Brick Range Weinerchaise",
        category: "objects",
        year: "2009",
        type: "video",
        provider: "vimeo",
        filename: "1200396748", 
        sound: false, 
        layout: "narrow",
        content: [
            { type: "image", src: "01.webp", layout: "full" },
            { type: "image", src: "main.webp", layout: "full" },
            { type: "video", provider: "vimeo", filename: "1200400544", layout: "narrow" },
            { type: "image", src: "03.webp", layout: "narrow" },
            { type: "image", src: "02.webp", layout: "full" },
            
            { type: "image", src: "04.webp", layout: "wide" },
            { type: "image", src: "06.webp", layout: "narrow" },
            { type: "image", src: "08.webp", layout: "full" },
            
            
        ]
    },



     {
        id: "obj-14-paperrange-diningchair",
        title: "Paper Range Dining Chair",
        category: "objects",
        year: "2013",
        type: "image", filename: "main.webp", layout: "full",
        content: [
            { type: "image", src: "01.webp", layout: "full" },
            { type: "image", src: "main.webp", layout: "full" },
            { type: "image", src: "02.webp", layout: "full" },
            { type: "image", src: "03.webp", layout: "full" },
            
        ]
    },




{
        id: "obj-15-block",
        title: "Block",
        category: "objects",
        year: "2014",
        type: "video",
        provider: "vimeo",
        filename: "1200380189", 
        sound: false, 
        layout: "half",
        content: [

            { type: "text-file", src: "desc01.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "01.webp", layout: "full" },
            { type: "video", provider: "vimeo", filename: "1200382616", layout: "narrow" },
            { type: "image", src: "02.webp", layout: "narrow" },
            { type: "image", src: "08.webp", layout: "half" },
            { type: "video", provider: "vimeo", filename: "1200382632", layout: "narrow" },
            { type: "image", src: "04.webp", layout: "half" },
            { type: "image", src: "05.webp", layout: "narrow" },
            { type: "video", provider: "vimeo", filename: "1200382573", layout: "narrow" },
            { type: "image", src: "10.webp", layout: "full" },
            { type: "video", provider: "vimeo", filename: "1200382534", layout: "narrow" },
            { type: "image", src: "07.webp", layout: "center" },
            { type: "video", provider: "vimeo", filename: "1200382556", layout: "narrow" },
            { type: "video", provider: "vimeo", filename: "1200382625", layout: "narrow" },
            { type: "video", provider: "vimeo", filename: "1200382661", layout: "narrow" },         
            
        ]
    },


];
