(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),b=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=b(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=b(n),s=a,d=c["".concat(r,".").concat(s)]||c[s]||u[s]||i;return n?l.a.createElement(d,o(o({ref:t},p),{},{components:n})):l.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),i=(n(0),n(114)),r={id:"templated-features",title:"Templated Features Layer",slug:"/layers/templated-features"},o={unversionedId:"layers/templated-features",id:"layers/templated-features",isDocsHomePage:!1,title:"Templated Features Layer",description:"In this section, we will learn how to create a templated feature layer. A templated feature layer is a layer that fetches a single .mapml file on pans and zooms.",source:"@site/docs/layers/templated-features.md",slug:"/layers/templated-features",permalink:"/web-map-doc/docs/layers/templated-features",version:"current",sidebar:"someSidebar",previous:{title:"Templated Tiles Layer",permalink:"/web-map-doc/docs/layers/templated-tiles"},next:{title:"Templated Images Layer",permalink:"/web-map-doc/docs/layers/templated-images"}},m=[{value:"Adding a templated feature layer",id:"adding-a-templated-feature-layer",children:[]},{value:"Associated Elements",id:"associated-elements",children:[{value:"<code>&lt;extent&gt;</code>",id:"extent",children:[]},{value:"<code>&lt;input&gt;</code>",id:"input",children:[]},{value:"<code>&lt;link&gt;</code>",id:"link",children:[]}]},{value:"Additional Context",id:"additional-context",children:[]}],p={toc:m};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this section, we will learn how to create a templated feature layer. A templated feature layer is a layer that fetches a single .mapml file on pans and zooms."),Object(i.b)("h2",{id:"adding-a-templated-feature-layer"},"Adding a templated feature layer"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<layer- label="Alabama" checked>\n  <meta name="zoom" content="min=2,max=5" />\n  <extent units="CBMTILE">\n    <input name="z" type="zoom" min="2" max="18" value="0" />\n    <input name="xmin" type="location" units="gcrs" axis="longitude" position="top-left" min="-76" max="-74" />\n    <input name="ymin" type="location" units="gcrs" axis="latitude" position="bottom-right" min="45" max="46" />\n    <input name="xmax" type="location" units="gcrs" axis="longitude" position="bottom-right" min="-76" max="-74" />\n    <input name="ymax" type="location" units="gcrs" axis="latitude" position="top-left" min="45" max="46" />\n    <link rel="features" tref="data/alabama_feature.mapml?{xmin}{ymin}{xmax}{ymax}{z}" />\n  </extent>\n</layer->\n')),Object(i.b)("h2",{id:"associated-elements"},"Associated Elements"),Object(i.b)("h3",{id:"extent"},Object(i.b)("inlineCode",{parentName:"h3"},"<extent>")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"units"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This allows you to define what the ",Object(i.b)("a",{parentName:"li",href:"http://example.org"},"projection")," of the templated features.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"input"},Object(i.b)("inlineCode",{parentName:"h3"},"<input>")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"axis")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This attribute is only useful on inputs of type ",Object(i.b)("strong",null,"location"),", it sets the axis the following input defines. This value also defines what the ",Object(i.b)("strong",null,"min")," and ",Object(i.b)("strong",null,"max")," value's units."),Object(i.b)("li",{parentName:"ul"},"Options are, row | column | easting | northing | latitude | longitude"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"name")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This allows you to name the input, this name is then used in the url template used in the ",Object(i.b)("inlineCode",{parentName:"li"},"<link>")," href attribute."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"type")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the ",Object(i.b)("strong",null,"type")," of the input."),Object(i.b)("li",{parentName:"ul"},"Options are, zoom | location"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"max")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the maximum of the bounds of the layer on the given ",Object(i.b)("strong",null,"axis"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"min")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the minimum of the bounds of the layer on the given ",Object(i.b)("strong",null,"axis"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"position")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the position of the input, this can either be top-left or bottom-right."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"value")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the zoom level the inputs of type ",Object(i.b)("strong",null,"location"),"'s ",Object(i.b)("strong",null,"min")," and ",Object(i.b)("strong",null,"max")," are defined at.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"link"},Object(i.b)("inlineCode",{parentName:"h3"},"<link>")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"rel")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Set this to features in the case of a templated features layer."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"title")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the title of the layer, this is the title shown in the layer controls."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"type")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the type of the returned data."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"tref")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sets the templated url of the templated tile layer, this must contain all the names of the inputs used to query a given tile.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"additional-context"},"Additional Context"),Object(i.b)("p",null,"You can also provide a set of elements to further define the templated feature layer. This is the list of available additions with examples."),Object(i.b)("h4",{id:"meta-namezoom"},Object(i.b)("inlineCode",{parentName:"h4"},'<meta name="zoom">')),Object(i.b)("p",null,"Sets the zoom range of the layer. The layer will make requests from zoom levels 1 to 5 in the example below."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<meta name="zoom" content="min=1,max=5" />\n')),Object(i.b)("hr",null),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<mapml-viewer projection="CBMTILE" zoom="3" lat="45.5052040" lon="-75.2202344" controls>\n  <layer- label="Alabama" checked>\n    <meta name="zoom" content="min=2,max=5" />\n    <extent units="CBMTILE">\n      <input name="z" type="zoom" min="2" max="18" value="0" />\n      <input name="xmin" type="location" units="gcrs" axis="longitude" position="top-left" min="-76" max="-74" />\n      <input name="ymin" type="location" units="gcrs" axis="latitude" position="bottom-right" min="45" max="46" />\n      <input name="xmax" type="location" units="gcrs" axis="longitude" position="bottom-right" min="-76" max="-74" />\n      <input name="ymax" type="location" units="gcrs" axis="latitude" position="top-left" min="45" max="46" />\n      <link rel="features" tref="data/alabama_feature.mapml?{xmin}{ymin}{xmax}{ymax}{z}" />\n    </extent>\n  </layer->\n</mapml-viewer>\n')),Object(i.b)("p",null,"[ADD MAP HERE]"))}b.isMDXComponent=!0}}]);