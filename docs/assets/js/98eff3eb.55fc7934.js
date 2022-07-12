"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?l.createElement(k,a(a({ref:t},c),{},{components:n})):l.createElement(k,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,description:"Responsible for managing the built-in components"},a="ColorPicker Wrapper",o={unversionedId:"API/ColorPicker",id:"API/ColorPicker",title:"ColorPicker Wrapper",description:"Responsible for managing the built-in components",source:"@site/docs/API/ColorPicker.md",sourceDirName:"API",slug:"/API/ColorPicker",permalink:"/reanimated-color-picker/docs/API/ColorPicker",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Responsible for managing the built-in components"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/reanimated-color-picker/docs/category/api"},next:{title:"Preview",permalink:"/reanimated-color-picker/docs/API/Preview"}},p={},s=[{value:"value",id:"value",level:2},{value:"sliderThickness",id:"sliderthickness",level:2},{value:"thumbSize",id:"thumbsize",level:2},{value:"thumbShape",id:"thumbshape",level:2},{value:"style",id:"style",level:2},{value:"onChange",id:"onchange",level:2},{value:"onComplete",id:"oncomplete",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"colorpicker-wrapper"},"ColorPicker Wrapper"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorPicker")," Wrapper is responsible for managing the built-in components.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It has the following props:"))),(0,r.kt)("h2",{id:"value"},"value"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The initial value of the color picker."),(0,r.kt)("li",{parentName:"ul"},"Accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"'hex'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"'rgb'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"'rgba'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"'hsl'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"'hsla'")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"named color")," formats."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type: string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default: '#418181'"))),(0,r.kt)("h2",{id:"sliderthickness"},"sliderThickness"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A global property to change the thickness of all descendant sliders components."),(0,r.kt)("li",{parentName:"ul"},"The thickness is the slider's width in case of ",(0,r.kt)("inlineCode",{parentName:"li"},"vertical")," orientation and height in case of ",(0,r.kt)("inlineCode",{parentName:"li"},"horizontal")," orientation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type: number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default: 25"))),(0,r.kt)("h2",{id:"thumbsize"},"thumbSize"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A global property to change the thumb size of all descendant sliders components."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type: number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default: 35"))),(0,r.kt)("h2",{id:"thumbshape"},"thumbShape"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A global property to change the shape and appearance of the thumb of all descendant sliders components."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type: string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default: 'ring'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"values: 'ring' | 'solid' | 'hollow' | 'line' | 'plus' | 'pill' | 'triangleUp' | 'triangleDown' | 'doubleTriangle' | 'rect' | 'circle'"))),(0,r.kt)("h2",{id:"style"},"style"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Color picker's container style."),(0,r.kt)("li",{parentName:"ul"},"If you want to change the width using the ",(0,r.kt)("inlineCode",{parentName:"li"},"width")," property."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type: ViewStyle"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")," some style properties will be overwritten.")),(0,r.kt)("h2",{id:"onchange"},"onChange"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Called every time the color value changed."),(0,r.kt)("li",{parentName:"ul"},"The passed color object has the following properties: ",(0,r.kt)("inlineCode",{parentName:"li"},"hex"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rgb"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rgba"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"hsl"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"hsla")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type: (color: object) => void")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default: null"))),(0,r.kt)("h2",{id:"oncomplete"},"onComplete"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Called when the user releases the slider handle or when a swatch is clicked."),(0,r.kt)("li",{parentName:"ul"},"The passed color object has the following properties: ",(0,r.kt)("inlineCode",{parentName:"li"},"hex"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rgb"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rgba"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"hsl"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"hsla")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type: (color: object) => void")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default: null"))))}u.isMDXComponent=!0}}]);