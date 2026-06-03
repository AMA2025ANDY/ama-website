// =====================================================================
//  AMA 网站数据 - 拆分版
// =====================================================================
//  数据现在按分类拆成 4 个文件,运行时由 data.js 合并成一份 projectsData:
//     data-projects.js    建筑项目 (residential + commercial)
//     data-objects.js     Objects
//     data-resources.js   Resources
//     data-editorial.js   Editorial
//  data.js 负责定义 ASSET_BASE 并把以上四个数组合并。
//
//  HTML 里必须按顺序加载,合并器 data.js 放最后:
//     <script src="js/data-projects.js"></script>
//     <script src="js/data-objects.js"></script>
//     <script src="js/data-resources.js"></script>
//     <script src="js/data-editorial.js"></script>
//     <script src="js/data.js"></script>
// =====================================================================

// 素材 CDN 前缀。改了仓库名/分支只动这一行。
// 本地调试时改成: const ASSET_BASE = "";
const ASSET_BASE = "https://cdn.jsdelivr.net/gh/AMA2025ANDY/ama-website@main";

// 把四个分类数组合并成全站统一的一份 projectsData。
// 顺序 = 首页瀑布流顺序。想调整大类先后,改下面的拼接顺序即可。
const projectsData = [
    ...dataProjects,
    ...dataObjects,
    ...dataResources,
    ...dataEditorial,
];
