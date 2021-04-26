(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),l=(a(0),a(113)),c={id:"layer-api",title:"<layer-> API",slug:"/api/layer-api"},b={unversionedId:"api/layer-api",id:"api/layer-api",isDocsHomePage:!1,title:"<layer-> API",description:"In this section we'll learn different API methods on the ``. It allows you to interact with",source:"@site/docs/api/layer-api.md",slug:"/api/layer-api",permalink:"/web-map-doc/docs/api/layer-api",version:"current",sidebar:"someSidebar",previous:{title:"Custom Projections API",permalink:"/web-map-doc/docs/api/custom-projections"},next:{title:"<mapml-viewer> API",permalink:"/web-map-doc/docs/api/mapml-viewer-api"}},i=[{value:"Setter &amp; Getters",id:"setter--getters",children:[{value:"checked",id:"checked",children:[]},{value:"hidden",id:"hidden",children:[]},{value:"label",id:"label",children:[]},{value:"opacity",id:"opacity",children:[]},{value:"src",id:"src",children:[]}]},{value:"Methods",id:"methods",children:[{value:"focus()",id:"focus",children:[]}]}],o={toc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this section we'll learn different API methods on the ",Object(l.b)("inlineCode",{parentName:"p"},"<layer->"),". It allows you to interact with\nthe layers through JavaScript."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"Functionality"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#checked"},"checked")),Object(l.b)("td",{parentName:"tr",align:null},"Setter & getter related to the layer's checked state.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#focus"},"focus()")),Object(l.b)("td",{parentName:"tr",align:null},"Method to zoom to the layer's extent.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#hidden"},"hidden")),Object(l.b)("td",{parentName:"tr",align:null},"Setter & getter related to the layer's hidden attribute.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#label"},"label")),Object(l.b)("td",{parentName:"tr",align:null},"Setter & getter related to the layer's label.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#opacity"},"opacity")),Object(l.b)("td",{parentName:"tr",align:null},"Setter & getter to set the opacity of a layer.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#src"},"src")),Object(l.b)("td",{parentName:"tr",align:null},"Setter & getter to a fetched layer's URL.")))),Object(l.b)("h2",{id:"setter--getters"},"Setter & Getters"),Object(l.b)("h3",{id:"checked"},"checked"),Object(l.b)("p",null,'To set/update whether the layer is "checked":'),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<layer->.checked = true; // valid values are true | false\n")),Object(l.b)("p",null,"To get the ",Object(l.b)("inlineCode",{parentName:"p"},"<layer->"),"'s checked value:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"let isChecked = <layer->.checked;\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hidden"},"hidden"),Object(l.b)("p",null,'To set/update whether the layer is "hidden":'),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<layer->.hidden = true; // valid values are true | false\n")),Object(l.b)("p",null,"To get the ",Object(l.b)("inlineCode",{parentName:"p"},"<layer->"),"'s hidden value:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"let isHidden = <layer->.hidden;\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"label"},"label"),Object(l.b)("p",null,"To set/update the ",Object(l.b)("inlineCode",{parentName:"p"},"<layer->"),"'s label:"),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Needs To Be Implemented, Currently doesn't update the label in layer controls"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'<layer->.label = "New Title";\n')),Object(l.b)("p",null,"To get the ",Object(l.b)("inlineCode",{parentName:"p"},"<layer->"),"'s label value:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"let label = <layer->.label;\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"opacity"},"opacity"),Object(l.b)("p",null,"To set/update the ",Object(l.b)("inlineCode",{parentName:"p"},"<layer->"),"'s opacity:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<layer->.opacity = 0.5; // valid values from 0 to 1\n")),Object(l.b)("p",null,"To get the ",Object(l.b)("inlineCode",{parentName:"p"},"<layer->"),"'s opacity value:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"let opacity = <layer->.opacity;\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"src"},"src"),Object(l.b)("p",null,"To set/update the ",Object(l.b)("inlineCode",{parentName:"p"},"<layer->"),"'s src:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'<layer->.src = "https://example.org";\n')),Object(l.b)("p",null,"To get the ",Object(l.b)("inlineCode",{parentName:"p"},"<layer->"),"'s src value (URL):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"let url = <layer->.src;\n")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"focus"},"focus()"),Object(l.b)("p",null,"To fit the layer's extent in the map as much as possible:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"<layer->.focus();\n")),Object(l.b)("hr",null))}p.isMDXComponent=!0},113:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||l;return a?n.a.createElement(m,b(b({ref:t},o),{},{components:a})):n.a.createElement(m,b({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var o=2;o<l;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);