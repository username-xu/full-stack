(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],f=0,l=[];f<c.length;f++)a=c[f],o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-390e48fe":"d6f6fbaa","chunk-52c6d355":"25dfcbf6"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-390e48fe":1,"chunk-52c6d355":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-390e48fe":"16b44605","chunk-52c6d355":"a5e73752"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e),s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("537a");var r=n("ac28"),a=(n("a52c"),n("2ed4")),o=(n("2994"),n("2bdd")),u=(n("c194"),n("7744")),c=(n("ab71"),n("58e6")),i=(n("0653"),n("34e9")),s=(n("4d48"),n("d1e1")),f=(n("81e6"),n("9ffb")),l=(n("da3c"),n("0b33")),d=(n("bda7"),n("5e46")),p=(n("4056"),n("44bf")),h=(n("cadf"),n("551c"),n("f751"),n("097d"),n("a026")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("van-tabbar",{on:{change:e.tabbarChange},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tabbar-item",{attrs:{name:"news",icon:"newspaper-o"}},[e._v("新闻头条")]),n("van-tabbar-item",{attrs:{name:"mine",icon:"contact"}},[e._v("我的")])],1)],1)},v=[],m={data:function(){return{active:"news"}},created:function(){this.tabbarChange(this.active)},methods:{tabbarChange:function(e){this.active=e,this.$router.push({path:e})}}},g=m,y=(n("5c0b"),n("2877")),w=Object(y["a"])(g,b,v,!1,null,null,null),k=w.exports,_=n("8c4f");h["a"].use(_["a"]);var j=new _["a"]({mode:"history",base:"/",routes:[{path:"/",name:"news",component:function(){return n.e("chunk-52c6d355").then(n.bind(null,"a2f9"))}},{path:"/news",name:"news",component:function(){return n.e("chunk-52c6d355").then(n.bind(null,"a2f9"))}},{path:"/mine",name:"mine",component:function(){return n.e("chunk-390e48fe").then(n.bind(null,"0a4e"))}}]}),O=n("2f62");h["a"].use(O["a"]);var S=new O["a"].Store({state:{},mutations:{},actions:{}});h["a"].use(r["a"]).use(a["a"]).use(o["a"]).use(u["a"]).use(c["a"]).use(i["a"]).use(s["a"]).use(f["a"]).use(l["a"]).use(d["a"]).use(p["a"]),h["a"].config.productionTip=!1,new h["a"]({router:j,store:S,render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("e332"),a=n.n(r);a.a},e332:function(e,t,n){}});
//# sourceMappingURL=app.268c790f.js.map