"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8150],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>c});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),c=function(e){return function(t){var r=p(t.components);return a.createElement(e,o({},t,{components:r}))}},p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,d=c["".concat(s,".").concat(u)]||c[u]||f[u]||o;return r?a.createElement(d,i(i({ref:t},m),{},{components:r})):a.createElement(d,i({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=_;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var m=2;m<o;m++)s[m]=r[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}_.displayName="MDXCreateElement"},4886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=r(58168),n=(r(96540),r(15680));const o={sidebar_position:1e3,title:"Multi-SLAM"},s=void 0,i={unversionedId:"data_formats/mps/slam/mps_multi_slam",id:"data_formats/mps/slam/mps_multi_slam",title:"Multi-SLAM",description:"Multi-SLAM is a Project Aria Machine Perception Service (MPS) that can be requested on two or more recordings. It creates SLAM MPS outputs in a shared co-ordinate frame.",source:"@site/docs/data_formats/mps/slam/mps_multi_slam.mdx",sourceDirName:"data_formats/mps/slam",slug:"/data_formats/mps/slam/mps_multi_slam",permalink:"/projectaria_tools/docs/data_formats/mps/slam/mps_multi_slam",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_formats/mps/slam/mps_multi_slam.mdx",tags:[],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,title:"Multi-SLAM"},sidebar:"tutorialSidebar",previous:{title:"Calibration Data",permalink:"/projectaria_tools/docs/data_formats/mps/slam/mps_calibration"},next:{title:"Eye Gaze",permalink:"/projectaria_tools/docs/data_formats/mps/mps_eye_gaze"}},l={},m=[],c={toc:m},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.mdx)(p,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"Multi-SLAM is a Project Aria ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/"},"Machine Perception Service (MPS)")," that can be requested on two or more recordings. It creates SLAM MPS outputs in a shared co-ordinate frame."),(0,n.mdx)("p",null,"Multi-SLAM data can be visualized in the Python version of ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_utilities/visualization/visualization_python#multi-slam"},"MPS Viewer"),"."),(0,n.mdx)("p",null,"Open datasets that contain Multi-SLAM outputs where there are recordings with 2 or more Project Aria glasses:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/"},"Aria Everyday Activities (AEA) dataset")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/"},"Aria Digital Twin (ADT) dataset"))),(0,n.mdx)("p",null,"The Multi-SLAM outputs are mostly the same as the standard ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_formats/mps/slam/"},"SLAM MPS outputs"),". The differences are:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Multi-SLAM can only be requested via MPS CLI"),(0,n.mdx)("li",{parentName:"ul"},"All the recordings that were aligned together will have the same ",(0,n.mdx)("inlineCode",{parentName:"li"},"graph_uid")," in the output."),(0,n.mdx)("li",{parentName:"ul"},"The output may contain multiple aligned islands and multiple consecutive graph_uids.")),(0,n.mdx)("p",null,"Outputs are saved to a user defined directory. Each numbered folder contains the outputs for a specific VRS file:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"\u2514\u2500\u2500 multi_slam_output # user defined directory for outputs\n    \u251c\u2500\u2500 0\n    \u2502   \u251c\u2500\u2500 slam\n    \u2502   \u2502    \u251c\u2500\u2500 closed_loop_trajectory.csv\n    \u2502   \u2502    \u251c\u2500\u2500 online_calibration.jsonl\n    \u2502   \u2502    \u251c\u2500\u2500 open_loop_trajectory.csv\n    \u2502   \u2502    \u251c\u2500\u2500 semidense_observations.csv.gz\n    \u2502   \u2502    \u251c\u2500\u2500 semidense_points.csv.gz\n    \u2502   \u2502    \u2514\u2500\u2500 summary.json\n    \u2502   \u251c\u2500\u2500 vrs_health_check.json\n    \u2502   \u2514\u2500\u2500 vrs_health_check_slam.json\n    \u251c\u2500\u2500 1\n    \u2502   \u251c\u2500\u2500 slam\n    \u2502   \u2502    \u251c\u2500\u2500 closed_loop_trajectory.csv\n    \u2502   \u2502    \u251c\u2500\u2500 online_calibration.jsonl\n    \u2502   \u2502    \u251c\u2500\u2500 open_loop_trajectory.csv\n    \u2502   \u2502    \u251c\u2500\u2500 semidense_observations.csv.gz\n    \u2502   \u2502    \u251c\u2500\u2500 semidense_points.csv.gz\n    \u2502   \u2502    \u2514\u2500\u2500 summary.json\n    \u2502   \u251c\u2500\u2500 vrs_health_check.json\n    \u2502   \u2514\u2500\u2500 vrs_health_check_slam.json\n    \u2514\u2500\u2500 vrs_to_multi_slam.json\n")),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"vrs_to_multi_slam.json")," associates the VRS file name with a numbered folder, for example:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},'{\n  "/example/recording1.vrs": "0",\n  "/example/recording2.vrs": "1",\n  "/example2/recording1.vrs": "2",\n}\n\n')))}u.isMDXComponent=!0}}]);