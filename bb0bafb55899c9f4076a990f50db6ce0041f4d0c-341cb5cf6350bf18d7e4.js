(self.webpackChunka_z_blog=self.webpackChunka_z_blog||[]).push([[202],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return me}});var r,o,i,a,c=n(5697),u=n.n(c),s=n(4839),l=n.n(s),f=n(2993),d=n.n(f),p=n(7294),h=n(6494),m=n.n(h),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",x="href",C="http-equiv",E="innerHTML",k="itemprop",S="name",A="property",O="rel",I="src",_="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",P="defer",N="encodeSpecialCharacters",M="onChangeClientState",F="titleTemplate",R=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),D=[w.NOSCRIPT,w.SCRIPT,w.STYLE],B="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=G(e,w.TITLE),n=G(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=G(e,L);return t||r||void 0},W=function(e){return G(e,M)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===O&&"canonical"===e[n].toLowerCase()||u===O&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==E&&c!==T&&c!==k||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},G=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},J=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){J(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:n.g.requestAnimationFrame||J,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ue(w.BODY,r),ue(w.HTML,o),ce(f,d);var p={baseTag:se(w.BASE,n),linkTags:se(w.LINK,i),metaTags:se(w.META,a),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,l)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),u(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(w.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===E)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,o=fe(n,r),[p.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===E||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),p.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===E||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(w.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(g,o,r),link:de(w.LINK,i,r),meta:de(w.META,a,r),noscript:de(w.NOSCRIPT,c,r),script:de(w.SCRIPT,u,r),style:de(w.STYLE,s,r),title:de(w.TITLE,{title:f,titleAttributes:d},r)}},he=l()((function(e){return{baseTag:Q([x,_],e),bodyAttributes:X(y,e),defer:G(e,P),encode:G(e,N),htmlAttributes:X(g,e),linkTags:$(w.LINK,[O,x],e),metaTags:$(w.META,[S,v,C,A,k],e),noscriptTags:$(w.NOSCRIPT,[E],e),onChangeClientState:W(e),scriptTags:$(w.SCRIPT,[I,E],e),styleTags:$(w.STYLE,[T],e),title:Z(e),titleAttributes:X(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),me=(o=he,a=i=function(e){function t(){return q(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return z({},o,((t={})[r.type]=a,t.titleAttributes=z({},i),t));case w.BODY:return z({},o,{bodyAttributes:z({},i)});case w.HTML:return z({},o,{htmlAttributes:z({},i)})}return z({},o,((n={})[r.type]=z({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(V(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=V(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(p.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind,t.Z=me},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},3675:function(e,t,n){"use strict";var r=n(7294),o=n(9),i=o.default.div.withConfig({displayName:"content__Layer",componentId:"sc-136uho4-0"})(["margin-top:80px;display:table;width:100%;height:100%;background:",";"],(function(e){return e.theme.colors.second})),a=o.default.div.withConfig({displayName:"content__LayerInner",componentId:"sc-136uho4-1"})(["display:table-cell;text-align:center;vertical-align:middle;"]),c=o.default.div.withConfig({displayName:"content__ContentElement",componentId:"sc-136uho4-2"})(["display:inline-block;width:980px;background:",";@media screen and (max-width:980px){width:100%;}"],(function(e){return e.theme.colors.second}));t.Z=function(e){var t=e.children;return r.createElement(i,null,r.createElement(a,null,r.createElement(c,null,t)))}},6179:function(e,t,n){"use strict";var r=n(7294),o=n(5414),i=n(5444);function a(e){var t=e.description,n=e.lang,a=e.meta,c=e.title,u=(0,i.useStaticQuery)("63159454").site,s=t||u.siteMetadata.description;return r.createElement(o.Z,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(a)})}a.defaultProps={lang:"en",meta:[],description:""},t.Z=a},960:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var r=n(7294),o=n(9),i=r.createContext(),a=r.createContext();function c(e,t){return e=!e,window.sessionStorage.setItem("isDarkmode",e),console.log("changed to ",e),e}function u(e){var t=e.children,n=r.useReducer(c,!1),o=n[0],u=n[1];return(0,r.useEffect)((function(){var e=!1;"undefined"!=typeof window&&(null===(e=window.sessionStorage.getItem("isDarkmode"))?window.sessionStorage.setItem("isDarkmode",!1):"true"==e&&u())}),[u]),r.createElement(i.Provider,{value:o},r.createElement(a.Provider,{value:u},t))}function s(){return r.useContext(i)}var l=o.default.label.withConfig({displayName:"darkmodeToggle__Toggle",componentId:"sc-1azrndr-0"})(["position:absolute;top:10px;right:10px;width:60px;height:34px;"]),f=o.default.span.withConfig({displayName:"darkmodeToggle__Slider",componentId:"sc-1azrndr-1"})(['position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;border-radius:34px;transition:.4s;&:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:.4s;transition:.4s;border-radius:50%;}']),d=o.default.input.withConfig({displayName:"darkmodeToggle__Checkbox",componentId:"sc-1azrndr-2"})(["display:none;&:checked + ","{background-color:#2196F3;}&:focus + ","{box-shadow:0 0 1px #2196F3;}&:checked + ",":before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px);}"],f,f,f),p=function(){var e=(0,r.useState)(null),t=e[0],n=e[1],o=s();return(0,r.useEffect)((function(){o&&n(!0)}),[o]),r.createElement(l,null,r.createElement(d,{type:"checkbox",defaultChecked:t,onClick:r.useContext(a)}),r.createElement(f,null))},h=o.default.button.withConfig({displayName:"hamburger__Hamburger",componentId:"sc-1xfjdeh-0"})(["position:absolute;top:0px;left:0px;width:80px;height:80px;border:0px;background:white;"]),m=o.default.div.withConfig({displayName:"hamburger__LineWrapper",componentId:"sc-1xfjdeh-1"})(["cursor:pointer;width:56px;height:35px;position:relative;left:3px;"]),y=o.default.div.withConfig({displayName:"hamburger__Line",componentId:"sc-1xfjdeh-2"})(["background:black;margin-top:6px;margin-bottom:6px;width:56px;height:7px;border-radius:2px;boxShadow:0 1px 3px rgba(0,0,0,.5);position:relative;-webkit-transition:.2s;transition:all .2s;",""],(function(e){return e.clicked})),g=(0,o.css)(["transform:translateY(15px) rotate(225deg);transition-delay:0.2s;"]),b=(0,o.css)(["opacity:0;transform:translateX(50px);background:white;"]),w=(0,o.css)(["transform:translateY(-11px) rotate(-225deg);transition-delay:0.2s;"]),v=function(e){var t=e.changeCategoryState,n=e.isCategory;return r.createElement(h,{onClick:function(){return t()}},r.createElement(m,null,r.createElement(y,{clicked:n?g:""}),r.createElement(y,{clicked:n?b:""}),r.createElement(y,{clicked:n?w:""})))},T=n(5444),x=o.default.div.withConfig({displayName:"category__CategoryElement",componentId:"sc-sokdxm-0"})(["position:fixed;left:0px;background-color:white;transition:width .5s,height .5s;width:",";height:",";transition:height .1s,width .1s;@media screen and ","{width:100%;height:100%;border-bottom:thick double black;","}"],(function(e){return e.isVisible?"450px":"0px"}),(function(e){return e.isVisible?"100vh":"0px"}),(function(e){return e.theme.size.mobile}),(function(e){return!e.isVisible&&(0,o.css)(["height:0%;"])})),C=o.default.ul.withConfig({displayName:"category__CategoryList",componentId:"sc-sokdxm-1"})(["visibility:",";"],(function(e){return e.isVisible?"visible":"hidden"})),E=o.default.li.withConfig({displayName:"category__CategoryItem",componentId:"sc-sokdxm-2"})(["text-overflow:ellipsis;"]),k=function(e){var t=e.isCategory,n=e.categoryData;return r.createElement(x,{isVisible:t},r.createElement(C,{isVisible:t},n.map((function(e){return r.createElement(E,{key:e.fieldValue},r.createElement(T.Link,{to:"/"+e.fieldValue}," ",e.fieldValue+" ("+e.totalCount+")"," "))}))))},S=o.default.h2.withConfig({displayName:"header__Logo",componentId:"sc-9vdx90-0"})(["text-align:center;"]),A=o.default.div.withConfig({displayName:"header__HeaderElement",componentId:"sc-9vdx90-1"})(["position:fixed;width:100%;height:80px;background-color:#fff;top:",";opacity:0.85;backdrop-filter:blur(10px);transition:.5s ease-out;",""],(function(e){return e.isHeader?"0px":"-80px"}),(function(e){return e.isScrolled&&(0,o.css)(["box-shadow:0 4px 4px rgba(31,35,46,.15);transition:box-shadow .5s ease-in;transition:.5s ease-in;"])})),O=function(e){var t=e.categoryData,n=(0,r.useState)(!1),o=n[0],i=n[1],a=(0,r.useState)(!0),c=a[0],u=a[1],s=(0,r.useState)(0),l=s[0],f=s[1],d=(0,r.useState)(!1),h=d[0],m=d[1],y=function(){var e=window.pageYOffset;u(!(l<e)),f(e),i(window.pageYOffset>0)};(0,r.useEffect)((function(){return window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[o,l]);return r.createElement(A,{isScrolled:o,isHeader:c},r.createElement(v,{changeCategoryState:function(e){m(!h)},isCategory:h}),r.createElement(S,null,r.createElement(T.Link,{to:"/"},"K-Blog")),r.createElement(p,null),r.createElement(k,{isCategory:h,categoryData:t}))},I=(0,o.createGlobalStyle)(["html{height:200%;};body{padding:0;margin:0;background:",";height:200%;overflow-x:hidden;overflow-y:auto;}a{text-decoration-line:none;color:black;}"],(function(e){return e.theme.colors.first})),_={mobile:"(max-width: "+"768px"+")",tablet:"(max-width: "+"1024px"+")",laptop:"(min-width: "+"1460px"+")",desktop:"(min-width: "+"1700px"+")"},j={first:"#121212",second:"#181818",third:"#282828",fourd:"#404040",primaryText:"#FFFFFF",secondaryText:"#B3B3B3"},L={first:"#FFF",second:"#FFF",third:"#FFF",fourd:"#101010",primaryText:"#000",secondaryText:"#121212"},P=function(e){var t=e.children,n={};return n.colors=s()?j:L,n.size=_,r.createElement(o.ThemeProvider,{theme:n},t)},N=(n(3675),n(5414)),M=o.default.main.withConfig({displayName:"templates__MainElement",componentId:"sc-1t1nkl0-0"})(["height:200%;"]),F=function(e){var t=e.children;return r.createElement(T.StaticQuery,{query:"4075554628",render:function(e){return r.createElement(u,null,r.createElement(P,null,r.createElement(I,null),r.createElement(M,null,r.createElement(N.q,null,r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"})),r.createElement(O,{categoryData:e.allMdx.group}),t)))}})}}}]);
//# sourceMappingURL=bb0bafb55899c9f4076a990f50db6ce0041f4d0c-341cb5cf6350bf18d7e4.js.map