"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1085],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>A,mdx:()=>u,useMDXComponents:()=>l,withMDXComponents:()=>c});var i=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},r.apply(this,arguments)}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=i.createContext({}),c=function(e){return function(t){var a=l(t.components);return i.createElement(e,r({},t,{components:a}))}},l=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},A=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,n=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=l(a),A=o,p=c["".concat(n,".").concat(A)]||c[A]||h[A]||r;return a?i.createElement(p,s(s({ref:t},d),{},{components:a})):i.createElement(p,s({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=g;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[p]="string"==typeof e?e:o,n[1]=s;for(var d=2;d<r;d++)n[d]=a[d];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},94147:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>n,default:()=>A,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=a(58168),o=(a(96540),a(15680));const r={sidebar_position:80,title:"Device Timestamping"},n="How Data From Project Aria Devices is Timestamped",s={unversionedId:"tech_insights/device_timestamping",id:"tech_insights/device_timestamping",title:"Device Timestamping",description:"This page provides an overview of Project Aria devices are configured to create time aligned VRS recordings. Go to Timestamps in Aria VRS for how Aria data is formatted. Go to Temporal Alignment of Aria Sensor Data for Project Aria data is temporally aligned and provides information about how to finely align IMU, barometer and magnetometer data.",source:"@site/docs/tech_insights/device_timestamping.mdx",sourceDirName:"tech_insights",slug:"/tech_insights/device_timestamping",permalink:"/projectaria_tools/docs/tech_insights/device_timestamping",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/tech_insights/device_timestamping.mdx",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80,title:"Device Timestamping"},sidebar:"tutorialSidebar",previous:{title:"IMU Noise Model",permalink:"/projectaria_tools/docs/tech_insights/imu_noise_model"},next:{title:"Temporal Alignment of Sensor Data",permalink:"/projectaria_tools/docs/tech_insights/temporal_alignment_of_sensor_data"}},m={},d=[{value:"Aria device hardware",id:"aria-device-hardware",level:2},{value:"Mono Scene/SLAM and Eye Tracking (ET) cameras",id:"mono-sceneslam-and-eye-tracking-et-cameras",level:3},{value:"RGB camera",id:"rgb-camera",level:3},{value:"IMUs, barometer and magnetometer",id:"imus-barometer-and-magnetometer",level:3},{value:"Global Navigation Satellite System (GNSS) data",id:"global-navigation-satellite-system-gnss-data",level:3},{value:"Spatial Microphones",id:"spatial-microphones",level:3},{value:"Bluetooth and Wi-Fi",id:"bluetooth-and-wi-fi",level:3}],c={toc:d},l="wrapper";function A(e){let{components:t,...r}=e;return(0,o.mdx)(l,(0,i.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"how-data-from-project-aria-devices-is-timestamped"},"How Data From Project Aria Devices is Timestamped"),(0,o.mdx)("p",null,"This page provides an overview of Project Aria devices are configured to create time aligned VRS recordings. Go to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/data_formats/aria_vrs/timestamps_in_aria_vrs"},"Timestamps in Aria VRS")," for how Aria data is formatted. Go to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/tech_insights/temporal_alignment_of_sensor_data"},"Temporal Alignment of Aria Sensor Data")," for Project Aria data is temporally aligned and provides information about how to finely align IMU, barometer and magnetometer data."),(0,o.mdx)("h2",{id:"aria-device-hardware"},"Aria device hardware"),(0,o.mdx)("p",null,"The figure below illustrates the various hardware components in Aria devices and how they are connected electrically. The device consists of a microcontroller unit (MCU) that interfaces with most of the sensors for configuring and controlling them. The MCU is responsible for timestamping the data from these sensors, which enables capturing the multi-modal data with common timestamps across the motion sensors, microphones and camera sensors. The device also has an Application Processor (AP) that runs Android High Level OS."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Project Aria device hardware diagram",src:a(29692).A,width:"387",height:"324"})),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Figure 1:")," ",(0,o.mdx)("em",{parentName:"p"},"Project Aria device hardware diagram")),(0,o.mdx)("p",null,"The device timestamp is ideally assigned, by the embedded micro-controller (MCU), to the measurement as close as possible to the time the measurement is captured. However, the meaning of the event effectively timestamped and the way the timestamp is obtained differs significantly depending on the sensor."),(0,o.mdx)("h3",{id:"mono-sceneslam-and-eye-tracking-et-cameras"},"Mono Scene/SLAM and Eye Tracking (ET) cameras"),(0,o.mdx)("p",null,"The Mono Scene (also called SLAM) and Eye Tracking (ET) cameras have electronic global shutter sensors. They are triggered at regular rate. Their image timestamps mark the center of the exposure window and are derived from the value of a MCU counter. The timestamping error is expected to be upper-bounded by 19us."),(0,o.mdx)("h3",{id:"rgb-camera"},"RGB camera"),(0,o.mdx)("p",null,"The RGB camera has an electronic rolling shutter. It is triggered at regular rate, often a divider of the Mono Scene camera rate. The timestamp marks the center of the exposure of the middle row and is obtained similarly to the Mono Scene camera timestamp."),(0,o.mdx)("h3",{id:"imus-barometer-and-magnetometer"},"IMUs, barometer and magnetometer"),(0,o.mdx)("p",null,"The two IMUs, the barometer and the magnetometer sensors operate respectively at 800Hz, 1000Hz, 50Hz and 10Hz in free-running mode. We timestamp their data-ready signal on the MCU. Because of on-chip signal processing operations, those timestamps correspond to a time point after the instant for which the measurement is valid. Go to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/tech_insights/temporal_alignment_of_sensor_data"},"Temporal Alignment of Sensor Data")," for how to finely align the data with the images."),(0,o.mdx)("h3",{id:"global-navigation-satellite-system-gnss-data"},"Global Navigation Satellite System (GNSS) data"),(0,o.mdx)("p",null,"GNSS data is timestamped on the AP at their ",(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("em",{parentName:"strong"},"time of arrival"))," from the receiver of and converted to a device timestamp. Conversion of the timestamp is based on a bidirectional communication between SoC and MCU and is expected to introduce less than 100us of error."),(0,o.mdx)("h3",{id:"spatial-microphones"},"Spatial Microphones"),(0,o.mdx)("p",null,"For the audio stream, each samples are individually timestamped with an accuracy expected to be better than one audio sample. This synchronization relies on the MCU periodically injecting an encoded version of the current device timestamp into an unused microphone channel; the AP decodes it on reception."),(0,o.mdx)("h3",{id:"bluetooth-and-wi-fi"},"Bluetooth and Wi-Fi"),(0,o.mdx)("p",null,"Bluetooth and Wi-Fi scan data is received and timestamped on the AP using a time estimate of the MCU time. Conversion of timestamp is based on the protocol between SoC and MCU and is expected to introduce less than 100us of error."))}A.isMDXComponent=!0},29692:(e,t,a)=>{a.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYMAAAFECAMAAADyV6IsAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAIQUExURf///+Xm58rMz6GlqWxxeJCUmvLz9aissbCzt8HEx5aantnb3p6hpm5zeubn6m5+kFhneVFebV+Tz22x/1J1nmZmZ4yNjr/AwTMzM6amp1lZWszNzuXm6NnZ20xNTUBAQJmZmrKztH+AgXNzdLi4ub3Aw290ejpBSmFnbmqq82Ob26Omq/Ly80dOVtjZ20RXbkhfekFQYnyAhomNklRaYnd8g1V9q1yMw0tmhn+DinN4f2Vqcmai587O0M3P01NZYVFXX3l+hEZNVaGkqLW4vF9lbD1IVmtweJygpU9WXk5UXEtRWVFebkROWlZkdlBdbFN/mUJjVUZ+U0RiY0JZXVTEXkpxeU2hWUqQVlmEt1GzW1K7XUiHVU+qWkFkTz1STT9bTjxKS0uYV0R1UkNtUU5ukmRqcViDtGej6JaanzxDTF5ka2Job1VbY1BWXoqOlXV6gUBHT1RbY7i7v1qIvV6PyHp/hUFHUK2trmFnbzxDS1lfZ0tRWk6jWbm8wM/R1VJZYcTGym1zenl+hVJYYERLVEtSWoSIjmBmbXZ7gWhtdEpQWV5jbFRaY5icoLCzuEBHUF1iaouQlVZdZVddZkxheo6ZpouPlq2urz9GTkRLU1hdZXyAhz5FTpKWnENKUoiNkmVrcnB1fK6wtObm6Le6vbe5vVpgaKSnrNrb3V1ja0RKU32CiWFmbm1zecLFyIBIDuEAAAABYktHRACIBR1IAAAACXBIWXMAAABIAAAASABGyWs+AAAAB3RJTUUH5wYMCyMcpP4PTQAAAtx6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAAEiJnVZLluMgDNxzijkCSCDZx3EbvJv3ZjnHnypIYrfjpLsnfrExIKlKPxz+/v4TfuGXUi5BV9188mjJ1D6seJZoYsXcZmtahb+Icea4uJZcNebqMSt2TTbnyReXYKWoL7mVbHhClSqERHTTFhddfdLFJ4OgVZqxJJHvtlpz5RoNWAqWbSMCXcbCY/tGJLsazH1QJK9egB3GcJ8suTjNthAXiRJhWbBkuhTJOdvJ6lij5ckzrqgLDG3ef9Icm4I027DRZdOkMy+MogrugnsdSvBUh8+I1SepNMBl0icQieGIBlDgTfhKbO5kZtBuQHdbR0AEZkH9HoQdd8Ay2F7AjhAQW3fE3Id7gWChJ4kPuMBEmqZwd+oxDnTus+pOpwHVLTwYK0YVRuH04PGmM75SmSsy50u14bPeo1oorFS+O3RcunZnLGaddIVURvgpjGRb4Vjl1M3B8FF38Dp8cxZ7Vh24ieL4w4naDjFMtlJon6G5O/n+lqyZk7ZPATmBoMNeQsauI0sLA77Zgnll7eXEhLAE78TirC+YLUIm4IOUEeZRxcYJ6QMSR8tEss/s6O5UjyxINFw4kQlZur+g6BNZFCeoXJINz2yvyOYP2Kca5HnpUcaqYr0Zi6ZXf/2C1APFI34nxCOC4YnYZb19Hc3wKpyXBC960R19+G6UXiE9tJFbYxuluuTdAyXn8YRCYY9SFfRrtX73ktmSdMEYckGLplIgox3RW3XnwnjsrraxZ89mPv/E+pXxMPQ9q3tjvR8ONnamu0T4XwRnlWHX+QpFb2zs55sxl29NNgO9NrTj0g9POFvUdVKcmniyK1cjFkd1V7xnjX00IQWMePHMxIz95EHks7JD7mDfWX6Lde6nSGfJdlvOYH+GNbwG+4S1Wz4b/nRAHkrjbSEcd46jfXxo0GA4f2uMpYtPnd57ekH7+FYJ/wAtMB8wAnU9LgAAFNJJREFUeNrtnY1/28Z5x0HEBinQUhISAEHxTS8ljhQBviKk4nG2k6mM6nVdwoSlKMmUZEvdmjpd0m3Jum6Jk6zLmmTLti7tlm3t1m3tupfuX9xzIGVRokgCBEiQ8vP7SCBeiLsH98U9d4cD7xgGhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAo1FjysChn5BkXwVPXrqOc0bWnxswF1ziUU7o2Xk5gr7tt+BWS14cM3NYCjwzcFjJwX8jAfSED9zUXDPwLDsjvdlIP1DwwuLHIO6DFG26n9Rwz8C+OZWKfFmc1J8wBgzFN7JPP63ZiI4OZrUcgAxtaevoZs3p6iCNEBjb0bCBoVoFnkMEkbF4QTCMIBoUFZOA2g8Dg2JEBMkAGyMCERIkLySFOksPwKcvLEZkKGYxvcyQU5WKhaCgWCUU4WDPNIJ5Yhs+VUFwMrcAHMhjfZhFu52U5JEsi3MySJJtlEJFX5VhIXpMS6wYSZGCHwXpMNhiI3JpsnsGaLMLdLy8nElFkYJfBeiLcyQdxKR43w2A9vrouxxIinAGJvyqvIgO7DKR4YsVgAKkaM8Mgsi4vr0bEGBcSvyRGOGmdi8AHMrDDYE2OdX0Rx5lhMNiwJ5lBUiEp63Z3bA6HIxIHGSAUDsNWSHKOQQAUDKY36PoG3diYQQaiFJZlkQvH5UTYDoMkyahJjaevvIIlHtaj0nc2s2yWbmU7K8axCd83FxiQXL6QCwbydD2fy+fzwkwykIDCl+S12FrcxBV6lwaYWCzBAhKelHSeIVqR6EXiSZIiYCE6z+u8lszCMWVCDM4Mu8AgEEyTQJdB3xPVmWHARZehQIya+vZ1Qp4zrrbPxFTS+Mj6srzCEB+j+ZgUq2SYrMaQJJNk2SLv07Mq64TNQw27wKBc2XycD8rgi9IzySC6HI+E5BgXjXQiH6bnCdVN71KfiUpnR1JTUsCAZRT6R1KKAlsMU9IUnVdLmnbxLU7215x45aLXsD5flCtUe3zRbJYH69Ay/fXEcng5AZu3bpNhunO68sJFE3ldBYfEAwr+jAHkAzVLGdAdvMfDZMhFmwfHZfpqqM1nhvX5omBOmHFfJIVFUCSyLq7TfPAiuT5ePlAVrahr2VKqpBHfKQMopFNGPtCLiqb/hsYrKbP5YOvLZMvkJVCbB+aDcqBSKwdy1AsZvmgW88GFW2rE3Te4PIDoeVok+HxqNsuqTLbzl4F9UAaomaTKqlk+qZq2eYk8Z8HmQeVB3qgKbdCPDSE/o/WiCzGTheHHB9aLxtQQm196yYLNg+pFc9hGG8XArokTY3C2hQyQATJABsgAGSADZIAMkAEyQAbIABkgA2SADJDBuAyEwY/HkcH4DLhnLPwO51nHL/AqMVjq9IqNNuT6xT43/9PPmv492hIyGGbzTZq0JnpxbhkMbtm+8ieYgW97QARemrRmfrz8FfjeVxxHMA8MJv47fcMZLZmw5LqV7v8rxYC7seizP3qib8h4FTdNuaKOM3LeFc0FA86/bX/0RO+Ql4i85lwRx90ld51HMB8MJq0lc66IOqNJvOuMDKhu3jT3vVuTcEUuMvD+5uyMo+I1a4rJtpw1TYCByZE0vvpbX7U92saY6rPwa18z2dT6bdODhLg7ZoiFkTRMtfKHjLYxphy20O5VOM/A0pMsMxKcLjcct9DmVcwBg4DTdRFXGEz12fVcMagGRqhqwr5RQgbDLHz5lfoIvfLyCOuqr44Kov5aGhkMtLD6SmOkXhmRE77eHBlE8+vIYKCFgfpoBjut4da9OjqIxqvIwBaD5ojLQQbIABkgA2SADJCBYwx26/Vd+K/v7DV2aH1+B1K+Xt/ftcSgCWfdqxuBtRtGs6BJkIEFBgfN5kG9fnjYaLcNBvUj2Dras8LgPqT4A7Lb2D/YvdcglMFeExmYZtBotJvNdqOxR5ptY88uoclXt8SgcdRsHBzuN45pPjByAOaDMRjskz0jHzSbR2OUB8f13aOdY0BBGTSbzXvIwCoDQkj7fuOMQZuQuiUGO4f7x7tHcCpl0IaAkIF5BlD4Hhr5gMLo8UVtawx2SXu/cXh83EBfZJ3BwfE+2T1l8AC8SBPK5P37dXLfWt30EErkOtlBBmMwuHcMTmh3p+NQjFolfB4DDYvtg2ad1k73aC21k5vqyMAsA2yjIQNkgAyQATJABsgAGSADZIAMTL5XUbbP4DVkMNBCfL/IfQbBl1/ZaQ7Vzsj37NKv1YcH0ay/WkUGQyysloWhapl437QyPAgB3zedhoU2rwIZIANkgAyQATJABsgAGSADZIAMkAEyQAbIABk4yWB1XZSikrgmxcIiMnCHgbwelldMT0iNDCbCYDkc4USRk0xNzI4MJsEgtBaXw6Isy2vIwCUGdF71uCguh2KmJwVHBmcy0Uc1mkF0WZYTq5YmZh9qYVUIXjgcGDFawvwxIHRe1RMSDAq1AtlMC3QzL4xpfScnhMxNyHy5hWmyeT42Esz3bueDrYtMCCE1y1lpphjUqnDdJCgUNoLVQtkBBpZ1zsJyjlSD1VZZ2Ai2AkI5DQzgcEsIBNNloRVsEQHywYbQOSykO5Tgf6NVEWhXcpp+uUq/XKFr5XRnAd+tBulXZpLBSTnY2iTBQieHu86g0ILYA2RTINV8TcidQAoDhZxAApv5cq0lEEHIV2FRSxuHuwzSJACblZqwWQjmjXNzQq1Szgn5E1jQUIRN44zZZFApBHMtYsz4bIWBf/v2N2ym/Tdub/svWlipBVuFYKAAMCpgRqVmMCAbwY3qRqWVE2i2yFMjjcOGtZC+QiFHjd4UAMbvkHRw43dJJXBCmVWDxkIAWIVA73XNFINAoVJLk2COvr9W7ZQHuVEM/N+8TV4n37LJ4FsQxu1v+s9ZuEnHG6/Qyb/z5XwF0rfDgB7K5YVCl8EJvU96GJThBsq3jHsHGBj7jPmSy3nSWQgCnUu8dzbx2WJQrp0Eu+VBTqjALUf/hzF4+EZnlohvv2RP3+4E80bPHOxVGvXJZoCk0zV627ZyBoNCJXjSItV0l0E5F+wc7jIwTs2Xg8ImBFCtBYInFcjWlUBrAwAYC3oG2ZhdBvS6Ca0b5chJOiiQAhl+RuD3tt5863VIvO/YHHb8OxDG62+9ufX7Z/EJOVhskD+oFah3qeVrLYNBq5YrVHOFQr72hzXw8elcrpAPXmQgQJ0iBx4fvpxLl+HcSotACWAs6BknwVllcKZ0IN3zMdQXcdzW2+844IveeXvrUgsD+Sr1LoGN6mPb6N5qcCOYNvLoxoC2jDHuIz23cxlpum0s+s6YTQZmdWr9lt3xsb1bgywMGE2C/CSH/70aDBxTv4Xdmz1t3Thk4BSDKQgZIINJMoiGolwsQp8a0f9QCHaAYshgigxCcoiTRC6akGMc7UVI/BEsZAkZTJ9BWI5LtDctKq/QzaFCBpNhsL4mxTkxIcYTMWTgBoM1MUYdUESMS9QLIYNp14sS8TVZWpFDofia0bMfQQZTZxCTpDAXDnPcapgupVUuFEYG02VgXchgbOuX7M5NtLCEDOxY79++Tb5rk8F3SacjDRmMYT0F8MeEfG9huG6NOP49AqEABmRg3fqHnf4v8idkuF4ccfz0/BeQgXXrl7xGR5r9PhzajeZdwnwwpvVbb79juzzodKM5aKGF6dWuAgOQ3XlzT893zEIr06tdEQZOySkLLQ1/hAwmYqGl6dWQgWsMHg+HhwyQATJABsgAGSCDCTPY26/X70MFaB/W67vGzGp7xs4dZDAlBnsHh/X6Ub3RplO3kOb9o/2dw3bj+HBn/2gfGUyHQf0AFvfuN9rHB3vAoH4IWJqNNqT/7j1kMB0G7W6h0G4e1oHB7tGBMecjadfvoS+aHgM6txowuEfukWZj7379APLC7v6DozoymA6DujGpF6Es6m3SbN6jcz7+KS0K9tvIYDoM9o7a93faR5TB3gFpPjjYaR4f7R0dN+8fPriCDPzv2kr6d/2TYNDYq7fbUBvdadIZ0nb39tvtB7uN3c7OK8bgvTcfkZu2GNwkj958z3kGT0ob7f0PHtGO4A9tMfiQBvHog/eRwRiX+mePup3x3z/XRf/nH10W/fajQV36p2c/+gtkYPlSf/DxJ53Uu/tpj/7yLXIJhG1C7nx6ue52Avnk479CBpYvFeJ694M3+nzRZ399pz/2vyF/O8wXvfHBu1gejMkA9P4HP1w8H9Pfkf7Y79wdaNjiD6EscNLCJ49Bvz69hMGnn3IjhQyQATKY8nsVp9OrIYOJWIjvF7nPwNL0ashgQhZamF4NGUzWQltXgQyQATJABsgAGcwNg9b2VWAw8ComwcD/ucPWf+4fENO4DBy30NZVTIIB96PPW6N+pmVBrc9/NCiicRk4bKHNq5gIA86/bWq40YemvuUdfP9cxuDHPzbBwKyFzmnIVUyGgTktkSWbIXQZyCFJlqWoKMtrxrYkRuKyGI2u02Gl5kHuMfASu+OVPmYgSmvyihxZFSN0WxLDYkheiS+HVuSYrQimJPcY3LT5qkoPAy4aFyNyfK0zZg4dvkiS/15edTttzco1BkuE2HVGjxlE4ssRLrYiyt18wK3JYY4yiLidvKbkGgMvMLDpjB4ziCdWQ1J8dRVKhhhlsCKvhGLi8qokzwUE1xg8BwyesxdEl4EYEUHR9URC4uIhjgtLEmyHY1Amh+1FMCW5xWDJeNfHnjO6pG4an4sb/4LcYuA1GNhzRpe1D+ZRk2IQCnMr0orhGELGjuiKKMViEt2kexauP3/n+ev2Rke7jMFnn7mdotY1KQa0YITaiSRLYsKopK8npOV4SJaW5VBnJOQFYnd8urGfVcyYJscgFonIYZrcYWMKufXEyioXkrmoLCGD85ocAy6SWI6eNZSia3F5PSQvy4kYMjivyTGIJNaiXHydi8RDdDJFKQyN15BM15HBeU2OgUSHwF9NJGTIDSH69GBZFkPGrKLI4LwmxSAWiRlTQcCSM1pOdIIILmrUkTozRCCDU02jfRCVLo0ZGZymhEttNNvtg6XFD+9+/8Ob7/fuew/23f1w8T23E9VqWsxtO/kODeAfzvdPfUH3feF2mlrV/D4v+pgG8I/n9xkjAj90O02tan6fm75L0/ufzu/bpvu2xwvPPc1x/8EnhPzzha7yJXBGX9jtpp665rgf7eM+V2Q4o7lzRfPcnwzO6M2L+35CyE9cS8txNc/vVXxC+mqhSz/96dy5orl+v+jjR/37Hs6fK5osA//QaTleGHrUPzrAf/nX/tN+9rOFUTIRsjX5OXuaJIMbi/z4WrzhcICTC/myAGeEgX9xrKBPteh3OMDJhbxoLydMkMGYQZ/K53U4wMmF7LNXu5hdBv1ROMXA8ZBt1lCQATJABsgAGSADZIAMkAEyQAYgNYsMps1A0WGRIWxny+fJ8paiQAZOMCBw46eAQZZPMh49A/lA9WU8jMeTzKjIYDoMlBKT1Qib1HidZ0mJVZiUUtI8vFZMKchgOgx8GsPzhFUyTJYwhGUVVmOYIs+nGJYgg+kwYJWkliWsBiVClwHc/vQRPDKYHgOflmKMfMCe5gOV5gPLDFhP7zd9Hl/PZpZle7Z8LGMp5KvPQNV8DC0PihrPaKl/g/JAL0J5oFhk4CHFnm/ySg8Dtagpun6GSOm/wMtD9vD0JJ7tt8SIw1oVbnYZZFX6x8KShQqSh/13WLKw6fEwKjs6irMASwrxwO0PScNki8UiZZAtKgYIXlcZFVZ5pZRl2GIpxTM+uqrySnJoyCyBRZIMSI8rw8BmFI8DVDW2yEMq01IlVUpqUKyoWiapUQh6ppNmOlvSGY2HRPVpSV4zvseeD9m/7e0JmdWg9QL5E/KBj2glhqTAU+pakiWanlL5lE4yDE/0lIdPaZCLM3SV1VI00ieRgU9nknqXATQ5eKVTweJLcKyb0OCCVPIfhK5AVuDJz4mRB89C9m//gpDrPSGzSopVCQ8MPCSrKllIcshDGZ2F9oyegapbUs9CZEoGclqSlmZMsQQmZJ9QBin6am+yy0DtMICbmC8yXf+f9UCxz5D/NBgoChT6vyS9Id+6/gvjve/nu2+n/JfBIFPKFCmDTokAiQx/na1Sp9pgRKIYpRdLFEVXsppeyj6RDLJQGECCQ27IEEbLqDowoPeu4YaoR2I1vlSENbpT4zO6qpbgVla7bophH77YnRrnzulcOQYDj5ZKUgbQdoFCC+BqSSO1VUbpMiA0sxkMsqSTqbKKMkcMMhrRrEQ2mEGpaID4ZYoo1HdTx63Q4BUjWTI6jUdVCMDgiZbiYRXSmD09boS89dF/9+aD/zEYQGnAUAaMXsqAQ2KZUiqZKrGk6NNYyiAFB+iqUYtLFZOpTLHIFovzw4BeE22c0UdFUL3PsLReT2tHGboNXpVNZkdE4Wwbbeuju+fKAw81AappHh6qqSWWoVXVjJJRWZIp0f1gKT2QpPUx+I7KFzOMCs5LnScG1FrGeFQEdQ6eZGGF1kL4lMLAnQslp5YcHoXj7eRbCyZCvry9YDk1ZoEBVGYg5RmlxPqgIE3S+ori8WSLtP7iIT444PF4hkfhzrMKz+hY54YBVOuhvFRSCpRiRn0lW9T0JK3GEFr9o1vZ4VHg8yKbDHy08p7iab092WGQ9EB7t1QCL0XLCh99gIoMJsrAo+tKSvMkSUkvdRiUjPJAK+lFWhFP6dMvD540BvTJEG3CeuiSpc2o06dGdJtWLs49C0UGE2HgdkohA/dTChm4n1LIwP2UQgbupxQycD+lkIH7KYUM3E8pZOB+SiED91MKGViWb9vhAJ9EBo7/+B0ZWI/1xqKPHVe+SwaBcOx3+k7nMJ+94dsmO27L+NOQXTah2NL/qmMZe0GqvuRsyJcEODsMnNbPf+XEuC2/+j+HQ74swCvLAMy1r1tOh3zL2iXMPYMrKWTgvpCB+0IG7gsZuC9k4L6QgftCBu4LGbgvZOC+kIH7QgbuCxm4L2TgvpCB+0IG7gsZuC9k4L6QgftCBu4LGbgvZOC+vJmxGHiuuW34FdI1z1gMmKeueR141we1sOC99tR4COiYN06884bifWPmAhQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVD/D+MUNpnbWin9AAAAGXRFWHRkYzpmb3JtYXQAYXBwbGljYXRpb24vcGRmHoGzwQAAACB0RVh0cGRmOkhpUmVzQm91bmRpbmdCb3gAMzg3eDMyNCswKzBJgJ7gAAAAE3RFWHRwZGY6VmVyc2lvbgBQREYtMS43vTg77QAAACV0RVh0eG1wOkNyZWF0ZURhdGUAMjAyMy0wNi0wN1QyMjowMDo1MVVUQ0PVwacAAAAndEVYdHhtcDpNZXRhZGF0YURhdGUAMjAyMy0wNi0wN1QyMjowMDo1MVVUQ6ggcF0AAAAldEVYdHhtcDpNb2RpZnlEYXRlADIwMjMtMDYtMDdUMjI6MDA6NTFVVEOBc2O4AAAAOnRFWHR4bXBNTTpEb2N1bWVudElEAHV1aWQ6Mjc4M2U3NGMtYjI3ZS00ZDBlLThjNjYtYzQwN2UwMjQyOTJlBK6zGQAAADp0RVh0eG1wTU06SW5zdGFuY2VJRAB1dWlkOjI3ODNlNzRjLWIyN2UtNGQwZS04YzY2LWM0MDdlMDI0MjkyZY0dCgQAAAAASUVORK5CYII="}}]);