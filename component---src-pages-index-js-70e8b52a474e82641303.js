(self.webpackChunka_z_blog=self.webpackChunka_z_blog||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},8204:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Se}});var r=n(7294),o=n(9),i=r.createContext(),a=r.createContext();function c(e,t){return e=!e,window.sessionStorage.setItem("isDarkmode",e),console.log("changed to ",e),e}function u(e){var t=e.children,n=r.useReducer(c,!1),o=n[0],u=n[1];return(0,r.useEffect)((function(){var e=!1;"undefined"!=typeof window&&(null===(e=window.sessionStorage.getItem("isDarkmode"))?window.sessionStorage.setItem("isDarkmode",!1):"true"==e&&u())}),[u]),r.createElement(i.Provider,{value:o},r.createElement(a.Provider,{value:u},t))}o.default.label.withConfig({displayName:"darkmodeToggle__Toggle",componentId:"sc-1azrndr-0"})(["position:absolute;top:10px;right:10px;width:60px;height:34px;"]);var s,l,f,d,p=o.default.span.withConfig({displayName:"darkmodeToggle__Slider",componentId:"sc-1azrndr-1"})(['position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;border-radius:34px;transition:.4s;&:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:.4s;transition:.4s;border-radius:50%;}']),h=(o.default.input.withConfig({displayName:"darkmodeToggle__Checkbox",componentId:"sc-1azrndr-2"})(["display:none;&:checked + ","{background-color:#2196F3;}&:focus + ","{box-shadow:0 0 1px #2196F3;}&:checked + ",":before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px);}"],p,p,p),o.default.button.withConfig({displayName:"hamburger__Hamburger",componentId:"sc-1xfjdeh-0"})(["position:absolute;top:0px;left:0px;width:80px;height:80px;border:0px;background:white;"]),o.default.div.withConfig({displayName:"hamburger__LineWrapper",componentId:"sc-1xfjdeh-1"})(["cursor:pointer;width:56px;height:35px;position:relative;left:3px;"]),o.default.div.withConfig({displayName:"hamburger__Line",componentId:"sc-1xfjdeh-2"})(["background:black;margin-top:6px;margin-bottom:6px;width:56px;height:7px;border-radius:2px;boxShadow:0 1px 3px rgba(0,0,0,.5);position:relative;-webkit-transition:.2s;transition:all .2s;",""],(function(e){return e.clicked})),(0,o.css)(["transform:translateY(15px) rotate(225deg);transition-delay:0.2s;"]),(0,o.css)(["opacity:0;transform:translateX(50px);background:white;"]),(0,o.css)(["transform:translateY(-11px) rotate(-225deg);transition-delay:0.2s;"]),o.default.div.withConfig({displayName:"category__CategoryElement",componentId:"sc-sokdxm-0"})(["position:fixed;left:0px;background-color:white;transition:width .5s,height .5s;width:",";height:",";transition:height .1s,width .1s;@media screen and ","{width:100%;height:100%;border-bottom:thick double black;","}"],(function(e){return e.isVisible?"450px":"0px"}),(function(e){return e.isVisible?"100vh":"0px"}),(function(e){return e.theme.size.mobile}),(function(e){return!e.isVisible&&(0,o.css)(["height:0%;"])})),o.default.ul.withConfig({displayName:"category__CategoryList",componentId:"sc-sokdxm-1"})(["visibility:",";"],(function(e){return e.isVisible?"visible":"hidden"})),o.default.li.withConfig({displayName:"category__CategoryItem",componentId:"sc-sokdxm-2"})(["text-overflow:ellipsis;"]),o.default.h2.withConfig({displayName:"header__Logo",componentId:"sc-9vdx90-0"})(["text-align:center;"]),o.default.div.withConfig({displayName:"header__HeaderElement",componentId:"sc-9vdx90-1"})(["position:fixed;width:100%;height:80px;background-color:#fff;top:",";opacity:0.85;backdrop-filter:blur(10px);transition:.5s ease-out;",""],(function(e){return e.isHeader?"0px":"-80px"}),(function(e){return e.isScrolled&&(0,o.css)(["box-shadow:0 4px 4px rgba(31,35,46,.15);transition:box-shadow .5s ease-in;transition:.5s ease-in;"])})),(0,o.createGlobalStyle)(["html{height:200%;};body{padding:0;margin:0;background:",";height:200%;overflow-x:hidden;overflow-y:auto;}"],(function(e){return e.theme.colors.bgColor}))),m={mobile:"(max-width: "+"768px"+")",tablet:"(max-width: "+"1024px"+")",laptop:"(min-width: "+"1460px"+")",desktop:"(min-width: "+"1700px"+")"},b={titleColor:"#F5EAEA",bgColor:"#4D4D4D",color:"#000000"},y={titleColor:"#4D4D4D",bgColor:"#F5EAEA",color:"#FFF"},g=function(e){var t=e.children,n={};return n.colors=r.useContext(i)?b:y,n.size=m,r.createElement(o.ThemeProvider,{theme:n},t)},w=(o.default.div.withConfig({displayName:"content__Layer",componentId:"sc-136uho4-0"})(["margin-top:80px;display:table;width:100%;height:100%;background:",";"],(function(e){return e.theme.colors.bgColor})),o.default.div.withConfig({displayName:"content__LayerInner",componentId:"sc-136uho4-1"})(["display:table-cell;text-align:center;vertical-align:middle;"]),o.default.div.withConfig({displayName:"content__ContentElement",componentId:"sc-136uho4-2"})(["display:inline-block;width:980px;background:",";border-color:"," border:1px solid;@media screen and (max-width:980px){width:100%;}"],(function(e){return e.theme.colors.color}),(function(e){return e.theme.colors.titleColor})),o.default.li.withConfig({displayName:"content__PageElement",componentId:"sc-136uho4-3"})(["height:100px;color:","    "],(function(e){return e.theme.colors.titleColor})),n(5697)),v=n.n(w),T=n(4839),x=n.n(T),C=n(2993),A=n.n(C),E=n(6494),k=n.n(E),O="bodyAttributes",S="htmlAttributes",I="titleAttributes",_={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},j=(Object.keys(_).map((function(e){return _[e]})),"charset"),P="cssText",L="href",N="http-equiv",M="innerHTML",D="itemprop",R="name",F="property",H="rel",z="src",B="target",Y={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},q="defaultTitle",U="defer",V="encodeSpecialCharacters",K="onChangeClientState",W="titleTemplate",X=Object.keys(Y).reduce((function(e,t){return e[Y[t]]=t,e}),{}),$=[_.NOSCRIPT,_.SCRIPT,_.STYLE],G="data-react-helmet",J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},ne=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},re=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},oe=function(e){var t=se(e,_.TITLE),n=se(e,W);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=se(e,q);return t||r||void 0},ie=function(e){return se(e,K)||function(){}},ae=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ee({},e,t)}),{})},ce=function(e,t){return t.filter((function(e){return void 0!==e[_.BASE]})).map((function(e){return e[_.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},ue=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&he("Helmet: "+e+' should be of type "Array". Instead found type "'+J(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===H&&"canonical"===e[n].toLowerCase()||u===H&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==M&&c!==P&&c!==D||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=k()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},se=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},le=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){le(e)}),0)}),fe=function(e){return clearTimeout(e)},de="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||le:n.g.requestAnimationFrame||le,pe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||fe:n.g.cancelAnimationFrame||fe,he=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},me=null,be=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;we(_.BODY,r),we(_.HTML,o),ge(f,d);var p={baseTag:ve(_.BASE,n),linkTags:ve(_.LINK,i),metaTags:ve(_.META,a),noscriptTags:ve(_.NOSCRIPT,c),scriptTags:ve(_.SCRIPT,s),styleTags:ve(_.STYLE,l)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),u(e,h,m)},ye=function(e){return Array.isArray(e)?e.join(""):e},ge=function(e,t){void 0!==e&&document.title!==e&&(document.title=ye(e)),we(_.TITLE,t)},we=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(G),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(G):n.getAttribute(G)!==a.join(",")&&n.setAttribute(G,a.join(","))}},ve=function(e,t){var n=document.head||document.querySelector(_.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===M)n.innerHTML=t.innerHTML;else if(r===P)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(G,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},Te=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},xe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Y[n]||n]=e[n],t}),t)},Ce=function(e,t,n){switch(e){case _.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(o={key:e})[G]=!0,i=xe(n,o),[r.createElement(_.TITLE,i,e)];var e,n,o,i},toString:function(){return function(e,t,n,r){var o=Te(n),i=ye(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+re(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+re(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case O:case S:return{toComponent:function(){return xe(t)},toString:function(){return Te(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var o,i=((o={key:n})[G]=!0,o);return Object.keys(t).forEach((function(e){var n=Y[e]||e;if(n===M||n===P){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),r.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===M||e===P)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+re(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===$.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Ae=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:Ce(_.BASE,t,r),bodyAttributes:Ce(O,n,r),htmlAttributes:Ce(S,o,r),link:Ce(_.LINK,i,r),meta:Ce(_.META,a,r),noscript:Ce(_.NOSCRIPT,c,r),script:Ce(_.SCRIPT,u,r),style:Ce(_.STYLE,s,r),title:Ce(_.TITLE,{title:f,titleAttributes:d},r)}},Ee=x()((function(e){return{baseTag:ce([L,B],e),bodyAttributes:ae(O,e),defer:se(e,U),encode:se(e,V),htmlAttributes:ae(S,e),linkTags:ue(_.LINK,[H,L],e),metaTags:ue(_.META,[R,j,N,F,D],e),noscriptTags:ue(_.NOSCRIPT,[M],e),onChangeClientState:ie(e),scriptTags:ue(_.SCRIPT,[z,M],e),styleTags:ue(_.STYLE,[P],e),title:oe(e),titleAttributes:ae(I,e)}}),(function(e){me&&pe(me),e.defer?me=de((function(){be(e,(function(){me=null}))})):(be(e),me=null)}),Ae)((function(){return null})),ke=(l=Ee,d=f=function(e){function t(){return Q(this,t),ne(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!A()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case _.SCRIPT:case _.NOSCRIPT:return{innerHTML:t};case _.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return ee({},r,((t={})[n.type]=[].concat(r[n.type]||[],[ee({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case _.TITLE:return ee({},o,((t={})[r.type]=a,t.titleAttributes=ee({},i),t));case _.BODY:return ee({},o,{bodyAttributes:ee({},i)});case _.HTML:return ee({},o,{htmlAttributes:ee({},i)})}return ee({},o,((n={})[r.type]=ee({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=ee({},t);return Object.keys(e).forEach((function(t){var r;n=ee({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,o={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[X[n]||n]=e[n],t}),t)}(te(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case _.LINK:case _.META:case _.NOSCRIPT:case _.SCRIPT:case _.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=te(e,["children"]),o=ee({},n);return t&&(o=this.mapChildrenToProps(t,o)),r.createElement(l,o)},Z(t,null,[{key:"canUseDOM",set:function(e){l.canUseDOM=e}}]),t}(r.Component),f.propTypes={base:v().object,bodyAttributes:v().object,children:v().oneOfType([v().arrayOf(v().node),v().node]),defaultTitle:v().string,defer:v().bool,encodeSpecialCharacters:v().bool,htmlAttributes:v().object,link:v().arrayOf(v().object),meta:v().arrayOf(v().object),noscript:v().arrayOf(v().object),onChangeClientState:v().func,script:v().arrayOf(v().object),style:v().arrayOf(v().object),title:v().string,titleAttributes:v().object,titleTemplate:v().string},f.defaultProps={defer:!0,encodeSpecialCharacters:!0},f.peek=l.peek,f.rewind=function(){var e=l.rewind();return e||(e=Ae({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},d);ke.renderStatic=ke.rewind;var Oe=o.default.main.withConfig({displayName:"pages__MainElement",componentId:"sc-gmccjh-0"})(["height:200%;"]),Se=function(e){var t=e.data;t.allMdx.group,t.allMdx.edges;return console.log(t.allSite.edges[0].node.siteMetadata.siteUrl),r.createElement(u,null,r.createElement(g,null,r.createElement(h,null),r.createElement(Oe,null,r.createElement(ke,null,r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-70e8b52a474e82641303.js.map