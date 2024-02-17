"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8593],{15680:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>p});var o=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,i=function(e,a){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=o.createContext({}),p=function(e){return function(a){var t=m(a.components);return o.createElement(e,r({},a,{components:t}))}},m=function(e){var a=o.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=m(e.components);return o.createElement(d.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},f=o.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,n=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(t),c=i,u=p["".concat(n,".").concat(c)]||p[c]||h[c]||r;return t?o.createElement(u,l(l({ref:a},d),{},{components:t})):o.createElement(u,l({ref:a},d))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,n=new Array(r);n[0]=f;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:i,n[1]=l;for(var d=2;d<r;d++)n[d]=t[d];return o.createElement.apply(null,n)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4021:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(58168),i=(t(96540),t(15680));const r={sidebar_position:60,title:"Desktop Companion App"},n="Project Aria Desktop Companion App",l={unversionedId:"ARK/desktop_companion_app",id:"ARK/desktop_companion_app",title:"Desktop Companion App",description:"Overview",source:"@site/docs/ARK/desktop_companion_app.mdx",sourceDirName:"ARK",slug:"/ARK/desktop_companion_app",permalink:"/projectaria_tools/docs/ARK/desktop_companion_app",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/desktop_companion_app.mdx",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,title:"Desktop Companion App"},sidebar:"tutorialSidebar",previous:{title:"SDK Troubleshooting & Known Issues",permalink:"/projectaria_tools/docs/ARK/sdk/sdk_troubleshooting"},next:{title:"Machine Perception Services (MPS)",permalink:"/projectaria_tools/docs/ARK/mps/"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:3},{value:"Before you start - Device OS Update",id:"before-you-start---device-os-update",level:2},{value:"To install",id:"to-install",level:2},{value:"Login",id:"login",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"Pairing",id:"pairing",level:3},{value:"Machine Perception Services (MPS)",id:"machine-perception-services-mps",level:2},{value:"Use Desktop App as CLI",id:"use-desktop-app-as-cli",level:2},{value:"health",id:"health",level:3},{value:"vrs",id:"vrs",level:3},{value:"Download your data",id:"download-your-data",level:2},{value:"Visualize your data",id:"visualize-your-data",level:2},{value:"Playback Controls",id:"playback-controls",level:3},{value:"Play/pause/stop playback",id:"playpausestop-playback",level:4},{value:"Overlay Selection",id:"overlay-selection",level:4},{value:"Tooltips",id:"tooltips",level:3},{value:"Menu Bar Commands",id:"menu-bar-commands",level:3},{value:"Keyboard Playback Controls",id:"keyboard-playback-controls",level:3},{value:"Stream a basic visualization",id:"stream-a-basic-visualization",level:2},{value:"Wi-Fi connection via Mobile Companion App",id:"wi-fi-connection-via-mobile-companion-app",level:3},{value:"Wi-Fi connection via Desktop App",id:"wi-fi-connection-via-desktop-app",level:3},{value:"Start Streaming",id:"start-streaming",level:3},{value:"Streaming Visualization",id:"streaming-visualization",level:3},{value:"Stop Streaming",id:"stop-streaming",level:3},{value:"Select a Recording Profile",id:"select-a-recording-profile",level:3},{value:"Start Recording",id:"start-recording",level:3},{value:"Stop Recording",id:"stop-recording",level:3}],p={toc:d},m="wrapper";function c(e){let{components:a,...r}=e;return(0,i.mdx)(m,(0,o.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"project-aria-desktop-companion-app"},"Project Aria Desktop Companion App"),(0,i.mdx)("h2",{id:"overview"},"Overview"),(0,i.mdx)("p",null,"The Project Aria Desktop Companion App, provides the ability to record, transfer, process, validate and visualize Aria's data through a desktop interface. These instructions are only useful if you have Project Aria glasses."),(0,i.mdx)("h3",{id:"features"},"Features"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Handle and select between multiple plugged in Aria glasses"),(0,i.mdx)("li",{parentName:"ul"},"Set the default recording profile for recordings initiated by the capture button or Desktop app"),(0,i.mdx)("li",{parentName:"ul"},"Visualize a live stream of Aria's sensors"),(0,i.mdx)("li",{parentName:"ul"},"Display, extract, validate Aria VRS data"),(0,i.mdx)("li",{parentName:"ul"},"Access Machine Perception Services (MPS), a cloud-based service to process Aria VRS data"),(0,i.mdx)("li",{parentName:"ul"},"Visualize Aria Data as well as MPS outputs."),(0,i.mdx)("li",{parentName:"ul"},"Direct access to documentation and guides")),(0,i.mdx)("h2",{id:"before-you-start---device-os-update"},"Before you start - Device OS Update"),(0,i.mdx)("admonition",{type:"caution"},(0,i.mdx)("p",{parentName:"admonition"},"Before using the Desktop app, you must use the Aria Mobile Companion App to update your Aria glasses' OS.")),(0,i.mdx)("h2",{id:"to-install"},"To install"),(0,i.mdx)("p",null,"Follow the instructions in the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/ARK/ark_downloads"},"ARK SW Downloads and Updates page")," to download and install the app (this is where you'll download updates as well)."),(0,i.mdx)("h2",{id:"login"},"Login"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Read the Project Aria Research Community Guidelines and select ",(0,i.mdx)("strong",{parentName:"li"},"Accept")),(0,i.mdx)("li",{parentName:"ol"},"Log in using the credentials that were sent to you (the same used to log into the Mobile Companion App).")),(0,i.mdx)("h2",{id:"dashboard"},"Dashboard"),(0,i.mdx)("p",null,"After accepting the guidelines and logging in, you should see the Aria Dashboard. The dashboard displays the device info for your Aria glasses and allow you to interact with your glasses, if they are plugged in, as well as links to further information about Aria."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Dashboard of Aria Desktop App",src:t(21415).A,width:"1321",height:"938"})),(0,i.mdx)("h3",{id:"pairing"},"Pairing"),(0,i.mdx)("p",null,"The Desktop App will detect devices that are plugged in via USB. Once plugged in, your device will display as Aria and as Active with its serial number visible in the list of devices next to My Device."),(0,i.mdx)("p",null,"If you cannot see your device, make sure you have updated the firmware using the Aria Mobile Companion app."),(0,i.mdx)("h2",{id:"machine-perception-services-mps"},"Machine Perception Services (MPS)"),(0,i.mdx)("p",null,"Through the Desktop App you can request ",(0,i.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/"},"MPS")," for eligible recordings."),(0,i.mdx)("p",null,"To request MPS:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Go to the Recordings Tab"),(0,i.mdx)("li",{parentName:"ol"},"Select Tools"),(0,i.mdx)("li",{parentName:"ol"},"Select ",(0,i.mdx)("strong",{parentName:"li"},"Request MPS")," in the Recordings toolbar")),(0,i.mdx)("p",null,"Go to ",(0,i.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/request_mps"},"Request MPS")," for more information."),(0,i.mdx)("h2",{id:"use-desktop-app-as-cli"},"Use Desktop App as CLI"),(0,i.mdx)("p",null,"The Desktop App can be run directly from the command line without needing a GUI. It can be found under ",(0,i.mdx)("inlineCode",{parentName:"p"},"C:\\Program Files\\Aria\\v3\\AriaHub.exe")," on Windows and ",(0,i.mdx)("inlineCode",{parentName:"p"},"/Applications/Aria.app/Contents/MacOS/AriaHub")," on Mac.\nYou may print the app's help using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"AriaHub --help")," command."),(0,i.mdx)("h3",{id:"health"},"health"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Usage :")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"AriaHub health vrsFilePath.vrs\n")),(0,i.mdx)("p",null,"Use this to run validity checks on an Aria recording (VRS file). These checks are also run on the VRS file automatically, before the file gets uploaded for MPS processing.\nThe results of those checks can be found under your home directory under  ",(0,i.mdx)("inlineCode",{parentName:"p"},"./aria/logs")),(0,i.mdx)("h3",{id:"vrs"},"vrs"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Usage :")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"AriaHub vrs vrsFilePath.vrs\n")),(0,i.mdx)("p",null,"Use it as a Swiss army knife utility to manipulate VRS files in different ways. Go to the ",(0,i.mdx)("a",{parentName:"p",href:"https://facebookresearch.github.io/vrs/docs/VrsCliTool/"},"VRS official documentation")," for a full list of commands."),(0,i.mdx)("h2",{id:"download-your-data"},"Download your data"),(0,i.mdx)("p",null,"Once you've completed recordings with your Aria Glasses you can access and download these recordings using the Desktop Companion app, if you wish."),(0,i.mdx)("admonition",{type:"tip"},(0,i.mdx)("p",{parentName:"admonition"},"While you can download recordings using the Desktop app, we recommend using ADB or MTP. Go to the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/ARK/ARK_quickstart#download-data"},"Quickstart Guide")," for more information.")),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Aria Desktop App Recordings Page",src:t(67923).A,width:"1321",height:"938"}),"\nEvery recording will generate a VRS file and a .vrs.json file containing the recording's metadata."),(0,i.mdx)("p",null,"To download a recording:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Go to the Recordings page"),(0,i.mdx)("li",{parentName:"ol"},"You'll see thumbnails of all the recordings on your Aria glasses"),(0,i.mdx)("li",{parentName:"ol"},"Select ",(0,i.mdx)("strong",{parentName:"li"},"Pull")," to download the data from your glasses"),(0,i.mdx)("li",{parentName:"ol"},"In the file explorer window, select where you want to save the recording"),(0,i.mdx)("li",{parentName:"ol"},"Once you've selected a folder location, a dialog window will pop up indicating the current VRS file transfer")),(0,i.mdx)("h2",{id:"visualize-your-data"},"Visualize your data"),(0,i.mdx)("p",null,"Once files have been copied to your local directory, the VRS file can be visualized using the Desktop App."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"In the Recordings page, select ",(0,i.mdx)("strong",{parentName:"li"},"Tools")),(0,i.mdx)("li",{parentName:"ol"},"Select ",(0,i.mdx)("strong",{parentName:"li"},"Play VRS")),(0,i.mdx)("li",{parentName:"ol"},"When the file explorer window appears, select the VRS file you want to play"),(0,i.mdx)("li",{parentName:"ol"},"Once you've selected a file to open, the VRS player window will pop up and start playing your recording",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Once the visualizer is open, use ",(0,i.mdx)("strong",{parentName:"li"},"Open")," (Path or URI) or ",(0,i.mdx)("strong",{parentName:"li"},"Select")," (Explorer window) to visualize other recordings")))),(0,i.mdx)("h3",{id:"playback-controls"},"Playback Controls"),(0,i.mdx)("h4",{id:"playpausestop-playback"},"Play/pause/stop playback"),(0,i.mdx)("p",null,"The Previous and Next Frame buttons will play at most one frame backward or forward for each visible stream. The Speed controls let you chose to play slower or faster. If there is too much data for your system to process, frames will be dropped."),(0,i.mdx)("h4",{id:"overlay-selection"},"Overlay Selection"),(0,i.mdx)("p",null,"The overlay selector lets you chose what information to display over the frames. The options are:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Hide - there is no overlay"),(0,i.mdx)("li",{parentName:"ul"},"Tags - show stream tags"),(0,i.mdx)("li",{parentName:"ul"},"Configuration, State or Data - show the metadata found in the last record.")),(0,i.mdx)("h3",{id:"tooltips"},"Tooltips"),(0,i.mdx)("p",null,"To know the duration of the image data, use the tooltip found over the time display."),(0,i.mdx)("p",null,"Note that the start and end times show the time range in which image or audio data was found."),(0,i.mdx)("p",null,"Streams that don't contain image or audio data are ignored, and only data records from image and audio streams are considered. So if a recording contains a single image stream that has a configuration record at timestamp 0 rather than just before the first data record (as is too often the practice), while the first data record is at timestamp 15, the playback start time will be 15."),(0,i.mdx)("h3",{id:"menu-bar-commands"},"Menu Bar Commands"),(0,i.mdx)("p",null,"The Menu Bar offers functionality available only there, don't forget to look there!"),(0,i.mdx)("p",null,"The Layout menu's top section let you save and manage presets. Save your favorite stream display configurations, including stream orientation, stream order, which streams are visible or hidden, using the Save Preset command. To arrange streams, see the Context Menu section below."),(0,i.mdx)("p",null,"The commands in the lower section let you control in how many row of how many views the streams will be arranged. Layout Frames 4x2 means using 2 rows with up to 4 streams each. The layout configurations offered depend on the number of image streams visible."),(0,i.mdx)("p",null,"Once at least one preset has been saved, you can recall or delete presets, which automatically get a keyboard shortcut for quick access."),(0,i.mdx)("p",null,(0,i.mdx)("img",{alt:"Project Aria Desktop App Visualizer Layout Options",src:t(94383).A,width:"1020",height:"526"})),(0,i.mdx)("h3",{id:"keyboard-playback-controls"},"Keyboard Playback Controls"),(0,i.mdx)("p",null,"Playback can be directly controlled from the keyboard:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Use the space bar to play/pause replay."),(0,i.mdx)("li",{parentName:"ul"},"The backspace and the home keys will reset playback to the start of the file, much like the Stop button."),(0,i.mdx)("li",{parentName:"ul"},"The left and right arrow keys will read at most one frame per stream, in either direction."),(0,i.mdx)("li",{parentName:"ul"},"The up and down arrow keys will jump at most 10 frames, in either direction."),(0,i.mdx)("li",{parentName:"ul"},"The page-up and page-down keys will jump at most 100 frames, in either direction.")),(0,i.mdx)("p",null,"When using the arrow keys, all frames are guaranteed to be read. Use this feature if you want to be sure to view every frame of your file."),(0,i.mdx)("h2",{id:"stream-a-basic-visualization"},"Stream a basic visualization"),(0,i.mdx)("p",null,"You can use the Desktop app to visualize sensor data from your Aria glasses stream data over Wi-Fi. This visualization does not have the capabilities of the ",(0,i.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/sdk/"},"Client SDK")," and you can't subscribe to the data. When using the Desktop app, we recommend only using Profiles 12 and 18, which are optimized for streaming."),(0,i.mdx)("p",null,"To stream data, your Aria glasses need to be on the same network as your computer."),(0,i.mdx)("admonition",{title:'You will need to use a "non-corporate" network',type:"tip"},(0,i.mdx)("p",{parentName:"admonition"},"Corporate/Institution networks are often protected by many layers of security and firewalls which will impede you from streaming. If you are at home, please make sure you're not connected to a VPN.")),(0,i.mdx)("h3",{id:"wi-fi-connection-via-mobile-companion-app"},"Wi-Fi connection via Mobile Companion App"),(0,i.mdx)("p",null,"You will have connected your Aria device to Wi-Fi when you paired your device with the Mobile Companion App and updated it. Your computer and Aria device need to be on the same Wi-Fi network\nIf you need to change the Wi-Fi network your Aria is connected to:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Open Mobile Companion App"),(0,i.mdx)("li",{parentName:"ol"},"In the Paired Glasses section of the Dashboard, select Select Wi-Fi"),(0,i.mdx)("li",{parentName:"ol"},"Select your preferred network and follow the prompts to connect",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"You can also forget an existing network from the Wi-Fi menu"),(0,i.mdx)("li",{parentName:"ul"},"Make sure it is a non-corporate network that is the same as your computer")))),(0,i.mdx)("p",null,"Once connected, the Wi-Fi network name will appear in the Desktop App under My Device underneath the Wi-Fi icon which will become blue."),(0,i.mdx)("h3",{id:"wi-fi-connection-via-desktop-app"},"Wi-Fi connection via Desktop App"),(0,i.mdx)("p",null,"To connect the Aria glasses to a Wi-Fi network"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Select Wi-Fi on the Dashboard device toolbar under My Device.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Make sure it is a non-corporate network that is the same as your computer"))),(0,i.mdx)("li",{parentName:"ol"},"Select your desired network and enter its password"),(0,i.mdx)("li",{parentName:"ol"},"Select ",(0,i.mdx)("strong",{parentName:"li"},"Connect")," to confirm your selected network")),(0,i.mdx)("h3",{id:"start-streaming"},"Start Streaming"),(0,i.mdx)("p",null,"To start streaming, select ",(0,i.mdx)("strong",{parentName:"p"},"Streaming")," on the Dashboard device toolbar under My Device.\nThe streaming session will then start"),(0,i.mdx)("h3",{id:"streaming-visualization"},"Streaming Visualization"),(0,i.mdx)("p",null,"The Aria stream window will pop up showing Aria's sensor live data. The nature of the visualized data will be determined by the chosen recording profile. We recommend only using Profiles 12 and 18, which are optimized for streaming."),(0,i.mdx)("h3",{id:"stop-streaming"},"Stop Streaming"),(0,i.mdx)("p",null,"To stop streaming, select ",(0,i.mdx)("strong",{parentName:"p"},"Stop")," on the same device toolbar"),(0,i.mdx)("admonition",{title:"Closing the Aria Stream window will not stop the stream.",type:"info"},(0,i.mdx)("p",{parentName:"admonition"},"You will need to effectively click on the Stop button for the stream to stop.")),(0,i.mdx)("h1",{id:"appendix-a---recording-using-the-desktop-app"},"Appendix A - Recording using the Desktop app"),(0,i.mdx)("p",null,"While we recommend recording using the Capture button or Mobile Companion app, here are the instructions for recording with the Desktop Companion app"),(0,i.mdx)("h3",{id:"select-a-recording-profile"},"Select a Recording Profile"),(0,i.mdx)("p",null,"Before you can record using the Desktop app, you'll need to set a recording profile. You can do this via the Desktop or Mobile Companion App. To set the recording profile via Desktop app, select Profile in the device toolbar."),(0,i.mdx)("p",null,"Whenever a profile is selected, its description will be shown underneath. Select OK to confirm your selected profile."),(0,i.mdx)("p",null,"The profile you select will also be the profile used when you initiate recording using the capture button on your Aria device."),(0,i.mdx)("h3",{id:"start-recording"},"Start Recording"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Plug your Aria device into your computer with the provided cable."),(0,i.mdx)("li",{parentName:"ol"},"In the Dashboard device toolbar under My Device, select ",(0,i.mdx)("strong",{parentName:"li"},"Record"),"."),(0,i.mdx)("li",{parentName:"ol"},"Once the recording has started you can unplug your Aria device")),(0,i.mdx)("h3",{id:"stop-recording"},"Stop Recording"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Plug your Aria device into your computer"),(0,i.mdx)("li",{parentName:"ol"},"Select ",(0,i.mdx)("strong",{parentName:"li"},"Stop"))))}c.isMDXComponent=!0},21415:(e,a,t)=>{t.d(a,{A:()=>o});const o=t.p+"assets/images/desktop_app_dashboard-b1359ec33c5ce343359cf4383f13c176.png"},67923:(e,a,t)=>{t.d(a,{A:()=>o});const o=t.p+"assets/images/desktop_app_recordings-d397dca6c10e0d3ddd3bf6901112abf7.png"},94383:(e,a,t)=>{t.d(a,{A:()=>o});const o=t.p+"assets/images/desktopapp_menubar_layout-3a290c0158c592e0059f1fd9519f12ee.png"}}]);