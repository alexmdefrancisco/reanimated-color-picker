"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>N});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=d(n),N=a,y=k["".concat(c,".").concat(N)]||k[N]||m[N]||i;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2,sidebar_label:"Preview",description:"The preview of the selected and the initial color."},l="<Preview />",o={unversionedId:"API/Preview",id:"API/Preview",title:"<Preview />",description:"The preview of the selected and the initial color.",source:"@site/docs/API/Preview.md",sourceDirName:"API",slug:"/API/Preview",permalink:"/reanimated-color-picker/docs/API/Preview",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Preview",description:"The preview of the selected and the initial color."},sidebar:"tutorialSidebar",previous:{title:"ColorPicker Wrapper",permalink:"/reanimated-color-picker/docs/API/ColorPicker"},next:{title:"PreviewText",permalink:"/reanimated-color-picker/docs/API/PreviewText"}},c={},d=[],p={toc:d};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"preview-"},(0,a.kt)("inlineCode",{parentName:"h1"},"<Preview />")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"preview",src:n(8390).Z,width:"300",height:"69"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The preview of the selected and the initial color.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"colorFormat"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"'hex'")),(0,a.kt)("td",{parentName:"tr",align:"left"},"preview color text format: ",(0,a.kt)("inlineCode",{parentName:"td"},"'hex'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'rgb'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'rgba'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'hsl'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'hsla'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'hsv'")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"'hsva'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hideInitialColor"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:"left"},"hide the initial color preview part")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hideText"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:"left"},"hide preview color texts")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"style"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"ViewStyle")),(0,a.kt)("td",{parentName:"tr",align:"center"},"/"),(0,a.kt)("td",{parentName:"tr",align:"left"},"preview container style")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"textStyle"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"TextStyle")),(0,a.kt)("td",{parentName:"tr",align:"center"},"/"),(0,a.kt)("td",{parentName:"tr",align:"left"},"preview text style")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Some style properties will be overwritten."))))}m.isMDXComponent=!0},8390:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABFCAYAAADw8dtTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA3LTA1VDE0OjU3OjI4KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNy0wNVQxNDo1OTowNyswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wNy0wNVQxNDo1OTowNyswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNjUyMzU3Zi1mODRlLWYyNDItODhlYS00ODQ0MDZiMTFkNTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNDRmNzhjMS1mOGMxLTg2NDEtOTZjOC1iZmMzODQyMWNhYzciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ZGQxMjNmZS0zYjVkLTNhNGQtODE0Yi04OGNjNDFjMWFkYzEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVkZDEyM2ZlLTNiNWQtM2E0ZC04MTRiLTg4Y2M0MWMxYWRjMSIgc3RFdnQ6d2hlbj0iMjAyMi0wNy0wNVQxNDo1NzoyOCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNjUyMzU3Zi1mODRlLWYyNDItODhlYS00ODQ0MDZiMTFkNTEiIHN0RXZ0OndoZW49IjIwMjItMDctMDVUMTQ6NTk6MDcrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6XIixCAAAUcElEQVR4nO3deZxVdf3H8df3LHdfZubOzswwssgoKGgqKSKgmWu5ZqUhFaiZlJRK1sNEbdHq14KaP9Oo+GE/lcA0lyAt3DAXSAVkCdmGWWCG2e5+71m+vz8ujvLD7FePX5e5zffJH/OYe+6538O597zv93y/n3NGSClRFEUpBdqh3gBFUZT/KxVYiqKUDBVYiqKUDBVYiqKUDBVYiqKUDBVYiqKUDBVYiqKUDBVYiqKUDBVYiqKUDBVYiqKUDBVYiqKUDBVYiqKU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"}}]);