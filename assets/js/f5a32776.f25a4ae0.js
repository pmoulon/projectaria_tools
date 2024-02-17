"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>l,MDXProvider:()=>p,mdx:()=>_,useMDXComponents:()=>m,withMDXComponents:()=>c});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){return function(t){var a=m(t.components);return n.createElement(e,r({},t,{components:a}))}},m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=m(a),p=i,u=c["".concat(o,".").concat(p)]||c[p]||h[p]||r;return a?n.createElement(u,s(s({ref:t},l),{},{components:a})):n.createElement(u,s({ref:t},l))}));function _(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},45311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(58168),i=(a(96540),a(15680));const r={sidebar_position:10,title:"Overview"},o="Aria Digital Twin Dataset",s={unversionedId:"open_datasets/aria_digital_twin_dataset/aria_digital_twin_dataset",id:"open_datasets/aria_digital_twin_dataset/aria_digital_twin_dataset",title:"Overview",description:"Overview",source:"@site/docs/open_datasets/aria_digital_twin_dataset/aria_digital_twin_dataset.mdx",sourceDirName:"open_datasets/aria_digital_twin_dataset",slug:"/open_datasets/aria_digital_twin_dataset/",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_digital_twin_dataset/aria_digital_twin_dataset.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Open Datasets",permalink:"/projectaria_tools/docs/open_datasets/"},next:{title:"Getting Started",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/getting_started"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"About the data",id:"about-the-data",level:2},{value:"Apartment scene",id:"apartment-scene",level:3},{value:"Office scene",id:"office-scene",level:3},{value:"Activities",id:"activities",level:3},{value:"Other statistics:",id:"other-statistics",level:3},{value:"Documentation",id:"documentation",level:3}],c={toc:l},m="wrapper";function p(e){let{components:t,...a}=e;return(0,i.mdx)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"aria-digital-twin-dataset"},"Aria Digital Twin Dataset"),(0,i.mdx)("h2",{id:"overview"},"Overview"),(0,i.mdx)("p",null,"Project Aria Tools provides Python and C++ APIs to access the ",(0,i.mdx)("a",{parentName:"p",href:"https://www.projectaria.com/datasets/adt/"},"Aria Digital Twin (ADT) dataset")," (",(0,i.mdx)("a",{parentName:"p",href:"https://arxiv.org/abs/2306.06362"},"paper"),")."),(0,i.mdx)("h2",{id:"about-the-data"},"About the data"),(0,i.mdx)("p",null,"The ADT dataset contains 222 sequences recording single and dual-person activities. The data was recorded in two spaces: an apartment and a single room office. There are 74 single-instance dynamic objects shared between the two spaces."),(0,i.mdx)("p",null,"Go to the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/open_datasets/aria_digital_twin_dataset/getting_started"},"Getting Started Tutorial")," to explore the sample dataset (available on Googlecollab, no download necessary) or the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/open_datasets/aria_digital_twin_dataset/dataset_download"},"Dataset Download page")," to get started."),(0,i.mdx)("p",null,"The sample dataset is a single-user dataset with body pose in the Apartment. It is a pretty representative example that should give you an idea of the dataset."),(0,i.mdx)("h3",{id:"apartment-scene"},"Apartment scene"),(0,i.mdx)("p",null,"170 sequences were recorded in the apartment scene. The apartment comprised of a living room, kitchen, dining room and bedroom and contained 281 unique stationary objects."),(0,i.mdx)("p",null,"Given some objects have multiple instances that may differ slightly, the apartment has 324 stationary object instances in total."),(0,i.mdx)("h3",{id:"office-scene"},"Office scene"),(0,i.mdx)("p",null,"52 sequences were recorded in the office scene, a single room with minimal office furniture.  The office room contained 15 unique stationary objects and 20 stationary object instances."),(0,i.mdx)("h3",{id:"activities"},"Activities"),(0,i.mdx)("p",null,"In the office scene, users examined objects. For the apartment scene we designed five single-person activities and three dual-person activities."),(0,i.mdx)("p",null,"The single-person activities were:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Room decoration"),(0,i.mdx)("li",{parentName:"ul"},"Meal preparation"),(0,i.mdx)("li",{parentName:"ul"},"Work"),(0,i.mdx)("li",{parentName:"ul"},"Object examination"),(0,i.mdx)("li",{parentName:"ul"},"Room cleaning")),(0,i.mdx)("p",null,"The dual-person activities included:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Partying"),(0,i.mdx)("li",{parentName:"ul"},"Room cleaning"),(0,i.mdx)("li",{parentName:"ul"},"Dining table cleaning")),(0,i.mdx)("p",null,"Every activity has 10 to 50 sequences and the activity names are embedded into the sequence_names."),(0,i.mdx)("h3",{id:"other-statistics"},"Other statistics:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Number of multi-person sequences: 77"),(0,i.mdx)("li",{parentName:"ul"},"Number of sequences with no skeletons: 110"),(0,i.mdx)("li",{parentName:"ul"},"Number of sequences with 1 skeleton: 92"),(0,i.mdx)("li",{parentName:"ul"},"Number of sequences with 2 skeleton: 20")),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"We provide a mix of datasets where users may or may not be wearing an Aria and/or a bodysuit.\nPlease refer to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"skeleton_aria_association.json")," to see the case for each specific sub-sequence.")),(0,i.mdx)("h3",{id:"documentation"},"Documentation"),(0,i.mdx)("p",null,"The ADT section of the wiki covers:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/open_datasets/aria_digital_twin_dataset/getting_started"},"Getting started"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"A quickstart tutorial available as a Google colab project or install Project Aria Tools python package to run locally, run the ADT notebook to access and visualize ground-truth data."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download"},"Dataset download"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"A walkthrough of using ",(0,i.mdx)("inlineCode",{parentName:"li"},"adt_benchmark_dataset_downloader")," to download the published ADT dataset."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/open_datasets/aria_digital_twin_dataset/visualizers"},"Visualizers"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Compile and run our visualizer using an example that accesses ADT data in C++."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/open_datasets/aria_digital_twin_dataset/advanced_tutorials"},"Advanced tutorial"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"A guide to learn how device synchronization works in ADT and run through a Jupyter notebook."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/open_datasets/aria_digital_twin_dataset/data_loader"},"Data loader"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"APIs to load ADT data with handy code snippets"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/open_datasets/aria_digital_twin_dataset/data_format"},"Data format"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"How ADT data is organized and stored")))))}p.isMDXComponent=!0}}]);