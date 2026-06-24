// 建筑项目 (residential + commercial) — 首页瀑布流顺序就是这里的顺序
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

const dataProjects = [
    


  



    //  23-mews05
    {
        id: "23-mews05", 
        title: "Mews 05",
        category: "residential", 
        year: "2025",
        location: "Central London",
        type: "image",
        filename: "main.webp", 
        layout: "wide", 
        content: [
            { type: "text-file", src: "desc.txt", title: " ", bold: true, layout: "full" },

            { type: "image", src: '03.webp', cursor: 'cursor 2.png', },
            { type: "image", src: "02.webp", layout: "narrow",  cursor: 'cursor 2.png', matchRow: true},
            { type: "video", provider: "vimeo", src: "1201433966", layout: "narrow", matchRow: true},
            { type: "image", src: "001.webp", layout: "wide"},
            { type: "text-file", src: "desc01.txt", title: "Circulation as a Tactile Ribbon", layout: "narrow", matchRow: true  }, 
            { type: 'depth3d', src: '04.webp', depth: '04depth.webp', strength: 20, sway: 25 },
            { type: 'carousel', layout: "half", images: ['014.webp', '015.webp','016.webp']},
            { type: "image", src: "blank.webp", layout: "narrow" },
            { type: "text-file", src: "desc02.txt", title: "Material Tension and Geological Interventions", layout: "half", matchRow: true },
            { type: "image", src: "blank.webp", layout: "narrow" },
            { type: "image", src: "002.webp", layout: "narrow", cursor: 'cursor.png' },   
            { type: "image", src: "07.webp", layout: "full", cursor: 'cursor 3.png', },
            { type: 'carousel', layout: 'wide', images: ['05.webp', '05b.webp']},
            { type: "image", src: "blank.webp", layout: "narrow" },
            { type: "image", src: "blank.webp", layout: "narrow" },
            { type: "video", provider: "vimeo", src: "1201428083", sound: true, layout: "narrow"},
            { type: 'carousel', layout: 'wide', images: ['08.webp', '011.webp','012.webp']},
            { type: 'carousel', layout: 'full', images: ['010.webp', '06.webp', '013.webp']},
            
        ]
    },


    // 14-twisted-house
    {
        id: "14-twisted-house", 
        title: "Twisted House",
        category: "residential",
        year: "2024",
        location: "London",
        type: "video",
        provider: "vimeo",
        filename: "1198402727", 
        sound: true, 
        layout: "narrow",
        content: [
            { type: "text-file", src: "desc01.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "2.webp", layout: "full" },
            { type: "text-file", src: "desc02.txt", title: "Form and Material", layout: "half", matchRow: true  },
            { type: "image", src: "0012.webp", layout: "narrow"},
            { type: 'carousel', layout: 'wide', images: ['08.webp', '09.webp']},
            { type: "image", src: "site plan.webp", layout: "narrow", matchRow: true},
            { type: "image", src: "007.webp", layout: "wide"},
            { type: "video", provider: "vimeo", src: "1201368943", sound: true,layout: "narrow"},
            { type: "text-file", src: "desc03.txt", title: "Plan and Circulation", layout: "half"},
            { type: "image", src: "04.webp", layout: "full" },
            { type: "video", provider: "vimeo", src: "1201369015", sound: true, layout: "narrow"},
            { type: "image", src: "011.webp", layout: "narrow" },
            { type: "text-file", src: "desc05.txt", title: "Sustainability", layout: "narrow", matchRow: true },
            { type: 'carousel', layout: 'narrow', images: ['7.webp', '5.webp', '8.webp', '6.webp', '16.webp', '17.webp']},
            { type: "text-file", src: "desc04.txt", title: "Bedroom and Interior", layout: "narrow"},
            { type: "image", src: "ground floor.webp", layout: "narrow"}, 
            { type: "image", src: "9.webp", layout: "narrow"}, 
            { type: "image", src: "13.webp", layout: "narrow"},
            { type: "image", src: "14.webp", layout: "wide"},
            { type: "image", src: "18.webp", layout: "narrow"},
            { type: "image", src: "0013.webp", layout: "narrow"},  
            { type: "image", src: "15.webp", layout: "full"},    
            
     
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
        layout: "center",
        content: [
            { type: "text-file", src: "desc01.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "1.webp", layout: "full", cursor: 'cursor.png' },
            { type: "image", src: "06.webp", layout: "narrow", cursor: 'cursor.png' },
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true},
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true},
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true},
            { type: "image", src: "02.webp", layout: "wide", cursor: 'cursor.png' },
            
            { type: "video", provider: "vimeo", src: "1202137527", sound: true, layout: "narrow"},
            { type: "text-file", src: "The shell and the insertion.txt", title: "The shell and the insertion", layout: "wide", matchRow: true},
            { type: "image", src: "13.webp", layout: "full", cursor: 'cursor.png'},
            { type: 'carousel', layout: 'half', images: ['2.webp', '5.webp', 'main.webp']},
            {type: "text-file", src: "Material palette.txt", title: "Material palette", layout: "half"},
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true},
            { type: "video", provider: "vimeo", src: "1204217679", sound: true,layout: "narrow"},
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true},
            { type: "image", src: "6.webp", layout: "half", cursor: 'cursor.png'},
            { type: "image", src: "blank.webp", layout: "half", matchRow: true},
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true},
            { type: 'depth3d', src: '4.webp', depth: '4depth.webp', strength: 10, sway: 25 },
            { type: "image", src: "7.webp", layout: "half", cursor: 'cursor.png', matchRow: true},
            { type: "image", src: "blank.webp", layout: "narrow"},
            { type: "image", src: "blank.webp", layout: "half", matchRow: true},
            { type: 'carousel', layout: 'half', images: ['9.webp', '10.webp']},
            { type: "image", src: "11.webp", layout: "full", cursor: 'cursor.png'},
            { type: 'floating-video', src: '1204243890' },
        
        ]
    },


   

      //  24-woodhouse-01
    {
        id: "24-woodhouse-01", 
        title: "Wood House 01",
        category: "residential", 
        year: "2025 - Ongoing",
        location: "Central London",
        type: "video",
        provider: "vimeo",
        filename: "1199715714",
        sound:false,
        layout: "full",
        content: [
            { type: "text-file", src: "desc.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "06.webp", layout: "wide" },
            { type: "image", src: "05.webp", layout: "narrow" },
            { type: "image", src: "01.webp", layout: "narrow" },
            { type: "text-file", src: "desc01.txt", title: "Retaining the Facade and Building in CLT", layout: "wide" },
            { type: "image", src: "12.webp", layout: "narrow" },
            { type: "image", src: "14.webp", layout: "narrow", matchRow: true },
            { type: "image", src: "08.webp", layout: "narrow" },
            { type: "image", src: "13.webp", layout: "narrow" },
            { type: "text-file", src: "desc07.txt", title: "Why Aren’t We Living in Timber?", layout: "half"},
            { type: "image", src: "17.webp", layout: "half" },
            { type: "image", src: "16.webp", layout: "half" },
            { type: "text-file", src: "desc02.txt", title: "Ten Days to Frame", layout: "half" },
           
            
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
        filename: "1198070461",
        sound:false,
        layout: "narrow",
        content: [
            { type: "text-file", src: "desc.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "9.webp", layout: "full" },            
            { type: 'carousel', layout: 'half', images: ['2.webp', '5.webp', '11.webp', '12.webp']},
            { type: "text-file", src: "The Staircase.txt", title: "The Staircase", layout: "half", matchRow: true },
            { type: 'carousel', layout: 'half', images: ['10.webp', '3.webp', '8.webp']},
            { type: "text-file", src: "The Upper Levels.txt", title: "The Upper Levels", layout: "half", matchRow: true },            
            { type: "image", src: "poster.webp", layout: "half" },
            { type: 'carousel', layout: 'half', images: ['03.webp', '04.webp']},
            { type: "text-file", src: "The Rear Addition.txt", title: "The Rear Addition", layout: "half" , matchRow: true },
            { type: "image", src: "1.webp", layout: "full" },
            { type: "image", src: "06.webp", layout: "half",},
            { type: "image", src: "6.webp", layout: "half" },
            { type: "image", src: "05.webp", layout: "half", matchRow: true},
            { type: "image", src: "7.webp", layout: "half" },
            { type: "image", src: "14.webp", layout: "full" },            
            { type: "image", src: "13.webp", layout: "full" },
           
            
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
        layout: "narrow",
        content: [
            { type: "text-file", src: "desc.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "1.webp", layout: "full" },
            { type: "image", src: "3.webp", layout: "half", matchRow: true   },
            { type: "image", src: "4.webp", layout: "half" },
            { type: "image", src: "5.webp", layout: "half"},
            { type: "text-file", src: "The Layout & Atmosphere.txt", title: "The Layout & Atmosphere", layout: "half"},
            { type: "image", src: "7.webp", layout: "full" },
            { type: "image", src: "01.webp", layout: "narrow" },
            { type: "text-file", src: "The Sculptural Ribbons.txt", title: "The Sculptural Ribbons", layout: "wide"},
            { type: "image", src: "8.webp", layout: "full" },
            { type: "image", src: "02.webp", layout: "half" },
            { type: "image", src: "9.webp", layout: "full" },
            { type: 'carousel', layout: 'half', images: ['14.webp', '15.webp','16.webp','10.webp']},
            { type: "text-file", src: "Artistic Collaboration & Materiality.txt", title: "Artistic Collaboration & Materiality", layout: "half"},
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true  },  
            { type: "image", src: "03.webp", layout: "narrow", matchRow: true  },       
            { type: "image", src: "11.webp", layout: "wide" },
            { type: "image", src: "13.webp", layout: "half" },
            { type: "image", src: "04.webp", layout: "narrow", matchRow: true  },
            { type: "image", src: "05.webp", layout: "center" },   
            { type: "image", src: "12.webp", layout: "full" },


        ]
    },


    // 04-mash02
    {
        id: "04-mash02", 
        title: "Mash 02",
        category: "commercial",
        year: "1998",
        location: "Great Portland Street, London",
        type: "image",
        filename: "main.webp",
        layout: "center",
        content: [
            { type: "text-file", src: "desc01.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "4.webp", layout: "wide" },
            { type: "image", src: "blank.webp", layout: "narrow" },
            { type: "image", src: "blank.webp", layout: "narrow" },
            { type: "image", src: "01.webp", layout: "narrow",},
            { type: "video", provider: "vimeo", src: "1201805263", sound: true, layout: "narrow"},
            { type: "text-file", src: "The Concept.txt", title: "The Concept", layout: "wide"},
            { type: "image", src: "2.webp", layout: "half", matchRow: true },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "video", provider: "vimeo", src: "1201811858", sound: true, layout: "narrow"},
            { type: "text-file", src: "Detail and Surface.txt", title: "Detail and Surface", layout: "half" },
            { type: 'flipbook', pages: ['mag-00.webp', 'mag-01.webp', 'mag-02.webp'], layout: 'full' },
            { type: "image", src: "main.webp", layout: "wide" },
            { type: "image", src: "07.webp", layout: "narrow", matchRow: true},
            { type: "text-file", src: "The Architecture.txt", title: "The Architecture", layout: "wide", matchRow: true},
            { type: "image", src: "6.webp", layout: "narrow" },
            { type: 'carousel', layout: 'half', images: ['5.webp', '7.webp']},
            { type: "image", src: "blank.webp", layout: "half" },
            { type: "image", src: "8.webp", layout: "half" },
        ]
    },



    // 05-mews01
    {
        id: "05-mews01", 
        title: "Mews 01",
        category: "residential",
        year: "2018",
        location: "Holland Park, London",
        type: "video",
        provider: "vimeo",
        filename: "1199452040",
        sound:true,
        layout: "half",
        content: [
            { type: "text-file", src: "desc01.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "1.webp", layout: "full" },
            { type: "image", src: "01.webp", layout: "narrow" },
            { type: "text-file", src: "Colour and object.txt", title: "Colour and object", layout: "half" },
            { type: "image", src: "2.webp", layout: "wide", cursor: 'cursor.png' },
            { type: 'carousel', layout: 'narrow', images: ['02.webp', '03.webp']},
            { type: "text-file", src: "Texture Mapping.txt", title: "Texture Mapping", layout: "wide", matchRow: true },
            { type: "image", src: "05.webp", layout: "narrow" },
            { type: "image", src: "4.webp", layout: "half" },
            { type: "text-file", src: "The continuous surface.txt", title: "The continuous surface", layout: "half", matchRow: true },
            { type: "text-file", src: "Colour and object.txt", title: "Colour and object", layout: "half", matchRow: true },     
            { type: "image", src: "3.webp", layout: "half" },
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
            { type: "text-file", src: "desc01.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "1.webp", layout: "full" },
            { type: "text-file", src: "The idea.txt", title: "Concept", layout: "half" },
            { type: "image", src: "05.webp", layout: "narrow" },
            { type: 'carousel', layout: 'half', images: ['10.webp', '7.webp', '6.webp', '11.webp']},
            { type: "image", src: "blank.webp", layout: "half", matchRow: true},
            { type: "image", src: "blank.webp", layout: "half", matchRow: true},
            { type: "image", src: "8.webp", layout: "half" },
            { type: "image", src: "15.webp", layout: "half" },
            { type: "image", src: "3.webp", layout: "half" , matchRow: true},
            { type: "text-file", src: "The ceiling.txt", title: "The ceiling", layout: "half" },
            { type: "image", src: "2.webp", layout: "half" },
            { type: "image", src: "9.webp", layout: "full" },
            { type: "image", src: "19.webp", layout: "wide" },     
            { type: "text-file", src: "Bar, tables and floor.txt", title: "Bar, tables and floor", layout: "narrow" },
            { type: "image", src: "blank.webp", layout: "half", matchRow: true},
            { type: "image", src: "16.webp", layout: "half" },
            { type: "image", src: "13.webp", layout: "half" },
            { type: "text-file", src: "The façade and the lower level.txt", title: "The façade and the lower level", layout: "narrow" },
            { type: "image", src: "17.webp", layout: "full" },
            
            
            
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
        layout: "full",
        content: [
            { type: "text-file", src: "desc01.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "1.webp", layout: "full" },
            { type: 'carousel', layout: 'half', images: ['4.webp', '7.webp', '04.webp']},
            { type: "image", src: "01.webp", layout: "half" },
            { type: "text-file", src: "The Screen.txt", title: "The Screen", layout: "half", matchRow: true },
            { type: "image", src: "blank.webp", layout: "half" },
            { type: "image", src: "05.webp", layout: "half" },
            { type: "image", src: "02.webp", layout: "narrow" },
            { type: 'carousel', layout: 'full', images: ['main.webp', '3.webp']},
            { type: "image", src: "2.webp", layout: "narrow" },
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true},
            { type: "image", src: "5.webp", layout: "half" },
            { type: "image", src: "6.webp", layout: "half" },
            { type: "text-file", src: "Recognition.txt", title: "Recognition", layout: "half" },
            { type: "video", provider: "vimeo", src: "1203538960", layout: "narrow", matchRow: true},
            { type: "image", src: "03.webp", layout: "narrow" },

        ]
    },



    // 22-zevaco
    {
        id: "22-zevaco", 
        title: "Zevaco",
        category: "commercial",
        year: "2013",
        location: "Casablanca’s Anfa District",
        type: "video",
        provider: "vimeo",
        filename: "1198115653", 
        sound: true, 
        layout: "narrow",
        content: [
            { type: "text-file", src: "desc01.txt", title: " ", bold: true, layout: "full" },
            { type: 'carousel', layout: 'full', images: ['1.webp', '01.webp']},
            { type: "image", src: "2.webp", layout: "narrow" },
            { type: "image", src: "02.webp", layout: "narrow" },
            { type: "text-file", src: "Threshold and Exterior Articulation.txt", title: "Threshold and Exterior Articulation", layout: "half", matchRow: true },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "4.webp", layout: "half" },
           //{ type: "image", src: "blank.webp", layout: "half", matchRow: true  },
            { type: "text-file", src: "The Interior Topography.txt", title: "The Interior Topography", layout: "half", matchRow: true },
            { type: "video", provider: "vimeo", src: "1151545677", layout: "narrow", matchRow: true},
            { type: 'carousel', layout: 'half', images: ['5.webp', '03.webp']},
            { type: "video", provider: "vimeo", src: "1198115653", sound: true, layout: "narrow", matchRow: true},
            { type: "text-file", src: "Tectonic Details and Material Tension.txt", title: "Tectonic Details and Material Tension", layout: "half", matchRow: true },
            { type: 'carousel', layout: 'full', images: ['10.webp', '11.webp']},
            { type: 'carousel', layout: 'half', images: ['05.webp', '6.webp']},
            { type: "image", src: "blank.webp", layout: "half", matchRow: true},
            { type: "image", src: "blank.webp", layout: "half", matchRow: true},
            { type: 'carousel', layout: 'half', images: ['9.webp', '08.webp']},    
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
        layout: "narrow",
        content: [

            { type: "text-file", src: "desc01.txt", title: " ", bold: true, layout: "full" },
            
            { type: 'carousel', layout: 'full', images: ['3.webp', '4.webp']},
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true },     
            { type: 'carousel', layout: 'center', images: ['08.webp', '09.webp']},
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true },
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true },        
            { type: "image", src: "10.webp", layout: "half" },
            { type: "image", src: "01.webp", layout: "half" },
            { type: "text-file", src: "The Journey and Layout.txt", title: "The Journey and Layout", layout: "half", matchRow: true },            
            { type: 'carousel', layout: 'half', images: ['2.webp', '02.webp']},
            { type: "text-file", src: "Materiality and Layering.txt", title: "Materiality and Layering", layout: "half", matchRow: true },
            
            { type: 'carousel', layout: 'narrow', images: ['010.webp', '012.webp', '011.webp', '013.webp']},            
            { type: "image", src: "8.webp", layout: "wide" },
        
            { type: 'carousel', layout: 'half', images: ['04.webp', '6.webp']},
            { type: "image", src: "06.webp", layout: "narrow", matchRow: true },
            { type: "image", src: "9.webp", layout: "full" },
            { type: "text-file", src: "Interactive Details.txt", title: "Interactive Details", layout: "wide", matchRow: true },

        ]
    },

    

    //  01-cm-mia
    {
        id: "01-cm-mia",
        title: "Chotto Matte Miami",
        category: "commercial", 
        year: "2018",
        location: "Miami",
        type: "image",
        filename: "main.webp", 
        layout: "wide", 
        content: [
            { type: "text-file", src: "desc.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "5.webp", layout: "narrow", matchRow: true},
            { type: "image", src: "06.webp", layout: "half" },
            { type: "text-file", src: "The roof.txt", title: "The Roof", layout: "wide" },
            { type: "image", src: "9.webp", layout: "half" },
            { type: "image", src: "08.webp", layout: "narrow", matchRow: true},
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true},
            { type: "image", src: "07.webp", layout: "wide" },
            { type: "image", src: "03.webp", layout: "narrow" },
            { type: "text-file", src: "The space.txt", title: "The Space", layout: "wide", matchRow: true },
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true },
            { type: "image", src: "02.webp", layout: "narrow" },
            { type: "image", src: "1.webp", layout: "half"},
            { type: "image", src: "blank.webp", layout: "half", matchRow: true},
            { type: "image", src: "blank.webp", layout: "half", matchRow: true},
            { type: "image", src: "04.webp", layout: "half" },
            { type: "image", src: "4.webp", layout: "narrow" },
            { type: "image", src: "01.webp", layout: "narrow" },
            { type: "image", src: "8.webp", layout: "wide" },
            { type: "text-file", src: "Recognition.txt", title: "Recognition", layout: "full", matchRow: true },
         
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
        layout: "half",
        content: [
            { type: "text-file", src: "desc.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "4.webp", layout: "full" },
            { type: "image", src: "2.webp", layout: "narrow" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "text-file", src: "desc01.txt", title: " ", layout: "half" },
            { type: "image", src: "5.webp", layout: "full" },
            { type: "image", src: "1.webp", layout: "full" },
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
        layout: "center",
        content: [
            { type: "text-file", src: "desc.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "2.webp", layout: "half" },            
            { type: "image", src: "16.webp", layout: "narrow", matchRow: true  },
            { type: "text-file", src: "Circulation as the idea.txt", title: "Circulation as the idea", layout: "half" , matchRow: true },
            { type: "image", src: "9.webp", layout: "half" },
            { type: "text-file", src: "Surface and Material.txt", title: "Surface and Material", layout: "wide" , matchRow: true },
            { type: "image", src: "15.webp", layout: "full" },
            { type: 'carousel', layout: 'center', images: ['13.webp', '12.webp', '11.webp', '10.webp', '14.webp']},
            { type: "text-file", src: "Across the four levels.txt", title: "Across the four levels", layout: "wide" , matchRow: true },
            { type: 'carousel', layout: 'narrow', images: ['6.webp', '5.webp', '4.webp', '7.webp']},
            { type: 'carousel', layout: 'full', images: ['17.webp', '19.webp']},
        ]
    },

    // 11-chan
    {
        id: "11-chan", 
        title: "Chan",
        category: "commercial",
        year: "2011",
        location: "Thessaloniki, Greece",
        type: "image",
        filename: "5.webp",
        layout: "full",
        content: [
            { type: "text-file", src: "desc01.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "1.webp", layout: "full" },
            { type: "image", src: "05.webp", layout: "narrow" },
            { type: "image", src: "3.webp", layout: "full" },
            { type: "text-file", src: "The Brief.txt", title: "The Brief", layout: "half" },
            { type: 'carousel', layout: 'half', images: ['7.webp', '04.webp']},
            { type: 'carousel', layout: 'half', images: ['06.webp', '10.webp', '02.webp', '9.webp']},
            { type: "text-file", src: "The Space.txt", title: "The Space", layout: "half" },
            { type: "image", src: "03.webp", layout: "full" },
            { type: 'carousel', layout: 'half', images: ['4.webp', '8.webp']},
            { type: "image", src: "07.webp", layout: "narrow" },
            { type: "text-file", src: "Recognition.txt", title: "Recognition", layout: "half" },
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
        type: "video",
        provider: "vimeo",
        filename: "1198477919", 
        layout: "half",
        content: [
            { type: "text-file", src: "desc.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "1.webp", layout: "narrow" },
            { type: "image", src: "4.webp", layout: "narrow" },
            { type: "image", src: "2.webp", layout: "full" },
            { type: "image", src: "01.webp", layout: "half" },
            { type: "text-file", src: "The conservatory.txt", title: "The conservatory", layout: "half" },
            { type: "image", src: "blank.webp", layout: "half" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "image", src: "blank.webp", layout: "half" },
            { type: 'carousel', layout: 'half', images: ['5.webp', '8.webp']},
            { type: 'carousel', layout: 'full', images: ['9.webp', '10.webp', '11.webp']},
            { type: "image", src: "blank.webp", layout: "half" },
            { type: 'carousel', layout: 'half', images: ['12.webp', '6.webp']},
            
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
        layout: "narrow",
        content: [
            { type: "text-file", src: "desc01.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "3.webp", layout: "full" },
            { type: "text-file", src: "The Brief.txt", title: "The Brief",  layout: "half" },
            { type: 'carousel', layout: 'half', images: ['01.webp', '02.webp', '03.webp', '04.webp']},
            { type: "image", src: "5.webp", layout: "half" },
            { type: "text-file", src: "Layout and Circulation.txt", title: "Layout and Circulation",  layout: "half" },
            { type: "image", src: "blank.webp", layout: "half" },
            { type: "image", src: "05.webp", layout: "narrow" },
            { type: "video", provider: "vimeo", src: "1203800635", sound: true, layout: "narrow"},
            { type: "text-file", src: "Materials and Art.txt", title: "Materials and Art",  layout: "half" },

            { type: "image", src: "2.webp", layout: "half"},
            { type: "image", src: "4.webp", layout: "full" },
            { type: "text-file", src: "Credits and Context.txt", title: "Credits and Context",  layout: "half" },
            { type: "video", provider: "vimeo", src: "1203810047", sound: true, layout: "half"},
            
            
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
        filename: "3.webp",
        layout: "center",
        content: [
            { type: "text-file", src: "desc01.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "4.webp", layout: "full" },
            { type: "text-file", src: "The three rooms.txt", title: "The Three Rooms", layout: "wide" },
            { type: "image", src: "blank.webp", layout: "half" , matchRow: true  },
            { type: "video", provider: "vimeo", src: "1203868446", sound: true, layout: "half"},
            { type: "text-file", src: "The Decorative Scheme.txt", title: "The Decorative Scheme",  layout: "wide" },
            { type: 'carousel', layout: 'half', images: ['04.webp', '02.webp']},
            { type: "image", src: "blank.webp", layout: "half" , matchRow: true  },
            { type: "image", src: "blank.webp", layout: "half" , matchRow: true  },
            { type: 'carousel', layout: 'half', images: ['03.webp', '05.webp']},
            { type: "image", src: "5.webp", layout: "half" },
            { type: "text-file", src: "Light and Architecture.txt", title: "Light and Architecture", layout: "half" },
            { type: "image", src: "6.webp", layout: "full" },
            { type: "image", src: "1.webp", layout: "full" },            
        ]
    },

    // 17-Barrafina-cdy
    {
        id: "17-Barrafina-cdy", 
        title: "Barrafina CDY",
        category: "commercial",
        year: "2019",
        location: "CDY",
        type: "image",
        filename: "1.webp",
        layout: "narrow",
        content: [
            { type: "text-file", src: "desc.txt", title: " ", bold: true, layout: "full" }, 
            { type: "image", src: "2.webp", layout: "full" },
            { type: "video", provider: "vimeo", src: "1204126106", layout: "narrow"},
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true   },
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true   },
            { type: "text-file", src: "The Focal Point Kitchen as Theatre.txt", title: "The Focal Point Kitchen as Theatre", layout: "half", matchRow: true}, 
            { type: "image", src: "3.webp", layout: "half" },
            { type: "video", provider: "vimeo", src: "1204119157", sound: true, layout: "narrow"},
            { type: "text-file", src: "Materiality and Craftsmanship.txt", title: "Materiality and Craftsmanship", layout: "half", matchRow: true  }, 
            { type: "image", src: "blank.webp", layout: "narrow", matchRow: true   },
            { type: "image", src: "4.webp", layout: "half" },
            { type: "image", src: "5.webp", layout: "full" },
            { type: "image", src: "6.webp", layout: "narrow" },              
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
            
            { type: "text-file", src: "desc.txt", title: " ", bold: true,  layout: "full" }, 
            { type: 'carousel', layout: 'full', images: ['1.webp', '01.webp']},
            { type: "image", src: "2.webp", layout: "half"},
            { type: "text-file", src: "Spatial Sequencing and Volumetric Control.txt", title: "Spatial Sequencing and Volumetric Control", layout: "half", matchRow: true}, 
            { type: "image", src: "blank.webp", layout: "half" },
            { type: "image", src: "3.webp", layout: "half" },
            { type: "text-file", src: "Translucent Boundaries and Micro-Landscapes.txt", title: "Translucent Boundaries and Micro-Landscapes", layout: "half", matchRow: true},
            { type: 'depth3d', src: '6.webp', depth: '6depth.webp', strength: 15, sway: 10 },
            { type: "image", src: "blank.webp", layout: "half" },
            { type: "text-file", src: "Tectonic Ecology and Thermal Mass.txt", title: "Tectonic Ecology and Thermal Mass", layout: "half", matchRow: true},
            { type: "image", src: "4.webp", layout: "half" },
            { type: 'floating-video', src: '1204231599' },
            { type: "image", src: "5.webp", layout: "center" },
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
        filename: "1198411168",
        sound: true, 
        layout: "narrow",
        content: [
            // { type: "text-file", src: "desc01.txt", title: "Concept", layout: "full" }, 
            { type: "image", src: "2.webp", layout: "full" },
            { type: "image", src: "3.webp", layout: "full" },
            { type: "image", src: "5.webp", layout: "full" },    
            { type: "image", src: "4.webp", layout: "full" },
                 
        ]
    },

 

    // 25-isola
    {
        id: "25-isola", 
        title: "ISOLA",
        category: "commercial",
        year: "1998",
        location: "London",
        type: "image",
        filename: "01.webp",
        layout: "half",
        content: [
            { type: "text-file", src: "desc.txt", title: " ", bold: true, layout: "full" },
            { type: "image", src: "06.webp", layout: "half" },
            { type: "image", src: "02.webp", layout: "half",matchRow: true },
            { type: "image", src: "05.webp", layout: "narrow" },
            { type: "image", src: "04.webp", layout: "narrow" },
            { type: "image", src: "01.webp", layout: "full" },
        ]
    },














];
