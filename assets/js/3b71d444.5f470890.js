"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9556],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>p});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){return function(t){var n=d(t.components);return r.createElement(e,o({},t,{components:n}))}},d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||h[u]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},72530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={sidebar_position:30,title:"About TICSync"},i="About TICSync",s={unversionedId:"ARK/sdk/concepts/about_ticsync",id:"ARK/sdk/concepts/about_ticsync",title:"About TICSync",description:"What is TICSync",source:"@site/docs/ARK/sdk/concepts/about_ticsync.mdx",sourceDirName:"ARK/sdk/concepts",slug:"/ARK/sdk/concepts/about_ticsync",permalink:"/projectaria_tools/docs/ARK/sdk/concepts/about_ticsync",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/concepts/about_ticsync.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"About TICSync"},sidebar:"tutorialSidebar",previous:{title:"Access Sensor Profiles",permalink:"/projectaria_tools/docs/ARK/sdk/concepts/sdk_sensor_profiles"},next:{title:"Time Synchronization",permalink:"/projectaria_tools/docs/ARK/sdk/ticsync"}},c={},l=[{value:"What is TICSync",id:"what-is-ticsync",level:2},{value:"How Project Aria uses TICSync",id:"how-project-aria-uses-ticsync",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.mdx)(d,(0,r.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"about-ticsync"},"About TICSync"),(0,a.mdx)("h2",{id:"what-is-ticsync"},"What is TICSync"),(0,a.mdx)("p",null,"TICSync is an extremely efficient algorithm for learning the mapping between distributed clocks, which typically achieves better than millisecond accuracy within just a few seconds. It works by estimating clock offset and skew between itself (the host) and a device (Aria leader or server)."),(0,a.mdx)("p",null,"The host obtains time triplets from two-way communication (hostRequestTime, deviceTime, hostReceiveTime) \u2013 and gets a first-order (offset, skew) estimate that converges quickly and is usually stable after a couple dozen samples. The samples get added to the estimator so that estimates keep improving over time and converge very quickly."),(0,a.mdx)("p",null,"The accuracy of this method, using Project Aria glasses with the Client SDK, has been tested to be better than 1ms on average after approximately 45 seconds warm-up."),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"TICSync diagram showing the relationship between Client and Server devices",src:n(71504).A,width:"996",height:"592"})),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Figure 1:")," True Time Diagram, Alastair Harrison and Paul Newman, TICSync: Knowing when things happened, IEEE International Conference on Robotics and Automation, 2011"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/abstract/document/5980112"},"TICSync: Knowing when things happened")," paper describes in more detail how the algorithm works, provides a mathematical analysis and results with real experiments."),(0,a.mdx)("h2",{id:"how-project-aria-uses-ticsync"},"How Project Aria uses TICSync"),(0,a.mdx)("p",null," TICSync can be used to capture time-synchronized data between multiple Project Aria glasses (and potentially other devices) on the one Wi-Fi network via TICSync. TICSync recordings are initiated via the Project Aria Client SDK. Using the Aria hotspot feature, one pair of glasses (server) acts as a Wi-Fi access point that forms a network between all glasses. Time requests from all other glasses go to the server/leader device, creating a synchronized time reference."),(0,a.mdx)("p",null,"Further resources:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/sdk/ticsync"},"How to Create Time Synchronized Recordings with Multiple Aria Glasses")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/sdk/samples/ticsync_sample"},"TICSync Code Snippet"))))}u.isMDXComponent=!0},71504:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/ticsync_diagram-5170706ac2ab24c18aa8c93134e9f12e.png"}}]);