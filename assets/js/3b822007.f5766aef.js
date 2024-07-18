"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4171],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>m});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),m=function(e){return function(t){var r=d(t.components);return a.createElement(e,n({},t,{components:r}))}},d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=d(r),u=o,c=m["".concat(s,".").concat(u)]||m[u]||h[u]||n;return r?a.createElement(c,i(i({ref:t},l),{},{components:r})):a.createElement(c,i({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41991:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(58168),o=(r(96540),r(15680));const n={sidebar_position:5e3,title:"Desktop App MPS Requests"},s="Request MPS Using the Desktop Companion App",i={unversionedId:"ARK/mps/request_mps/desktop_mps",id:"ARK/mps/request_mps/desktop_mps",title:"Desktop App MPS Requests",description:"Overview",source:"@site/docs/ARK/mps/request_mps/desktop_mps.mdx",sourceDirName:"ARK/mps/request_mps",slug:"/ARK/mps/request_mps/desktop_mps",permalink:"/projectaria_tools/docs/ARK/mps/request_mps/desktop_mps",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/mps/request_mps/desktop_mps.mdx",tags:[],version:"current",sidebarPosition:5e3,frontMatter:{sidebar_position:5e3,title:"Desktop App MPS Requests"},sidebar:"tutorialSidebar",previous:{title:"MPS CLI Guide",permalink:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_guide"},next:{title:"Eye Gaze Calibration",permalink:"/projectaria_tools/docs/ARK/mps/eye_gaze_calibration"}},p={},l=[{value:"Overview",id:"overview",level:2},{value:"How to Request MPS",id:"how-to-request-mps",level:2},{value:"Status Types",id:"status-types",level:2}],m={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.mdx)(d,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"request-mps-using-the-desktop-companion-app"},"Request MPS Using the Desktop Companion App"),(0,o.mdx)("h2",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"This page provides information about how academic research partners who have access to the ",(0,o.mdx)("a",{parentName:"p",href:"https://www.projectaria.com/research-kit/"},"Aria Research Kit (ARK)")," can request ",(0,o.mdx)("a",{parentName:"p",href:"/docs/ARK/mps"},"Machine Perception Services (MPS)")," using the Desktop Companion App. The Desktop Companion app is available on ",(0,o.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/ark_downloads#desktop-companion-app"},"Windows, MacOS and Linux"),"."),(0,o.mdx)("admonition",{title:"Try the MPS CLI or Aria Studio!",type:"info"},(0,o.mdx)("p",{parentName:"admonition"},"We recommend using the ",(0,o.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli"},"MPS CLI")," or ",(0,o.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/aria_studio"},"Aria Studio")," to submit requests as they contain additional capabilities, such as resumable uploads and Multi-SLAM MPS")),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Desktop App recording tools page",src:r(47293).A,width:"1321",height:"938"})),(0,o.mdx)("h2",{id:"how-to-request-mps"},"How to Request MPS"),(0,o.mdx)("p",null,"To request MPS processing on Aria VRS files:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Go to the Recordings section of the ",(0,o.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/desktop_companion_app"},"Desktop App")," and select ",(0,o.mdx)("strong",{parentName:"li"},"VRS Tools")),(0,o.mdx)("li",{parentName:"ol"},"Select ",(0,o.mdx)("strong",{parentName:"li"},"Request MPS")," in the Recordings toolbar"),(0,o.mdx)("li",{parentName:"ol"},"Select the VRS file from the native file explorer"),(0,o.mdx)("li",{parentName:"ol"},"Select what types of MPS you'd like to request"),(0,o.mdx)("li",{parentName:"ol"},"Select ",(0,o.mdx)("strong",{parentName:"li"},"Upload")),(0,o.mdx)("li",{parentName:"ol"},"Your file's progress and the downloadable MPS outputs will become visible under Remote Uploads",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"It may take several minutes for your file to appear in the Uploads tab, especially if it is large")))),(0,o.mdx)("p",null,"Once your data has been successfully processed, you can download the derived data zip file, from the Recordings toolbar. Please refer to the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/data_utilities/core_code_snippets/mps#load-mps-output"},"MPS Loader APIs")," on how to load the output in Python/C++ and ",(0,o.mdx)("a",{parentName:"p",href:"/docs/data_utilities/visualization/visualization_python#run-mps-viewer"},"Python visualization"),", ",(0,o.mdx)("a",{parentName:"p",href:"/docs/data_utilities/visualization/visualization_cpp#mps-static-scene-visualizer"},"C++ Visualization")," guides. on how to run the rich visualization tools to visualize all the MPS outputs."),(0,o.mdx)("h2",{id:"status-types"},"Status Types"),(0,o.mdx)("p",null,"How long it takes for a file to progress from one state to the next will depend on how big the file is and how many other requests are being processed at that time."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Unrequested"),": This type of derived data was not requested"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Waiting"),": MPS request has been received and is in the queue for processing"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Processing"),": This data is currently being processed"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Complete"),": Data Processing is Complete, you can now download your files"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Error"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"VRS file did not have the data required for processing, please use a ",(0,o.mdx)("a",{parentName:"li",href:"/docs/tech_spec/#recording-profiles"},"Supported Recording Profile"),"."),(0,o.mdx)("li",{parentName:"ul"},"An error occurred while processing data with a supported recording profile.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"There are many variables that can impact MPS output. For Trajectory data you can download the summary.json file to get more information. See ",(0,o.mdx)("a",{parentName:"li",href:"/docs/data_formats/mps/mps_summary"},"MPS Trajectory Documentation")," for more information."),(0,o.mdx)("li",{parentName:"ul"},"If you've checked your recording profile and that is not the issue and you are unable to debug the issue using summary.json, please email",(0,o.mdx)("a",{parentName:"li",href:"mailto:AriaOps@meta.com"},"AriaOps@meta.com"),"with a bug report. Make sure you include the Transaction ID in your report and summary.json if you have one. Screenshots and screen recordings are always welcome.")))))))}u.isMDXComponent=!0},47293:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/desktop_app_mps-e32ad70ec1618b53cf1ca30a221a4870.png"}}]);