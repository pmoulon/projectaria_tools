"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1887],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>p});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),p=function(e){return function(t){var a=m(t.components);return n.createElement(e,i({},t,{components:a}))}},m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(a),c=o,u=p["".concat(r,".").concat(c)]||p[c]||h[c]||i;return a?n.createElement(u,s(s({ref:t},d),{},{components:a})):n.createElement(u,s({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},28772:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(58168),o=(a(96540),a(15680));const i={sidebar_position:40,title:"Data Tools and Visualization"},r="Synthetic Environments Data Tools and Visualization",s={unversionedId:"open_datasets/aria_synthetic_environments_dataset/ase_data_tools",id:"open_datasets/aria_synthetic_environments_dataset/ase_data_tools",title:"Data Tools and Visualization",description:"We provide different functions and code snippets in Python to load Aria Synthetic Environments (ASE) data from a sequence and associate/interpret them with each other. The contents of each scene/sequence are detailed in Data Format.",source:"@site/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_tools.mdx",sourceDirName:"open_datasets/aria_synthetic_environments_dataset",slug:"/open_datasets/aria_synthetic_environments_dataset/ase_data_tools",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_tools",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_tools.mdx",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"Data Tools and Visualization"},sidebar:"tutorialSidebar",previous:{title:"Data Format",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_format"},next:{title:"ASE Challenges",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_challenges"}},l={},d=[{value:"Data Helper Tools",id:"data-helper-tools",level:2},{value:"Visualization",id:"visualization",level:2},{value:"Python sample",id:"python-sample",level:2},{value:"Python Notebook",id:"python-notebook",level:2},{value:"Part 1: 3D visualization of the scene",id:"part-1-3d-visualization-of-the-scene",level:3},{value:"Part 2: Loading and Plotting Images and Image Annotations",id:"part-2-loading-and-plotting-images-and-image-annotations",level:3},{value:"Part 3: Projecting Points into Images",id:"part-3-projecting-points-into-images",level:3}],p={toc:d},m="wrapper";function c(e){let{components:t,...i}=e;return(0,o.mdx)(m,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"synthetic-environments-data-tools-and-visualization"},"Synthetic Environments Data Tools and Visualization"),(0,o.mdx)("p",null,"We provide different functions and code snippets in Python to load Aria Synthetic Environments (ASE) data from a sequence and associate/interpret them with each other. The contents of each scene/sequence are detailed in ",(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("a",{parentName:"strong",href:"ase_data_format"},"Data Format"),".")),(0,o.mdx)("p",null,"They provide a set of helper functions to use the data efficiently and also visualize them. All of these snippets are placed under  ",(0,o.mdx)("strong",{parentName:"p"},"projectaria_tools/tree/main/projects/AriaSyntheticEnvironment/tutorial/code_snippets/")),(0,o.mdx)("h2",{id:"data-helper-tools"},"Data Helper Tools"),(0,o.mdx)("p",null,"These helper functions are broadly categorized into the following types:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Data interpreter: ",(0,o.mdx)("inlineCode",{parentName:"li"},"interpreter.py"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Provides an interpreter for the ASE Scene Language to convert them into a 3D model in the form of bounding boxes"))),(0,o.mdx)("li",{parentName:"ul"},"Data readers: ",(0,o.mdx)("inlineCode",{parentName:"li"},"readers.py"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Provide readers for the:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"ASE Scene Language")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Ground-truth trajectory")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Semi-dense Map points")))))),(0,o.mdx)("li",{parentName:"ul"},"Data Plotters: ",(0,o.mdx)("inlineCode",{parentName:"li"},"plotters.py"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Provide simple plotting functions for the:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"3D scene from ASE Scene Language")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Ground-truth trajectory")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Semi Dense Map points"))))))),(0,o.mdx)("h2",{id:"visualization"},"Visualization"),(0,o.mdx)("h2",{id:"python-sample"},"Python sample"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Viewer_projects_ase")," displays an interactive view of an ASE sequence with ",(0,o.mdx)("a",{parentName:"p",href:"/docs/data_utilities/visualization/visualization_python#rerun"},"Rerun"),". It allows you to see all data in 3D context."),(0,o.mdx)("p",null,"You can call as the following (",(0,o.mdx)("inlineCode",{parentName:"p"},"frame_id")," being optional):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"viewer_projects_ase --dataset_path ase_data/7  --frame_id 745\n")),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"ASE Viewer Screenshot",src:a(36778).A,width:"1999",height:"706"})),(0,o.mdx)("admonition",{type:"tip"},(0,o.mdx)("ul",{parentName:"admonition"},(0,o.mdx)("li",{parentName:"ul"},"The timeline enables you to switch before device_time and frame_id to know to which image frame_id a camera pose corresponds to"),(0,o.mdx)("li",{parentName:"ul"},"The 3D world view is clickable, you can quickly select an object and see its instance name"))),(0,o.mdx)("h2",{id:"python-notebook"},"Python Notebook"),(0,o.mdx)("p",null,"We also provide Jupyter notebooks to visualize the data for each sequence. To get started download ASE data following steps from ",(0,o.mdx)("a",{parentName:"p",href:"ase_download_dataset"},"Dataset Download")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"cd /path_to/projectaria_tools\n\njupyter notebook projects/AriaSyntheticEnvironment/tutorial/ase_tutorial_notebook.ipynb\n")),(0,o.mdx)("h3",{id:"part-1-3d-visualization-of-the-scene"},"Part 1: 3D visualization of the scene"),(0,o.mdx)("p",null,"This section will introduce the dataset\u2019s 3D components as well as code snippets to help users get familiar with them."),(0,o.mdx)("p",null,"You will be taken through examples of how to load the 3D dataset annotations namely: the ground-truth trajectory, the ASE Scene Language, and the Semi-dense Map point cloud. In addition, we provide examples of how they can each be plotted."),(0,o.mdx)("p",null,"At the end of the section you should see 3D plots containing:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The Semi-dense Map point cloud,"),(0,o.mdx)("li",{parentName:"ul"},"The layout annotations, visualized as 3D box wireframes,"),(0,o.mdx)("li",{parentName:"ul"},"The trajectory plotted as a dotted line in 3D.")),(0,o.mdx)("p",null," Example scene visualization:\n",(0,o.mdx)("img",{alt:"Image: 3D visualization within a house",src:a(62808).A,width:"1716",height:"1310"})),(0,o.mdx)("h3",{id:"part-2-loading-and-plotting-images-and-image-annotations"},"Part 2: Loading and Plotting Images and Image Annotations"),(0,o.mdx)("p",null,"Since the file structure and format are straightforward, the code consists of very simple PIL and matplotlib code to show the 3 images (RGB, depth and instance maps) side-by-side:\n",(0,o.mdx)("img",{alt:"Image: sample_rgb_depth_instance_images.png",src:a(71295).A,width:"2696",height:"882"})),(0,o.mdx)("h3",{id:"part-3-projecting-points-into-images"},"Part 3: Projecting Points into Images"),(0,o.mdx)("p",null,"Running the final part of the notebook will load the camera calibration, as well as the pointcloud, trajectory and select a random frame. Then given the device pose from the trajectory, we project the points into the frame."),(0,o.mdx)("p",null,"Points that project outside of the valid radius, should not be plotted"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Image: sample_rgb_depth_instance_images.png",src:a(67091).A,width:"928",height:"934"})))}c.isMDXComponent=!0},67091:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/projecting_points-2d0baeceecc3530917fbd66d500311e3.png"},36778:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/rerun-ase-a51e8d77401c6c66250f11bfec051201.png"},71295:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/sample_rgb_depth_instance_images-a53f1903a7bf8f4eb8a2970134211e1c.png"},62808:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/scene_visualisation-be66c7f78393be5b4b88951f1f6fc04e.png"}}]);