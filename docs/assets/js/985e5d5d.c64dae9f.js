"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:8,sidebar_label:"Panel3",description:"A circle-shaped slider is used for changing the color's hue and saturation."},l="<Panel3 />",o={unversionedId:"API/Panel3",id:"API/Panel3",title:"<Panel3 />",description:"A circle-shaped slider is used for changing the color's hue and saturation.",source:"@site/docs/API/Panel3.md",sourceDirName:"API",slug:"/API/Panel3",permalink:"/reanimated-color-picker/docs/API/Panel3",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Panel3",description:"A circle-shaped slider is used for changing the color's hue and saturation."},sidebar:"tutorialSidebar",previous:{title:"Panel2",permalink:"/reanimated-color-picker/docs/API/Panel2"},next:{title:"Preview",permalink:"/reanimated-color-picker/docs/API/Preview"}},p={},s=[{value:"Props",id:"props",level:2},{value:"<code>thumbSize</code>",id:"thumbsize",level:3},{value:"<code>thumbColor</code>",id:"thumbcolor",level:3},{value:"<code>thumbShape</code>",id:"thumbshape",level:3},{value:"<code>style</code>",id:"style",level:3}],d={toc:s};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"panel3-"},(0,a.kt)("inlineCode",{parentName:"h1"},"<Panel3 />")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"panel2",src:n(9277).Z,width:"200",height:"200"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A circle-shaped slider is used for changing the color's hue and saturation."),(0,a.kt)("li",{parentName:"ul"},"Move the handle around the center to change the color's hue."),(0,a.kt)("li",{parentName:"ul"},"Move the handle away or toward the center to change the color's saturation.")),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"You need to add ",(0,a.kt)("a",{parentName:"li",href:"#small_orange_diamondbrightnessslider-"},(0,a.kt)("inlineCode",{parentName:"a"},"<BrightnessSlider />"))," alongside with it."))),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("h3",{id:"thumbsize"},(0,a.kt)("inlineCode",{parentName:"h3"},"thumbSize")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Panel's handle (thumb) size (height","*","width)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default: 35"))),(0,a.kt)("h3",{id:"thumbcolor"},(0,a.kt)("inlineCode",{parentName:"h3"},"thumbColor")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change thumb's color."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default"),": interactive","*")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},"*","interactive")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The thumb color will be changed depending on the contrast ratio if no color value is passed."))),(0,a.kt)("h3",{id:"thumbshape"},(0,a.kt)("inlineCode",{parentName:"h3"},"thumbShape")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change thumb's shape and apperance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"values"),": ",(0,a.kt)("shapes",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default: 'ring'"))),(0,a.kt)("h3",{id:"style"},(0,a.kt)("inlineCode",{parentName:"h3"},"style")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Panel's container style."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: ViewStyle"))),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Some style properties will be overwritten."))))}u.isMDXComponent=!0},9277:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/panel3-3b7d2d9898197da5851a715050c30f95.png"}}]);