(self.webpackChunka_z_blog=self.webpackChunka_z_blog||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},9225:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ve}});var r,o,i,a,c=n(7294),u=n(9),l=n(975),s=u.default.label.withConfig({displayName:"darkmodeToggle__Toggle",componentId:"sc-1azrndr-0"})(["position:absolute;top:10px;right:10px;width:60px;height:34px;"]),f=u.default.span.withConfig({displayName:"darkmodeToggle__Slider",componentId:"sc-1azrndr-1"})(['position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;border-radius:34px;transition:.4s;&:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:.4s;transition:.4s;border-radius:50%;}']),d=u.default.input.withConfig({displayName:"darkmodeToggle__Checkbox",componentId:"sc-1azrndr-2"})(["display:none;&:checked + ","{background-color:#2196F3;}&:focus + ","{box-shadow:0 0 1px #2196F3;}&:checked + ",":before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px);}"],f,f,f),p=function(){return c.createElement(s,null,c.createElement(d,{type:"checkbox",checked:(0,l.ls)(),onChange:(0,l.C6)({type:"change"})}),c.createElement(f,null))},h=u.default.button.withConfig({displayName:"hamburger__Hamburger",componentId:"sc-1xfjdeh-0"})(["position:absolute;top:0px;left:0px;width:80px;height:80px;border:0px;background:white;"]),m=u.default.div.withConfig({displayName:"hamburger__LineWrapper",componentId:"sc-1xfjdeh-1"})(["cursor:pointer;width:56px;height:35px;position:relative;left:3px;"]),y=u.default.div.withConfig({displayName:"hamburger__Line",componentId:"sc-1xfjdeh-2"})(["background:black;margin-top:6px;margin-bottom:6px;width:56px;height:7px;border-radius:2px;boxShadow:0 1px 3px rgba(0,0,0,.5);position:relative;-webkit-transition:.4s;transition:all .4s;",""],(function(e){return e.clicked})),g=(0,u.css)(["",":checked{transform:translateY(15px) rotate(225deg);transition-delay:0.2s;}"],h),b=(0,u.css)(["",":checked{opacity:0;transform:translateX(50px);background:white;}"],h),w=(0,u.css)(["",":checked{transform:translateY(-11px) rotate(-225deg);transition-delay:0.2s;}"],h),v=((0,u.css)(["box-shadow:0 4px 4px rgba(31,35,46,.15);transition:box-shadow .5s ease-in;"]),u.default.input.withConfig({displayName:"hamburger__Test",componentId:"sc-1xfjdeh-3"})(["width:50px;height:50px;"]),function(e){var t=e.changeCategoryState;e.isCategory;return c.createElement(h,{onClick:function(){return t()}},c.createElement(m,null,c.createElement(y,{clicked:g}),c.createElement(y,{clicked:b}),c.createElement(y,{clicked:w})))}),T=u.default.div.withConfig({displayName:"category__CategoryElement",componentId:"sc-sokdxm-0"})(["position:fixed;left:0px;width:",";background-color:white;visibility:",";transition:.5s;transition-delay:visibility 1s;@media screen and ","{width:100% ","}"],(function(e){return e.isVisible?"200px":"0px"}),(function(e){return e.isVisible?"visible":"hidden"}),(function(e){return e.theme.size.mobile}),(function(e){return!e.isVisible&&(0,u.css)(["height:0%;"])})),x=function(e){var t=e.isCategory,n=e.categoryData;return c.createElement(T,{isVisible:t},c.createElement("ul",null,n.map((function(e){return c.createElement("li",{key:e.fieldValue}," ",e.fieldValue+"("+e.totalCount+")"," ")}))))},C=u.default.h2.withConfig({displayName:"header__Logo",componentId:"sc-9vdx90-0"})(['display:inline-block;text-align:center;font-family:"Noto Sans KR"']),E=u.default.div.withConfig({displayName:"header__HeaderElement",componentId:"sc-9vdx90-1"})(["position:fixed;width:100%;height:80px;background-color:#fff;top:",";opacity:0.85;backdrop-filter:blur(10px);transition:.5s ease-out;",""],(function(e){return e.isHeader?"0px":"-80px"}),(function(e){return e.isScrolled&&(0,u.css)(["box-shadow:0 4px 4px rgba(31,35,46,.15);transition:box-shadow .5s ease-in;transition:.5s ease-in;"])})),k=function(e){var t=e.categoryData,n=(0,c.useState)(!1),r=n[0],o=n[1],i=(0,c.useState)(!0),a=i[0],u=i[1],l=(0,c.useState)(0),s=l[0],f=l[1],d=(0,c.useState)(!1),h=d[0],m=d[1],y=function(){var e=window.pageYOffset;u(!(s<e)),f(e),o(window.pageYOffset>0)};(0,c.useEffect)((function(){return window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[r,s]);return c.createElement(E,{isScrolled:r,isHeader:a},c.createElement(v,{changeCategoryState:function(e){m(!h)},isCategory:h}),c.createElement(C,null,"K-Blog"),c.createElement(p,null),c.createElement(x,{isCategory:h,categoryData:t}))},A=(0,u.createGlobalStyle)(["html{height:200%;};body{padding:0;margin:0;background:",";height:200%;overflow-x:hidden;overflow-y:auto;}"],(function(e){return e.theme.colors.bgColor})),S={mobile:"(max-width: "+"768px"+")",tablet:"(max-width: "+"1024px"+")",laptop:"(min-width: "+"1460px"+")",desktop:"(min-width: "+"1700px"+")"},O={titleColor:"#F5EAEA",bgColor:"#4D4D4D",color:"#000000"},I={titleColor:"#4D4D4D",bgColor:"#F5EAEA",color:"#FFF"},_=function(e){var t=e.children,n={};return n.colors=(0,l.ls)()?O:I,n.size=S,c.createElement(u.ThemeProvider,{theme:n},t)},j=(u.default.div.withConfig({displayName:"categoryBar__CategoryElement",componentId:"sc-1lntl0i-0"})(["height:80%;width:20px;background:white;position:fixed;top:10%;left:0px;transition:.5s ease-out;&:hover{transition:.5s ease-in;width:300px;}"]),u.default.div.withConfig({displayName:"content__Layer",componentId:"sc-136uho4-0"})(["display:table;width:100%;height:500px;background:",";"],(function(e){return e.theme.colors.bgColor}))),P=u.default.div.withConfig({displayName:"content__LayerInner",componentId:"sc-136uho4-1"})(["display:table-cell;text-align:center;vertical-align:middle;"]),L=u.default.div.withConfig({displayName:"content__ContentElement",componentId:"sc-136uho4-2"})(["display:inline-block;width:980px;background:",";border-color:"," border:1px solid;@media screen and (max-width:980px){width:100%;}"],(function(e){return e.theme.colors.color}),(function(e){return e.theme.colors.titleColor})),N=u.default.li.withConfig({displayName:"content__PageElement",componentId:"sc-136uho4-3"})(["height:100px;color:","    "],(function(e){return e.theme.colors.titleColor})),M=function(e){var t=e.contents;return c.createElement(j,null,c.createElement(P,null,c.createElement(L,null,c.createElement("ul",null,t.map((function(e){return c.createElement(N,{key:e.node.frontmatter.title},e.node.frontmatter.title)}))))))},D=n(5697),R=n.n(D),F=n(4839),H=n.n(F),B=n(2993),Y=n.n(B),z=n(6494),q=n.n(z),U="bodyAttributes",V="htmlAttributes",K="titleAttributes",W={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},X=(Object.keys(W).map((function(e){return W[e]})),"charset"),$="cssText",G="href",J="http-equiv",Q="innerHTML",Z="itemprop",ee="name",te="property",ne="rel",re="src",oe="target",ie={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ae="defaultTitle",ce="defer",ue="encodeSpecialCharacters",le="onChangeClientState",se="titleTemplate",fe=Object.keys(ie).reduce((function(e,t){return e[ie[t]]=t,e}),{}),de=[W.NOSCRIPT,W.SCRIPT,W.STYLE],pe="data-react-helmet",he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},me=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ye=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},we=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ve=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Te=function(e){var t=Ae(e,W.TITLE),n=Ae(e,se);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Ae(e,ae);return t||r||void 0},xe=function(e){return Ae(e,le)||function(){}},Ce=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ge({},e,t)}),{})},Ee=function(e,t){return t.filter((function(e){return void 0!==e[W.BASE]})).map((function(e){return e[W.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},ke=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&je("Helmet: "+e+' should be of type "Array". Instead found type "'+he(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===ne&&"canonical"===e[n].toLowerCase()||u===ne&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==Q&&c!==$&&c!==Z||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=q()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},Ae=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Se=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Se(e)}),0)}),Oe=function(e){return clearTimeout(e)},Ie="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Se:n.g.requestAnimationFrame||Se,_e="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Oe:n.g.cancelAnimationFrame||Oe,je=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Pe=null,Le=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;De(W.BODY,r),De(W.HTML,o),Me(f,d);var p={baseTag:Re(W.BASE,n),linkTags:Re(W.LINK,i),metaTags:Re(W.META,a),noscriptTags:Re(W.NOSCRIPT,c),scriptTags:Re(W.SCRIPT,l),styleTags:Re(W.STYLE,s)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),u(e,h,m)},Ne=function(e){return Array.isArray(e)?e.join(""):e},Me=function(e,t){void 0!==e&&document.title!==e&&(document.title=Ne(e)),De(W.TITLE,t)},De=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(pe),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(pe):n.getAttribute(pe)!==a.join(",")&&n.setAttribute(pe,a.join(","))}},Re=function(e,t){var n=document.head||document.querySelector(W.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===Q)n.innerHTML=t.innerHTML;else if(r===$)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(pe,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},Fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},He=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[ie[n]||n]=e[n],t}),t)},Be=function(e,t,n){switch(e){case W.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[pe]=!0,o=He(n,r),[c.createElement(W.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=Fe(n),i=Ne(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+ve(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ve(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case U:case V:return{toComponent:function(){return He(t)},toString:function(){return Fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[pe]=!0,r);return Object.keys(t).forEach((function(e){var n=ie[e]||e;if(n===Q||n===$){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===Q||e===$)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+ve(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===de.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Ye=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:Be(W.BASE,t,r),bodyAttributes:Be(U,n,r),htmlAttributes:Be(V,o,r),link:Be(W.LINK,i,r),meta:Be(W.META,a,r),noscript:Be(W.NOSCRIPT,c,r),script:Be(W.SCRIPT,u,r),style:Be(W.STYLE,l,r),title:Be(W.TITLE,{title:f,titleAttributes:d},r)}},ze=H()((function(e){return{baseTag:Ee([G,oe],e),bodyAttributes:Ce(U,e),defer:Ae(e,ce),encode:Ae(e,ue),htmlAttributes:Ce(V,e),linkTags:ke(W.LINK,[ne,G],e),metaTags:ke(W.META,[ee,X,J,te,Z],e),noscriptTags:ke(W.NOSCRIPT,[Q],e),onChangeClientState:xe(e),scriptTags:ke(W.SCRIPT,[re,Q],e),styleTags:ke(W.STYLE,[$],e),title:Te(e),titleAttributes:Ce(K,e)}}),(function(e){Pe&&_e(Pe),e.defer?Pe=Ie((function(){Le(e,(function(){Pe=null}))})):(Le(e),Pe=null)}),Ye)((function(){return null})),qe=(o=ze,a=i=function(e){function t(){return me(this,t),we(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!Y()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case W.SCRIPT:case W.NOSCRIPT:return{innerHTML:t};case W.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return ge({},r,((t={})[n.type]=[].concat(r[n.type]||[],[ge({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case W.TITLE:return ge({},o,((t={})[r.type]=a,t.titleAttributes=ge({},i),t));case W.BODY:return ge({},o,{bodyAttributes:ge({},i)});case W.HTML:return ge({},o,{htmlAttributes:ge({},i)})}return ge({},o,((n={})[r.type]=ge({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=ge({},t);return Object.keys(e).forEach((function(t){var r;n=ge({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[fe[n]||n]=e[n],t}),t)}(be(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case W.LINK:case W.META:case W.NOSCRIPT:case W.SCRIPT:case W.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=be(e,["children"]),r=ge({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},ye(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:R().object,bodyAttributes:R().object,children:R().oneOfType([R().arrayOf(R().node),R().node]),defaultTitle:R().string,defer:R().bool,encodeSpecialCharacters:R().bool,htmlAttributes:R().object,link:R().arrayOf(R().object),meta:R().arrayOf(R().object),noscript:R().arrayOf(R().object),onChangeClientState:R().func,script:R().arrayOf(R().object),style:R().arrayOf(R().object),title:R().string,titleAttributes:R().object,titleTemplate:R().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=Ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);qe.renderStatic=qe.rewind;var Ue=u.default.main.withConfig({displayName:"pages__MainElement",componentId:"sc-gmccjh-0"})(["height:200%;"]),Ve=function(e){var t=e.data,n=t.allMdx.group,r=t.allMdx.edges;return c.createElement(l.rU,null,c.createElement(_,null,c.createElement(A,null),c.createElement(Ue,null,c.createElement(qe,null,c.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"})),c.createElement(k,{categoryData:n}),c.createElement(M,{contents:r}))))}},975:function(e,t,n){"use strict";n.d(t,{rU:function(){return c},ls:function(){return u},C6:function(){return l}});var r=n(7294),o=r.createContext(),i=r.createContext();function a(e,t){return e=!e,window.sessionStorage.setItem("isDarkmode",e),e}function c(e){var t=e.children,n=r.useReducer(a,!1),c=n[0],u=n[1];return(0,r.useEffect)((function(){var e=!1;"undefined"!=typeof window&&(null===(e=window.sessionStorage.getItem("isDarkmode"))?window.sessionStorage.setItem("isDarkmode",!1):"true"==e&&u())}),[u]),r.createElement(o.Provider,{value:c},r.createElement(i.Provider,{value:u},t))}function u(){return r.useContext(o)}function l(){return r.useContext(i)}}}]);
//# sourceMappingURL=component---src-pages-index-js-a30581b13bfc0ffe9e5c.js.map