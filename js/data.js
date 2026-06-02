// =====================================================================
// 素材 CDN 配置 (jsDelivr)
// ---------------------------------------------------------------------
// 本地预览时:留空字符串 ""  -> 走相对路径 assets/...
// 上线时:填 jsDelivr 前缀   -> 全站素材走 CDN
// 格式: https://cdn.jsdelivr.net/gh/用户名/仓库名@分支
// 改了仓库名/分支只动这一行即可。
const ASSET_BASE = "https://cdn.jsdelivr.net/gh/AMA2025ANDY/ama-website@main";
// 本地调试时改成: const ASSET_BASE = "";
// =====================================================================

const projectsData = [

     // 14-twisted-house
    {
        id: "14-twisted-house", 
        title: "Twisted House",
        category: "residential",
        year: "2024",
        location: "London",
        type: "image",
        filename: "3.webp",
        layout: "half",
        content: [
            // { type: "text-file", src: "desc01.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "2.webp", layout: "full" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "4.webp", layout: "half" },
            { type: "image", src: "1.webp", layout: "full" },
            { type: "image", src: "5.webp", layout: "half" },
            { type: "image", src: "6.webp", layout: "half" },
            { type: "image", src: "7.webp", layout: "full" },
            { type: "image", src: "8.webp", layout: "half" },
            { type: "image", src: "9.webp", layout: "half" },
            { type: "image", src: "10.webp", layout: "full" },
            { type: "image", src: "11.webp", layout: "full" },
        ]
    },

 // 15-cm-soho
    {
        id: "15-cm-soho", 
        title: "Chotto Matte Soho",
        category: "commercial",
        year: "2022",
        location: "Soho, London",
        type: "image",
        filename: "3.webp",
        layout: "half",
        content: [
            // { type: "text-file", src: "desc01.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "2.webp", layout: "center" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "4.webp", layout: "half" },
            { type: "image", src: "1.webp", layout: "center" },
            { type: "image", src: "5.webp", layout: "half" },
            { type: "image", src: "6.webp", layout: "half" },
            { type: "image", src: "7.webp", layout: "full" },
            { type: "image", src: "8.webp", layout: "half" },
            { type: "image", src: "9.webp", layout: "half" },
        ]
    },



    // 22-zevaco
    {
        id: "22-zevaco", 
        title: "Zevaco",
        category: "commercial",
        year: "2013",
        location: " ",
        type: "image",
        filename: "2.webp",
        layout: "narrow",
        content: [
            // { type: "text-file", src: "desc01.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "1.webp", layout: "center" },
            { type: "image", src: "2.webp", layout: "half" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "4.webp", layout: "half" },
            { type: "video", provider: "vimeo", filename: "1151545677", layout: "narrow"},
            { type: "image", src: "5.webp", layout: "half" },
            { type: "image", src: "6.webp", layout: "half" },
            { type: "image", src: "7.webp", layout: "half" },
            
    
        ]
    },




    //  01-cm-mia
    {
        id: "01-cm-mia", // 🔴 文件夹名
        title: "Chotto Matte Miami",
        category: "commercial", 
        year: "2019",
        location: "Miami",
        type: "image",
        filename: "main.webp", 
        layout: "half", 
        content: [
            { type: "text-file", src: "desc.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "1.webp", layout: "full" },
            { type: "image", src: "5.webp", layout: "center" },
            { type: "image", src: "4.webp", layout: "wide" },
            { type: "image", src: "2.webp", layout: "half" },
            { type: "image", src: "7.webp", layout: "half" },
            { type: "text", title: " ", text: " ", layout: "half" },
            { type: "image", src: "3.webp", layout: "full" },         
        ]
    }, 

    // 16-cm-toronto
    {
        id: "16-cm-toronto", 
        title: "Chotto Matte Toronto",
        category: "commercial",
        year: "2018",
        location: "Toronto, Canada",
        type: "video",
        provider: "vimeo",
        filename: "1150994217", 
        layout: "half",
        content: [
            // { type: "text-file", src: "desc01.txt", title: "Award", layout: "full" }, 
            { type: "image", src: "1.webp", layout: "full" },
            // { type: "text-file", src: "desc02.txt", title: "Concept", layout: "full" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "4.webp", layout: "half" },
            { type: "image", src: "5.webp", layout: "half" },
            { type: "image", src: "7.webp", layout: "full" },
            { type: "image", src: "8.webp", layout: "full" },
            { type: "image", src: "9.webp", layout: "full" },
            { type: "image", src: "14.webp", layout: "half" },
            { type: "image", src: "15.webp", layout: "half" },
            { type: "image", src: "16.webp", layout: "half" },
            { type: "image", src: "13.webp", layout: "half" },
            { type: "image", src: "10.webp", layout: "half" },
            { type: "image", src: "11.webp", layout: "half" },
            { type: "image", src: "12.webp", layout: "full" },

        ]
    },

    // 03-perfhouse
    {
        id: "03-perfhouse", 
        title: "Perf House",
        category: "residential",
        year: "2022",
        location: "London",
        type: "image",
        filename: "main.webp",
        layout: "half",
        content: [
            { type: "text-file", src: "desc01.txt", title: "Concept", layout: "full" },
            { type: "image", src: "1.webp", layout: "full" },
            { type: "image", src: "2.webp", layout: "half" },
            { type: "text", title: " ", text: " ", layout: "half" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "text-file", src: "desc02.txt", title: " ", layout: "half" },  
            { type: "image", src: "main.webp", layout: "center" },
        ]
    },

    // 02-beachhouse
    {
        id: "02-beachhouse",
        title: "Beach House",
        category: "residential",
        year: "2018",
        location: "London",
        type: "video",
        provider: "vimeo",
        filename: "1150424478",
        layout: "narrow",
        content: [
            { type: "video", provider: "vimeo", src: "1150428757", layout: "full" },
            { type: "text", title: " ", text: " ", layout: "full" },
            { type: "text-file", src: "desc.txt", title: "Concept", layout: "wide" },
            { type: "image", src: "1.webp", layout: "wide" },
            { type: "image", src: "2.webp", layout: "half" },
            { type: "text", title: " ", text: " ", layout: "half" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "5.webp", layout: "center" },
            { type: "image", src: "6.webp", layout: "wide" },
            { type: "text", title: " ", text: " ", layout: "half" },
            { type: "image", src: "7.webp", layout: "half" },
            { type: "image", src: "8.webp", layout: "center" },
            
        ]
    },

    

// 04-mash02
    {
        id: "04-mash02", 
        title: "Mash02",
        category: "commercial",
        year: "2024",
        location: "Great Portland Street, London",
        type: "image",
        filename: "main.webp",
        layout: "half",
        content: [
            { type: "text-file", src: "desc01.txt", title: "Concept", layout: "full" },
            { type: "image", src: "1.webp", layout: "wide" },
            { type: "image", src: "2.webp", layout: "narrow" },
            { type: "image", src: "3.webp", layout: "narrow" },
            { type: "text-file", src: "desc02.txt", title: " ", layout: "full" },  
            { type: "image", src: "main.webp", layout: "full" },
            { type: "text-file", src: "desc03.txt", title: " ", layout: "full" },
        ]
    },

// 05-mews01
    {
        id: "05-mews01", 
        title: "Mews01",
        category: "residential",
        year: "2018",
        location: "Holland Park, London",
        type: "image",
        filename: "main.webp",
        layout: "half",
        content: [
            { type: "text-file", src: "desc01.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "1.webp", layout: "wide" },
            { type: "text", title: " ", text: " ", layout: "half" },
            { type: "image", src: "2.webp", layout: "half" },
            { type: "image", src: "3.webp", layout: "narrow" },
            { type: "image", src: "main.webp", layout: "full" },
        ]
    },

// 06-fucina
    {
        id: "06-fucina", 
        title: "Fucina",
        category: "commercial",
        year: "2018",
        location: "London",
        type: "video",
        provider: "vimeo",
        filename: "1150455394", 
        layout: "narrow",
        content: [
            { type: "text-file", src: "desc01.txt", title: "Award", layout: "full" }, 
            { type: "image", src: "1.webp", layout: "full" },
            { type: "text-file", src: "desc02.txt", title: "Concept", layout: "full" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "2.webp", layout: "half" },
            { type: "text-file", src: "desc03.txt", title: " ", layout: "half" },
            { type: "image", src: "4.webp", layout: "center" },
        ]
    },

// 07-richard-james
    {
        id: "07-richard-james", 
        title: "Richard James",
        category: "commercial",
        year: "2014",
        location: "London",
        type: "image",
        filename: "main.webp",
        layout: "wide",
        content: [
            { type: "text-file", src: "desc01.txt", title: "Award", layout: "full" }, 
            { type: "text-file", src: "desc02.txt", title: "Concept", layout: "full" },
            { type: "image", src: "1.webp", layout: "wide" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "2.webp", layout: "half" },
        ]
    },

// 08-mews02
    {
        id: "08-mews02", 
        title: "Mews 02",
        category: "residential",
        year: "2014",
        location: "Belsize Park, London",
        type: "image",
        filename: "1.webp",
        layout: "center",
        content: [
            { type: "text-file", src: "desc.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "1.webp", layout: "wide" },
            { type: "image", src: "2.webp", layout: "center" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "4.webp", layout: "half" },
            { type: "image", src: "5.webp", layout: "center" },
        ]
    },

// 09-mews03
    {
        id: "09-mews03", 
        title: "Mews 03",
        category: "residential",
        year: "2014",
        location: "Notting Hill Gate, London",
        type: "image",
        filename: "1.webp",
        layout: "half",
        content: [
            { type: "text-file", src: "desc.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "1.webp", layout: "wide" },
            { type: "image", src: "2.webp", layout: "center" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "4.webp", layout: "half" },
            { type: "image", src: "5.webp", layout: "center" },
        ]
    },

    // 11-chan
    {
        id: "11-chan", 
        title: "Chan",
        category: "commercial",
        year: "2017",
        location: "Thessaloniki, Greece",
        type: "image",
        filename: "5.webp",
        layout: "half",
        content: [
            { type: "text-file", src: "desc01.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "1.webp", layout: "full" },
            { type: "image", src: "2.webp", layout: "full" },
            { type: "image", src: "3.webp", layout: "full" },
            { type: "text-file", src: "desc02.txt", title: " ", layout: "full" },
            { type: "image", src: "4.webp", layout: "full" },
            { type: "image", src: "6.webp", layout: "full" },
            
        ]
    },

// 10-mews04
    {
        id: "10-mews04", 
        title: "Mews 04",
        category: "residential",
        year: "2014",
        location: "Notting Hill Gate, London",
        type: "image",
        filename: "1.webp",
        layout: "half",
        content: [
            { type: "text-file", src: "desc.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "1.webp", layout: "full" },
            { type: "image", src: "2.webp", layout: "full" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "4.webp", layout: "half" },
            { type: "image", src: "5.webp", layout: "center" },
        ]
    },



// 12-cm-london
    {
        id: "12-cm-london", 
        title: "Chotto Matte London",
        category: "commercial",
        year: "2017",
        location: "London",
        type: "image",
        filename: "1.webp",
        layout: "half",
        content: [
            { type: "text-file", src: "desc01.txt", title: "Concept", layout: "wide" }, 
            { type: "image", src: "2.webp", layout: "narrow" },
            { type: "image", src: "3.webp", layout: "full" },
            { type: "image", src: "4.webp", layout: "full" },
            { type: "image", src: "5.webp", layout: "full" },
            
        ]
    },

// 13-the-admiralty
    {
        id: "13-the-admiralty", 
        title: "The Admiralty",
        category: "commercial",
        year: "2017",
        location: "Somerset House, The Strand, London",
        type: "image",
        filename: "5.webp",
        layout: "narrow",
        content: [
            { type: "text-file", src: "desc01.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "4.webp", layout: "full" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "1.webp", layout: "full" },            
        ]
    },

   
    // 17-Barrafina-cdy
    {
        id: "17-Barrafina-cdy", 
        title: "Barrafina CDY",
        category: "commercial",
        year: "2017",
        location: "CDY",
        type: "image",
        filename: "1.webp",
        layout: "narrow",
        content: [
            // { type: "text-file", src: "desc01.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "2.webp", layout: "full" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "4.webp", layout: "half" },
            { type: "image", src: "5.webp", layout: "full" },
            { type: "image", src: "6.webp", layout: "full" },              
        ]
    },


// 19-claude
    {
        id: "19-claude", 
        title: "Claude's",
        category: "commercial",
        year: "2020",
        location: "Claude",
        type: "video",
        provider: "vimeo",
        filename: "1151037623",
        layout: "narrow",
        content: [
            // { type: "text-file", src: "desc01.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "2.webp", layout: "half" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "5.webp", layout: "full" },    
            { type: "image", src: "4.webp", layout: "full" },
                 
        ]
    },

    // 18-cm-riyadh
    {
        id: "18-cm-riyadh", 
        title: "Chotto Matte Riyadh",
        category: "commercial",
        year: "2025",
        location: "Riyadh",
        type: "video",
        provider: "vimeo",
        filename: "1151028578",
        layout: "narrow",
        content: [
            // { type: "text-file", src: "desc01.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "2.webp", layout: "half" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "5.webp", layout: "center" },    
            { type: "image", src: "4.webp", layout: "full" },
                 
        ]
    },

    
// 20-timandsue-residence
    {
        id: "20-timandsue-residence", 
        title: "Tim and Sue's Residence",
        category: "residential",
        year: "2000",
        location: " ",
        type: "image",
        filename: "1.webp",
        layout: "half",
        content: [
            // { type: "text-file", src: "desc01.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "1.webp", layout: "full" },
            { type: "image", src: "2.webp", layout: "full" },
        ]
    },

// 21-ugly-house
    {
        id: "21-ugly-house", 
        title: "Ugly House",
        category: "residential",
        year: "2000",
        location: "London",
        type: "image",
        filename: "1.webp",
        layout: "wide",
        content: [
            // { type: "text-file", src: "desc01.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "2.webp", layout: "half" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "1.webp", layout: "full" },
            { type: "image", src: "4.webp", layout: "wide" },
            { type: "image", src: "5.webp", layout: "center" },
        ]
    },






    // ============================================
    // 4. Objects (物体/家具)
    // ============================================
    {
        id: "obj-01-polizzi-handle",
        title: "Polizzi Handle",
        category: "objects", // 🔴 对应 filter=objects
        year: "2010",
        type: "image", filename: "main.webp", layout: "narrow",
        content: [
            { type: "text-file", src: "desc01.txt", title: " ", layout: "wide" }, 
            { type: "image", src: "main.webp", layout: "half" },
            { type: "image", src: "2.webp", layout: "half" },
        ]
    },

    {
        id: "obj-02-andy",
        title: "Andy",
        category: "objects", // 🔴 对应 filter=objects
        year: "1967",
        type: "image", filename: "3.webp", layout: "half",
        content: [
            // { type: "text-file", src: "desc01.txt", title: " ", layout: "wide" }, 
            { type: "image", src: "2.webp", layout: "full" },
            { type: "image", src: "4.webp", layout: "full" },
            { type: "image", src: "5.webp", layout: "full" },
            { type: "image", src: "6.webp", layout: "full" },
        ]
    },

    {
        id: "obj-03-747ceilinglight",
        title: "747 Ceiling Light",
        category: "objects", // 🔴 对应 filter=objects
        year: "1985",
        type: "image", filename: "1.webp", layout: "center",
        content: [
            // { type: "text-file", src: "desc01.txt", title: " ", layout: "wide" }, 
            { type: "image", src: "1.webp", layout: "full" },
        ]
    },


      {
        id: "obj-04-gumpy-loafer",
        title: "Gumpy Loafer",
        category: "objects", // 🔴 对应 filter=objects
        year: "1990",
        type: "image", filename: "2.webp", layout: "narrow",
        content: [
            // { type: "text-file", src: "desc01.txt", title: " ", layout: "wide" }, 
            { type: "image", src: "1.webp", layout: "half" },
            { type: "image", src: "2.webp", layout: "half" },
        ]
    },


    // ============================================
    // 5. Resources (资源/材质)
    // ============================================
    {
        id: "res-01-residential-tower",
        title: "Residential Tower",
        category: "resources", // 🔴 filter=resources
        year: "Ongoing",
        type: "image", filename: "1.webp", layout: "half", 
        content: [
            { type: "text-file", src: "desc.txt", title: "Concept", layout: "wide" }, 
            { type: "image", src: "1.webp", layout: "full" },
            { type: "image", src: "2.webp", layout: "wide" },
        ]
    },


    // ============================================
    // 6. Editorial (社论/访谈)
    // ============================================
    // 注意:这条的 vimeo ID 还是空的,填上真实 ID 后再取消注释启用。
    // {
    //     id: "edit-01",
    //     title: "Future of Living",
    //     category: "editorial",
    //     year: "2024",
    //     type: "video", provider: "vimeo", filename: "你的VimeoID", layout: "narrow", 
    //     content: [{ type: "video", provider: "vimeo", src: "你的VimeoID", layout: "full" }]
    // }
];