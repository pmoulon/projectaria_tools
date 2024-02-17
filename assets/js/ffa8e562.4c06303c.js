"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3422],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>m,withMDXComponents:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){return function(t){var r=m(t.components);return n.createElement(e,i({},t,{components:r}))}},m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(r),u=a,p=d["".concat(o,".").concat(u)]||d[u]||h[u]||i;return r?n.createElement(p,l(l({ref:t},c),{},{components:r})):n.createElement(p,l({ref:t},c))}));function x(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},25957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const i={sidebar_position:30,title:"Device Calibration"},o="Project Aria Device Calibration",l={unversionedId:"tech_spec/device_calibration",id:"tech_spec/device_calibration",title:"Device Calibration",description:"Most sensors in Project Aria glasses are calibrated extrinsically and intrinsically, to rectify from sensor measurements to real quantities in the physical world. Extrinsic calibrations model the 6-DoF pose among the sensors, while intrinsic calibrations model how sensor measurements maps to physical or geometrical quantities in the physical world. We also provide the extrinsic pose for the sensors in the CAD model to indicate where sensors are designed to be.",source:"@site/docs/tech_spec/device_calibration.mdx",sourceDirName:"tech_spec",slug:"/tech_spec/device_calibration",permalink:"/projectaria_tools/docs/tech_spec/device_calibration",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/tech_spec/device_calibration.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Device Calibration"},sidebar:"tutorialSidebar",previous:{title:"Recording Profiles",permalink:"/projectaria_tools/docs/tech_spec/recording_profiles"},next:{title:"Data Formats",permalink:"/projectaria_tools/docs/data_formats/"}},s={},c=[{value:"Further resources",id:"further-resources",level:3}],d={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.mdx)(m,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"project-aria-device-calibration"},"Project Aria Device Calibration"),(0,a.mdx)("p",null,"Most sensors in Project Aria glasses are calibrated extrinsically and intrinsically, to rectify from sensor measurements to real quantities in the physical world. Extrinsic calibrations model the 6-DoF pose among the sensors, while intrinsic calibrations model how sensor measurements maps to physical or geometrical quantities in the physical world. We also provide the extrinsic pose for the sensors in the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/data_utilities/core_code_snippets/calibration"},"CAD model")," to indicate where sensors are designed to be."),(0,a.mdx)("p",null,"The following table shows what calibration is available for each Aria sensor."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("td",null),(0,a.mdx)("td",null,"Count"),(0,a.mdx)("td",null,"Has intrinsic calibration"),(0,a.mdx)("td",null,"Has extrinsic calibration"),(0,a.mdx)("td",null,"Has extrinsic in CAD")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,"Camera"),(0,a.mdx)("td",null,"5"),(0,a.mdx)("td",{rowspan:"2"},"Y"),(0,a.mdx)("td",{rowspan:"2"},"Y"),(0,a.mdx)("td",{rowspan:"2"},"Y")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,"IMU"),(0,a.mdx)("td",null,"2")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,"Mag"),(0,a.mdx)("td",null,"1"),(0,a.mdx)("td",{rowspan:"3"},"Y"),(0,a.mdx)("td",{rowspan:"3"},"N"),(0,a.mdx)("td",{rowspan:"3"},"Y")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,"Baro"),(0,a.mdx)("td",null,"1")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,"Mic"),(0,a.mdx)("td",null,"7")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,"GPS"),(0,a.mdx)("td",null,"1"),(0,a.mdx)("td",{rowspan:"3"},"N"),(0,a.mdx)("td",{rowspan:"3"},"N"),(0,a.mdx)("td",{rowspan:"3"},"N")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,"Wi-Fi beacon"),(0,a.mdx)("td",null,"1")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,"Bluetooth beacon"),(0,a.mdx)("td",null,"1"))),(0,a.mdx)("p",null,"In summary:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Cameras and IMUs are calibrated both intrinsically and extrinsically. We also provide the extrinsic in the CAD model. We assume the accelerometer and gyroscope for each IMU are co-located and thus they share the same extrinsic."),(0,a.mdx)("li",{parentName:"ul"},"Magnetometer, barometer and audio are calibrated intrinsically and we provide the extrinsic in the CAD model. We did not calibrate their extrinsic parameters in the factory."),(0,a.mdx)("li",{parentName:"ul"},"GPS, Wi-Fi beacon and Bluetooth beacon do not have calibration attached, as their signal are already rectified by their calibration before read-out.")),(0,a.mdx)("h3",{id:"further-resources"},"Further resources"),(0,a.mdx)("p",null,"Go to ",(0,a.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_utilities/core_code_snippets/calibration"},"Calibration")," in Device Utilities to find out how to access device and sensor calibration."),(0,a.mdx)("p",null,"Go to ",(0,a.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/tech_insights/camera_intrinsic_models"},"Camera intrinsic models")," and ",(0,a.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/tech_insights/sensor_measurement_model"},"Sensor measurement model")," for how we model sensors mathematically in calibration."))}u.isMDXComponent=!0}}]);