"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4376],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>p});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){return function(t){var r=d(t.components);return n.createElement(e,a({},t,{components:r}))}},d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,u=p["".concat(o,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(u,l(l({ref:t},s),{},{components:r})):n.createElement(u,l({ref:t},s))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},37606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(58168),i=(r(96540),r(15680));r(98180);const a={sidebar_position:5,title:"Aria CLI"},o="Aria CLI",l={unversionedId:"ARK/sdk/cli/cli",id:"ARK/sdk/cli/cli",title:"Aria CLI",description:"Overview",source:"@site/docs/ARK/sdk/cli/cli.mdx",sourceDirName:"ARK/sdk/cli",slug:"/ARK/sdk/cli/",permalink:"/projectaria_tools/docs/ARK/sdk/cli/",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/cli/cli.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Aria CLI"},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/projectaria_tools/docs/ARK/sdk/api_reference"},next:{title:"Command Reference",permalink:"/projectaria_tools/docs/ARK/sdk/cli/api_reference"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"About the CLI",id:"about-the-cli",level:2},{value:"Help",id:"help",level:2},{value:"Connecting",id:"connecting",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.mdx)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"aria-cli"},"Aria CLI"),(0,i.mdx)("h2",{id:"overview"},"Overview"),(0,i.mdx)("p",null,"This page provides an overview of Aria CLI features and a few useful commands, go to the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/ARK/sdk/cli/api_reference"},"Command Reference page")," for a full list."),(0,i.mdx)("h2",{id:"about-the-cli"},"About the CLI"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Aria CLI")," is a simple command line binary available on Linux and Mac which allows users to control their Project Aria glasses via CLI commands."),(0,i.mdx)("p",null,"The CLI currently provides the ability to:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Pair the glasses via USB or Wi-Fi"),(0,i.mdx)("li",{parentName:"ul"},"Connect to the glasses via USB or Wi-Fi"),(0,i.mdx)("li",{parentName:"ul"},"Retrieve the device status and information"),(0,i.mdx)("li",{parentName:"ul"},"Control Aria recording capabilities"),(0,i.mdx)("li",{parentName:"ul"},"Control Aria streaming capabilities")),(0,i.mdx)("admonition",{type:"caution"},(0,i.mdx)("p",{parentName:"admonition"},"To be able to use these commands, follow the ",(0,i.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/sdk/setup"},"setup instructions")," to install the CLI, and pair your glasses.")),(0,i.mdx)("h2",{id:"help"},"Help"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"aria --help\n")),(0,i.mdx)("p",null,"will show you available options and subcommands."),(0,i.mdx)("h2",{id:"connecting"},"Connecting"),(0,i.mdx)("p",null,"You can connect to Aria glasses via Wi-Fi or USB."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Wi-Fi: you will need to specify the option ",(0,i.mdx)("inlineCode",{parentName:"li"},"--device-ip"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Pair your Aria glasses with the Mobile Companion app to get their IP address by tapping Wi-Fi in the Dashboard"),(0,i.mdx)("li",{parentName:"ul"},"Go to the ",(0,i.mdx)("a",{parentName:"li",href:"/docs/ARK/mobile_companion_app/#dashboard"},"Mobile Companion app page")," for screenshots and further instructions"))),(0,i.mdx)("li",{parentName:"ul"},"USB: you don't need to manually input the device IP when it is plugged in via USB, the CLI will automatically connect",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Use the option ",(0,i.mdx)("inlineCode",{parentName:"li"},"--serial"),", if more than one device is plugged in via USB")))))}m.isMDXComponent=!0}}]);