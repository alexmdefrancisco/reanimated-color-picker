"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[138],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>N});var i=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,i,r=function(e,t){if(null==e)return{};var l,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},m=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(l),N=r,b=u["".concat(c,".").concat(N)]||u[N]||d[N]||a;return l?i.createElement(b,n(n({ref:t},m),{},{components:l})):i.createElement(b,n({ref:t},m))}));function N(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,n=new Array(a);n[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,n[1]=o;for(var p=2;p<a;p++)n[p]=l[p];return i.createElement.apply(null,n)}return i.createElement.apply(null,l)}u.displayName="MDXCreateElement"},6084:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=l(7462),r=(l(7294),l(3905));const a={sidebar_position:8,sidebar_label:"SaturationSlider",description:"A slider to change the color's saturation."},n="<SaturationSlider />",o={unversionedId:"API/SaturationSlider",id:"API/SaturationSlider",title:"<SaturationSlider />",description:"A slider to change the color's saturation.",source:"@site/docs/API/SaturationSlider.md",sourceDirName:"API",slug:"/API/SaturationSlider",permalink:"/reanimated-color-picker/docs/API/SaturationSlider",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"SaturationSlider",description:"A slider to change the color's saturation."},sidebar:"tutorialSidebar",previous:{title:"HueSlider",permalink:"/reanimated-color-picker/docs/API/HueSlider"},next:{title:"BrightnessSlider",permalink:"/reanimated-color-picker/docs/API/BrightnessSlider"}},c={},p=[{value:"thumbSize",id:"thumbsize",level:2},{value:"thumbColor",id:"thumbcolor",level:2},{value:"thumbShape",id:"thumbshape",level:2},{value:"reverse",id:"reverse",level:2},{value:"vertical",id:"vertical",level:2},{value:"style",id:"style",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"saturationslider-"},(0,r.kt)("inlineCode",{parentName:"h1"},"<SaturationSlider />")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"saturation",src:l(7870).Z,width:"256",height:"40"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A slider to change the color's saturation.")),(0,r.kt)("h2",{id:"thumbsize"},"thumbSize"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The size of the slider's thumb."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type: number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default: 35"))),(0,r.kt)("h2",{id:"thumbcolor"},"thumbColor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The color of the slider's thumb."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type: string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default: interactive*"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"*","interactive")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The thumb color will be changed depending on the contrast ratio if no color value is passed."))),(0,r.kt)("h2",{id:"thumbshape"},"thumbShape"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The shape and appearance of the slider's thumb."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type: string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default: 'ring'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"values: 'ring' | 'solid' | 'hollow' | 'line' | 'plus' | 'pill' | 'triangleUp' | 'triangleDown' | 'doubleTriangle' | 'rect' | 'circle'"))),(0,r.kt)("h2",{id:"reverse"},"reverse"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reverse the slider direction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type: boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default: false"))),(0,r.kt)("h2",{id:"vertical"},"vertical"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change the slider orientation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type: boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default: false"))),(0,r.kt)("h2",{id:"style"},"style"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The style of the slider's container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type: ViewStyle"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Some style properties will be overwritten."))))}d.isMDXComponent=!0},7870:(e,t,l)=>{l.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAoCAYAAAAR+iSJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAIAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA2LTIzVDE3OjIxOjA5KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNy0wNFQyMjoxNjo0MCswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wNy0wNFQyMjoxNjo0MCswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MDdkZDEzMy0yY2E4LTQwNDktYjExOC1jNWI5MDM3YWRlYmIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyMmQ4ZTA4OS1hNmZkLTQ5NDItYTE1YS05M2MwMmI5N2ExNjciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNjNlYTlmNy0zZGMzLTk1NGEtODQ5Ny04Y2Y1Y2Q1Mjg2MzYiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ODIzOGUxYzItNTNmMy1iYTQ5LWI2NGEtMGZjMjYyNTcwYWMyPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmI3OTA4MjdjLTkzOWYtYTQ0Ny05MTEzLTQxZmY4ZTk4NjJiMjwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiOTYyMTdiYi1iMmI2LTgxNDktODU3ZS0wNzUxM2I0MmQ4YzU8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNjNlYTlmNy0zZGMzLTk1NGEtODQ5Ny04Y2Y1Y2Q1Mjg2MzYiIHN0RXZ0OndoZW49IjIwMjItMDYtMjNUMTc6MjE6MDkrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTI2MTk4ZTgtNDA4Zi1mNjQyLTlmNzQtZmU1ZTg1MDA2NmQ0IiBzdEV2dDp3aGVuPSIyMDIyLTA2LTIzVDE3OjI0OjE4KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNo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"}}]);