import{ad as Ae,ae as Te,af as me,ag as ge,ah as he,S as Y,i as E,s as G,Q as Oe,R as U,U as I,w as p,x as h,y as m,V as j,q as u,o as _,B as g,E as L,Y as ye,Z as Be,k as C,m as S,g as w,d as b,l as v,ai as qe,n as y,p as B,aj as Ke,I as P,ak as de,al as W,am as x,an as D,ao as Ue,ap as be,aq as Ie,ar as je,as as Fe,t as A,h as T,T as we,F as Re,at as Ve,a3 as X,a4 as Z,au as De,av as He,aw as Je,ax as Qe,ay as Ye,az as Ee,aA as Ge,aB as Xe,aC as Ze,aD as Le,j as ke,e as We,c as xe,a as et,b as ee,K as tt,aE as nt,O as F,ab as rt,aF as at,aG as lt,aH as ot,ac as st,aI as ve,aJ as it,aK as ft,aL as ct,aM as $t,aN as ut,aO as _t,G as pt,aP as mt,a1 as Ce,aQ as gt,aR as ht,aS as dt,aT as bt,aU as wt,aV as kt,aW as vt,aX as Ct,aY as St}from"./vendor-7fbbcfcb.js";import{b as Nt}from"./paths-4b3c6e7e.js";import{A as R,n as zt}from"./AppAnchor-1b07eb4c.js";import{a as te}from"./preferences-88d5a5ca.js";const Mt=(s,e)=>Ae(s,{on_bind:e,binds:"control+/",repeat:!0}),H=Te.version;function ne(...s){return JSON.stringify(s)}function Pt(s){let e=new Map;return[(...n)=>{const t=ne(...n);return e.has(t)||e.set(t,s(...n)),e.get(t)},(...n)=>{const t=ne(...n);e.delete(t)}]}function At(s,e,n){let t=e.offsetTop;switch(n){case"center":t-=e.offsetHeight/2-s.offsetHeight/2;case"end":t+=e.offsetHeight-s.offsetHeight}return t-s.offsetTop}function re(s,e="start",n="auto",t){const r=typeof s=="string"?document.querySelector(s):s;if(!r)throw ReferenceError(`bad argument #0 to 'scroll_into_container' (target '${s}' is invalid)`);const a=t!=null?t:r.parentElement;if(!a)throw ReferenceError("bad argument #0 to 'scroll_into_container' (target doesn't have parent element)");a.scrollTo({behavior:n,top:At(a,r,e)})}const{Map:Tt}=De;function ae(s){const e=s[2]?s[14](s[2]):null;s[15]=e}function le(s,e,n){const t=s.slice();return t[16]=e[n],t[18]=n,t}function oe(s){let e,n,t={ctx:s,current:null,token:null,hasCatch:!1,pending:Et,then:yt,catch:Ot,value:14,blocks:[,,,]};return Ke(ln(),t),{c(){e=v(),t.block.c()},l(r){e=v(),t.block.l(r)},m(r,a){w(r,e,a),t.block.m(r,t.anchor=a),t.mount=()=>e.parentNode,t.anchor=e,n=!0},p(r,a){s=r,qe(t,s,a)},i(r){n||(u(t.block),n=!0)},o(r){for(let a=0;a<3;a+=1){const i=t.blocks[a];_(i)}n=!1},d(r){r&&b(e),t.block.d(r),t.token=null,t=null}}}function Ot(s){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function yt(s){ae(s);let e,n;return e=new de({props:{margin_top:"huge",width:"prose",max_width:"viewport-75",actions:[[W,{on_bind:s[5].bind(null,1,s[15])}],[x,{on_bind:s[5].bind(null,-1,s[15])}]],$$slots:{default:[Yt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){ae(t);const a={};r&4&&(a.actions=[[W,{on_bind:t[5].bind(null,1,t[15])}],[x,{on_bind:t[5].bind(null,-1,t[15])}]]),r&524318&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Bt(s){let e,n,t,r;function a(o){s[8](o)}function i(o){s[9](o)}let l={placeholder:"Search docs...",variation:"block"};return s[1]!==void 0&&(l.element=s[1]),s[2]!==void 0&&(l.value=s[2]),e=new be({props:l}),U.push(()=>I(e,"element",a)),U.push(()=>I(e,"value",i)),e.$on("focusin",s[7]),{c(){p(e.$$.fragment)},l(o){h(e.$$.fragment,o)},m(o,f){m(e,o,f),r=!0},p(o,f){const c={};!n&&f&2&&(n=!0,c.element=o[1],j(()=>n=!1)),!t&&f&4&&(t=!0,c.value=o[2],j(()=>t=!1)),e.$set(c)},i(o){r||(u(e.$$.fragment,o),r=!0)},o(o){_(e.$$.fragment,o),r=!1},d(o){g(e,o)}}}function se(s){let e,n;return e=new D({props:{$$slots:{default:[Ht]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524316&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function qt(s){let e,n,t;var r=fe(s[16].identifier);function a(i){return{}}return r&&(e=new r(a())),{c(){e&&p(e.$$.fragment),n=v()},l(i){e&&h(e.$$.fragment,i),n=v()},m(i,l){e&&m(e,i,l),w(i,n,l),t=!0},p(i,l){if(r!==(r=fe(i[16].identifier))){if(e){y();const o=e;_(o.$$.fragment,1,0,()=>{g(o,1)}),B()}r?(e=new r(a()),p(e.$$.fragment),u(e.$$.fragment,1),m(e,n.parentNode,n)):e=null}},i(i){t||(e&&u(e.$$.fragment,i),t=!0)},o(i){e&&_(e.$$.fragment,i),t=!1},d(i){i&&b(n),e&&g(e,i)}}}function Kt(s){let e=s[16].title+"",n;return{c(){n=A(e)},l(t){n=T(t,e)},m(t,r){w(t,n,r)},p(t,r){r&4&&e!==(e=t[16].title+"")&&ke(n,e)},d(t){t&&b(n)}}}function Ut(s){let e,n;return e=new Le({props:{href:s[16].identifier,target:"_blank",$$slots:{default:[Kt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4&&(a.href=t[16].identifier),r&524292&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function It(s){let e,n;return e=new Xe({props:{$$slots:{default:[Ut]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524292&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function jt(s){let e,n;return e=new Ze({props:{size:"1em"}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p:P,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Ft(s){let e,n,t,r,a,i;return e=new Ye({props:{$$slots:{default:[qt]},$$scope:{ctx:s}}}),t=new Ee({props:{$$slots:{default:[It]},$$scope:{ctx:s}}}),a=new Ge({props:{$$slots:{default:[jt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=C(),p(t.$$.fragment),r=C(),p(a.$$.fragment)},l(l){h(e.$$.fragment,l),n=S(l),h(t.$$.fragment,l),r=S(l),h(a.$$.fragment,l)},m(l,o){m(e,l,o),w(l,n,o),m(t,l,o),w(l,r,o),m(a,l,o),i=!0},p(l,o){const f={};o&524292&&(f.$$scope={dirty:o,ctx:l}),e.$set(f);const c={};o&524292&&(c.$$scope={dirty:o,ctx:l}),t.$set(c);const $={};o&524288&&($.$$scope={dirty:o,ctx:l}),a.$set($)},i(l){i||(u(e.$$.fragment,l),u(t.$$.fragment,l),u(a.$$.fragment,l),i=!0)},o(l){_(e.$$.fragment,l),_(t.$$.fragment,l),_(a.$$.fragment,l),i=!1},d(l){g(e,l),l&&b(n),g(t,l),l&&b(r),g(a,l)}}}function Rt(s){let e,n,t;return e=new Je({props:{palette:s[18]===s[4]?"accent":void 0,elevation:"none",sizing:"tiny",$$slots:{default:[Ft]},$$scope:{ctx:s}}}),e.$on("pointerenter",function(){Qe(s[6].bind(null,s[18]))&&s[6].bind(null,s[18]).apply(this,arguments)}),{c(){p(e.$$.fragment),n=C()},l(r){h(e.$$.fragment,r),n=S(r)},m(r,a){m(e,r,a),w(r,n,a),t=!0},p(r,a){s=r;const i={};a&20&&(i.palette=s[18]===s[4]?"accent":void 0),a&524292&&(i.$$scope={dirty:a,ctx:s}),e.$set(i)},i(r){t||(u(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){g(e,r),r&&b(n)}}}function ie(s,e){let n,t,r;return t=new He({props:{$$slots:{default:[Rt]},$$scope:{ctx:e}}}),{key:s,first:null,c(){n=v(),p(t.$$.fragment),this.h()},l(a){n=v(),h(t.$$.fragment,a),this.h()},h(){this.first=n},m(a,i){w(a,n,i),m(t,a,i),r=!0},p(a,i){e=a;const l={};i&524308&&(l.$$scope={dirty:i,ctx:e}),t.$set(l)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&b(n),g(t,a)}}}function Vt(s){let e=[],n=new Tt,t,r,a=s[15];const i=l=>l[16].identifier;for(let l=0;l<a.length;l+=1){let o=le(s,a,l),f=i(o);n.set(f,e[l]=ie(f,o))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=v()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=v()},m(l,o){for(let f=0;f<e.length;f+=1)e[f].m(l,o);w(l,t,o),r=!0},p(l,o){o&84&&(a=l[15],y(),e=X(e,o,i,1,l,a,n,t.parentNode,Z,ie,t,le),B())},i(l){if(!r){for(let o=0;o<a.length;o+=1)u(e[o]);r=!0}},o(l){for(let o=0;o<e.length;o+=1)_(e[o]);r=!1},d(l){for(let o=0;o<e.length;o+=1)e[o].d(l);l&&b(t)}}}function Dt(s){let e,n;return e=new Re({props:{spacing:"small",$$slots:{default:[Vt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524308&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Ht(s){let e,n,t;function r(i){s[10](i)}let a={max_height:"viewport-50",$$slots:{default:[Dt]},$$scope:{ctx:s}};return s[3]!==void 0&&(a.element=s[3]),e=new Ie({props:a}),U.push(()=>I(e,"element",r)),{c(){p(e.$$.fragment)},l(i){h(e.$$.fragment,i)},m(i,l){m(e,i,l),t=!0},p(i,l){const o={};l&524308&&(o.$$scope={dirty:l,ctx:i}),!n&&l&8&&(n=!0,o.element=i[3],j(()=>n=!1)),e.$set(o)},i(i){t||(u(e.$$.fragment,i),t=!0)},o(i){_(e.$$.fragment,i),t=!1},d(i){g(e,i)}}}function Jt(s){let e;return{c(){e=A("Powered by FlexSearch")},l(n){e=T(n,"Powered by FlexSearch")},m(n,t){w(n,e,t)},d(n){n&&b(e)}}}function Qt(s){let e,n;return e=new R({props:{class:"anchor",href:"https://github.com/nextapps-de/flexsearch",palette:"informative",$$slots:{default:[Jt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Yt(s){let e,n,t,r,a;e=new D({props:{$$slots:{default:[Bt]},$$scope:{ctx:s}}});let i=s[15]&&se(s);return r=new D({props:{$$slots:{default:[Qt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=C(),i&&i.c(),t=C(),p(r.$$.fragment)},l(l){h(e.$$.fragment,l),n=S(l),i&&i.l(l),t=S(l),h(r.$$.fragment,l)},m(l,o){m(e,l,o),w(l,n,o),i&&i.m(l,o),w(l,t,o),m(r,l,o),a=!0},p(l,o){const f={};o&524294&&(f.$$scope={dirty:o,ctx:l}),e.$set(f),l[15]?i?(i.p(l,o),o&4&&u(i,1)):(i=se(l),i.c(),u(i,1),i.m(t.parentNode,t)):i&&(y(),_(i,1,1,()=>{i=null}),B());const c={};o&524288&&(c.$$scope={dirty:o,ctx:l}),r.$set(c)},i(l){a||(u(e.$$.fragment,l),u(i),u(r.$$.fragment,l),a=!0)},o(l){_(e.$$.fragment,l),_(i),_(r.$$.fragment,l),a=!1},d(l){g(e,l),l&&b(n),i&&i.d(l),l&&b(t),g(r,l)}}}function Et(s){let e,n;return e=new de({props:{margin_top:"huge",width:"prose",max_width:"viewport-75",$$slots:{default:[Lt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Gt(s){let e,n,t;return n=new Ve({}),{c(){e=A("Initializing search engine"),p(n.$$.fragment)},l(r){e=T(r,"Initializing search engine"),h(n.$$.fragment,r)},m(r,a){w(r,e,a),m(n,r,a),t=!0},i(r){t||(u(n.$$.fragment,r),t=!0)},o(r){_(n.$$.fragment,r),t=!1},d(r){r&&b(e),g(n,r)}}}function Xt(s){let e,n;return e=new we({props:{is:"span",$$slots:{default:[Gt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Zt(s){let e,n;return e=new je({props:{width:"100",$$slots:{default:[Xt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Lt(s){let e,n;return e=new Ue({props:{$$slots:{default:[Zt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&524288&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Wt(s){let e,n,t=s[0]&&oe(s);return{c(){t&&t.c(),e=v()},l(r){t&&t.l(r),e=v()},m(r,a){t&&t.m(r,a),w(r,e,a),n=!0},p(r,a){r[0]?t?(t.p(r,a),a&1&&u(t,1)):(t=oe(r),t.c(),u(t,1),t.m(e.parentNode,e)):t&&(y(),_(t,1,1,()=>{t=null}),B())},i(r){n||(u(t),n=!0)},o(r){_(t),n=!1},d(r){t&&t.d(r),r&&b(e)}}}function xt(s){let e,n,t,r;return e=new ye({}),t=new Be({props:{animation:"slide",direction:"top",alignment_y:"top",$$slots:{default:[Wt]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=C(),p(t.$$.fragment)},l(a){h(e.$$.fragment,a),n=S(a),h(t.$$.fragment,a)},m(a,i){m(e,a,i),w(a,n,i),m(t,a,i),r=!0},p(a,i){const l={};i&524319&&(l.$$scope={dirty:i,ctx:a}),t.$set(l)},i(a){r||(u(e.$$.fragment,a),u(t.$$.fragment,a),r=!0)},o(a){_(e.$$.fragment,a),_(t.$$.fragment,a),r=!1},d(a){g(e,a),a&&b(n),g(t,a)}}}function en(s){let e,n,t;function r(i){s[11](i)}let a={class:"search-prompt",logic_id:"search-prompt",dismissible:!0,$$slots:{default:[xt]},$$scope:{ctx:s}};return s[0]!==void 0&&(a.logic_state=s[0]),e=new Oe({props:a}),U.push(()=>I(e,"logic_state",r)),{c(){p(e.$$.fragment)},l(i){h(e.$$.fragment,i)},m(i,l){m(e,i,l),t=!0},p(i,[l]){const o={};l&524319&&(o.$$scope={dirty:l,ctx:i}),!n&&l&1&&(n=!0,o.logic_state=i[0],j(()=>n=!1)),e.$set(o)},i(i){t||(u(e.$$.fragment,i),t=!0)},o(i){_(e.$$.fragment,i),t=!1},d(i){g(e,i)}}}var O;(function(s){s.blog="blog",s.docs="docs",s.playground="playground"})(O||(O={}));const tn={[O.blog]:me,[O.docs]:ge,[O.playground]:he};var J;(function(s){s[s.text=0]="text",s[s.title=1]="title",s[s.identifier=2]="identifier"})(J||(J={}));var Q;(function(s){s[s.preview=1]="preview"})(Q||(Q={}));const nn={[O.blog]:1,[O.docs]:2,[O.playground]:0};async function rn(){return(await(await fetch("/api/v4/search.json")).json()).data}function Se(s){return zt(s).split("/")[1]}function fe(s){var e;const n=Se(s);return(e=tn[n])!==null&&e!==void 0?e:null}async function an(){const s=new Fe.Document({tokenize:"full",preset:"match",document:{id:"identifier",index:["identifier","text","title"]}}),e=await rn(),n=new Map;return await Promise.all(e.map(t=>{const{identifier:r,text:a,title:i}=t;return n.set(r,i),s.addAsync(t.identifier,{identifier:r,text:a,title:i})})),t=>{var r;const a=new Map,i=s.search(t,10);for(const l of i){const o=J[l.field];for(const f of l.result){const c=(r=a.get(f))!==null&&r!==void 0?r:0;a.set(f,c+o)}}for(let[l,o]of a.entries()){const f=Se(l);f===O.playground&&l.includes("preview")&&(o+=Q.preview),o+=nn[f],a.set(l,o)}return Array.from(a.entries()).sort((l,o)=>o[1]-l[1]).slice(0,9).map(l=>{const[o]=l,f=n.get(o);return{identifier:o,title:f}})}}const ln=Pt(an)[0];function on(s,e,n){let{logic_state:t=!1}=e,r,a,i=-1,l="";function o(){if(!a)return[null,null];const k=a.querySelectorAll(".tile")[i];if(!k)return[null,null];const M=k.querySelector(".clickable--item");return[k,M]}async function f(k){if(k>-1){await L();const[M,q]=o();if(!q||!M)return;q.focus(),re(M,"center","smooth",a)}else if(r&&r.focus(),a){const M=a.querySelector(".tile");M&&re(M,"center","smooth",a)}}function c(k,M,q){var K;if(q.preventDefault(),!q.detail.active)return;const Pe=(K=M==null?void 0:M.length)!==null&&K!==void 0?K:0;n(4,i=Math.max(Math.min(i+k,Pe-1),-1)),f(i)}async function $(k,M){n(4,i=k),await L();const[q,K]=o();!K||K.focus()}function d(k){n(4,i=-1),f(i)}function N(k){r=k,n(1,r)}function z(k){l=k,n(2,l),n(0,t)}function ze(k){a=k,n(3,a)}function Me(k){t=k,n(0,t)}return s.$$set=k=>{"logic_state"in k&&n(0,t=k.logic_state)},s.$$.update=()=>{s.$$.dirty&1&&(t||n(2,l="")),s.$$.dirty&3&&t&&r&&r.focus(),s.$$.dirty&4&&n(4,i=-1)},[t,r,l,a,i,c,$,d,N,z,ze,Me]}class sn extends Y{constructor(e){super();E(this,e,on,en,G,{logic_state:0})}}function ce(s){let e;return{c(){e=A(s[2])},l(n){e=T(n,s[2])},m(n,t){w(n,e,t)},p(n,t){t&4&&ke(e,n[2])},d(n){n&&b(e)}}}function fn(s){let e,n,t,r,a,i,l;var o=s[3];function f($){return{props:{size:"1em"}}}o&&(n=new o(f()));let c=s[1]&&ce(s);return{c(){e=We("button"),n&&p(n.$$.fragment),t=C(),c&&c.c(),this.h()},l($){e=xe($,"BUTTON",{class:!0});var d=et(e);n&&h(n.$$.fragment,d),t=S(d),c&&c.l(d),d.forEach(b),this.h()},h(){ee(e,"class",r=s[0]||void 0)},m($,d){w($,e,d),n&&m(n,e,null),tt(e,t),c&&c.m(e,null),a=!0,i||(l=nt(e,"click",s[6]),i=!0)},p($,[d]){if(o!==(o=$[3])){if(n){y();const N=n;_(N.$$.fragment,1,0,()=>{g(N,1)}),B()}o?(n=new o(f()),p(n.$$.fragment),u(n.$$.fragment,1),m(n,e,t)):n=null}$[1]?c?c.p($,d):(c=ce($),c.c(),c.m(e,null)):c&&(c.d(1),c=null),(!a||d&1&&r!==(r=$[0]||void 0))&&ee(e,"class",r)},i($){a||(n&&u(n.$$.fragment,$),a=!0)},o($){n&&_(n.$$.fragment,$),a=!1},d($){$&&b(e),n&&g(n),c&&c.d(),i=!1,l()}}}function cn(s,e,n){let t,r,a,i,l,o;F(s,te,z=>n(10,o=z));let{class:f=""}=e,{has_text:c=!1}=e;const $=rt();F(s,$,z=>n(8,i=z));const d=at();F(s,d,z=>n(9,l=z));function N(z){st(te,o=t,o)}return s.$$set=z=>{"class"in z&&n(0,f=z.class),"has_text"in z&&n(1,c=z.has_text)},s.$$.update=()=>{s.$$.dirty&768&&n(7,t=!i&&l||i==="dark"?"light":"dark"),s.$$.dirty&128&&n(3,r=t==="light"?lt:ot),s.$$.dirty&128&&n(2,a=t[0].toUpperCase()+t.slice(1))},[f,c,a,r,$,d,N,t,i,l]}class Ne extends Y{constructor(e){super();E(this,e,cn,fn,G,{class:0,has_text:1})}}function $e(s,e,n){const t=s.slice();return t[7]=e[n],t}function ue(s,e,n){const t=s.slice();return t[7]=e[n],t}function $n(s){let e;return{c(){e=A("Kahi UI")},l(n){e=T(n,"Kahi UI")},m(n,t){w(n,e,t)},d(n){n&&b(e)}}}function un(s){let e,n;return{c(){e=A("v"),n=A(H)},l(t){e=T(t,"v"),n=T(t,H)},m(t,r){w(t,e,r),w(t,n,r)},p:P,d(t){t&&b(e),t&&b(n)}}}function _n(s){let e,n;return e=new we({props:{is:"small",$$slots:{default:[un]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4096&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function pn(s){let e,n,t,r,a,i;return e=new R({props:{class:"anchor",href:Nt||"/",no_handle:!0,prefetch:!0,$$slots:{default:[$n]},$$scope:{ctx:s}}}),t=new pt({props:{orientation:"vertical"}}),a=new R({props:{class:"anchor",href:"https://github.com/novacbn/kahi-ui/releases/v"+H,$$slots:{default:[_n]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=C(),p(t.$$.fragment),r=C(),p(a.$$.fragment)},l(l){h(e.$$.fragment,l),n=S(l),h(t.$$.fragment,l),r=S(l),h(a.$$.fragment,l)},m(l,o){m(e,l,o),w(l,n,o),m(t,l,o),w(l,r,o),m(a,l,o),i=!0},p(l,o){const f={};o&4096&&(f.$$scope={dirty:o,ctx:l}),e.$set(f);const c={};o&4096&&(c.$$scope={dirty:o,ctx:l}),a.$set(c)},i(l){i||(u(e.$$.fragment,l),u(t.$$.fragment,l),u(a.$$.fragment,l),i=!0)},o(l){_(e.$$.fragment,l),_(t.$$.fragment,l),_(a.$$.fragment,l),i=!1},d(l){g(e,l),l&&b(n),g(t,l),l&&b(r),g(a,l)}}}function mn(s){let e,n;return e=new be({props:{type:"search",placeholder:"[CTRL+/] Search",palette:"auto",sizing:"tiny",variation:"block",alignment_x:"center",max_width:"prose"}}),e.$on("focusin",s[3]),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p:P,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function gn(s){let e,n;return e=new kt({props:{size:"1em"}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p:P,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function hn(s){let e,n;return e=new Ct({props:{hidden:!s[2],$$slots:{default:[dn]},$$scope:{ctx:s}}}),e.$on("click",s[3]),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4&&(a.hidden=!t[2]),r&4096&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function dn(s){let e,n,t;return e=new St({props:{size:"1em"}}),{c(){p(e.$$.fragment),n=A(`
                                Search`)},l(r){h(e.$$.fragment,r),n=T(r,`
                                Search`)},m(r,a){m(e,r,a),w(r,n,a),t=!0},p:P,i(r){t||(u(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){g(e,r),r&&b(n)}}}function bn(s){let e,n,t=s[7].text+"",r,a;var i=s[7].icon;function l(o){return{props:{size:"1em"}}}return i&&(e=new i(l())),{c(){e&&p(e.$$.fragment),n=C(),r=A(t)},l(o){e&&h(e.$$.fragment,o),n=S(o),r=T(o,t)},m(o,f){e&&m(e,o,f),w(o,n,f),w(o,r,f),a=!0},p(o,f){if(i!==(i=o[7].icon)){if(e){y();const c=e;_(c.$$.fragment,1,0,()=>{g(c,1)}),B()}i?(e=new i(l()),p(e.$$.fragment),u(e.$$.fragment,1),m(e,n.parentNode,n)):e=null}},i(o){a||(e&&u(e.$$.fragment,o),a=!0)},o(o){e&&_(e.$$.fragment,o),a=!1},d(o){e&&g(e,o),o&&b(n),o&&b(r)}}}function _e(s,e){let n,t,r;return t=new R({props:{class:"menu--item",href:e[7].href,no_handle:!0,prefetch:!0,$$slots:{default:[bn]},$$scope:{ctx:e}}}),{key:s,first:null,c(){n=v(),p(t.$$.fragment),this.h()},l(a){n=v(),h(t.$$.fragment,a),this.h()},h(){this.first=n},m(a,i){w(a,n,i),m(t,a,i),r=!0},p(a,i){e=a;const l={};i&4096&&(l.$$scope={dirty:i,ctx:e}),t.$set(l)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&b(n),g(t,a)}}}function wn(s){let e,n;return e=new Ne({props:{class:"menu--item",has_text:!0}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function kn(s){let e,n=[],t=new Map,r,a,i,l=hn(s),o=V;const f=$=>$[7].href;for(let $=0;$<o.length;$+=1){let d=ue(s,o,$),N=f(d);t.set(N,n[$]=_e(N,d))}let c=wn();return{c(){l&&l.c(),e=C();for(let $=0;$<n.length;$+=1)n[$].c();r=C(),c&&c.c(),a=v()},l($){l&&l.l($),e=S($);for(let d=0;d<n.length;d+=1)n[d].l($);r=S($),c&&c.l($),a=v()},m($,d){l&&l.m($,d),w($,e,d);for(let N=0;N<n.length;N+=1)n[N].m($,d);w($,r,d),c&&c.m($,d),w($,a,d),i=!0},p($,d){l.p($,d),d&0&&(o=V,y(),n=X(n,d,f,1,$,o,t,r.parentNode,Z,_e,r,ue),B())},i($){if(!i){u(l);for(let d=0;d<o.length;d+=1)u(n[d]);u(c),i=!0}},o($){_(l);for(let d=0;d<n.length;d+=1)_(n[d]);_(c),i=!1},d($){l&&l.d($),$&&b(e);for(let d=0;d<n.length;d+=1)n[d].d($);$&&b(r),c&&c.d($),$&&b(a)}}}function vn(s){let e,n;return e=new Ce({props:{$$slots:{default:[kn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4100&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Cn(s){let e,n;return e=new vt({props:{variation:"borders",elevation:"medium",padding:"medium",radius:"tiny",$$slots:{default:[vn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4100&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Sn(s){let e,n,t,r;return e=new bt({props:{palette:"inverse",variation:"clear",$$slots:{default:[gn]},$$scope:{ctx:s}}}),t=new wt({props:{alignment_x:"left",spacing:"small",$$slots:{default:[Cn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=C(),p(t.$$.fragment)},l(a){h(e.$$.fragment,a),n=S(a),h(t.$$.fragment,a)},m(a,i){m(e,a,i),w(a,n,i),m(t,a,i),r=!0},p(a,i){const l={};i&4096&&(l.$$scope={dirty:i,ctx:a}),e.$set(l);const o={};i&4100&&(o.$$scope={dirty:i,ctx:a}),t.$set(o)},i(a){r||(u(e.$$.fragment,a),u(t.$$.fragment,a),r=!0)},o(a){_(e.$$.fragment,a),_(t.$$.fragment,a),r=!1},d(a){g(e,a),a&&b(n),g(t,a)}}}function Nn(s){let e,n,t=(s[7].variation==="flush"?"":s[7].text)+"",r,a;var i=s[7].icon;function l(o){return{props:{size:"1em"}}}return i&&(e=new i(l())),{c(){e&&p(e.$$.fragment),n=C(),r=A(t)},l(o){e&&h(e.$$.fragment,o),n=S(o),r=T(o,t)},m(o,f){e&&m(e,o,f),w(o,n,f),w(o,r,f),a=!0},p(o,f){if(i!==(i=o[7].icon)){if(e){y();const c=e;_(c.$$.fragment,1,0,()=>{g(c,1)}),B()}i?(e=new i(l()),p(e.$$.fragment),u(e.$$.fragment,1),m(e,n.parentNode,n)):e=null}},i(o){a||(e&&u(e.$$.fragment,o),a=!0)},o(o){e&&_(e.$$.fragment,o),a=!1},d(o){e&&g(e,o),o&&b(n),o&&b(r)}}}function pe(s,e){let n,t,r;return t=new R({props:{class:"menu--item",href:e[7].href,no_handle:!0,prefetch:!0,$$slots:{default:[Nn]},$$scope:{ctx:e}}}),{key:s,first:null,c(){n=v(),p(t.$$.fragment),this.h()},l(a){n=v(),h(t.$$.fragment,a),this.h()},h(){this.first=n},m(a,i){w(a,n,i),m(t,a,i),r=!0},p(a,i){e=a;const l={};i&4096&&(l.$$scope={dirty:i,ctx:e}),t.$set(l)},i(a){r||(u(t.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),r=!1},d(a){a&&b(n),g(t,a)}}}function zn(s){let e,n;return e=new Ne({props:{class:"menu--item"}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Mn(s){let e=[],n=new Map,t,r,a,i=V;const l=f=>f[7].href;for(let f=0;f<i.length;f+=1){let c=$e(s,i,f),$=l(c);n.set($,e[f]=pe($,c))}let o=zn();return{c(){for(let f=0;f<e.length;f+=1)e[f].c();t=C(),o&&o.c(),r=v()},l(f){for(let c=0;c<e.length;c+=1)e[c].l(f);t=S(f),o&&o.l(f),r=v()},m(f,c){for(let $=0;$<e.length;$+=1)e[$].m(f,c);w(f,t,c),o&&o.m(f,c),w(f,r,c),a=!0},p(f,c){c&0&&(i=V,y(),e=X(e,c,l,1,f,i,n,t.parentNode,Z,pe,t,$e),B())},i(f){if(!a){for(let c=0;c<i.length;c+=1)u(e[c]);u(o),a=!0}},o(f){for(let c=0;c<e.length;c+=1)_(e[c]);_(o),a=!1},d(f){for(let c=0;c<e.length;c+=1)e[c].d(f);f&&b(t),o&&o.d(f),f&&b(r)}}}function Pn(s){let e,n,t,r,a;function i(o){s[5](o)}let l={logic_id:"app-navigation",hidden:["widescreen"],dismissible:!0,$$slots:{default:[Sn]},$$scope:{ctx:s}};return s[0]!==void 0&&(l.logic_state=s[0]),e=new mt({props:l}),U.push(()=>I(e,"logic_state",i)),r=new Ce({props:{hidden:["mobile","tablet","desktop"],orientation:"horizontal",sizing:"tiny",$$slots:{default:[Mn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),t=C(),p(r.$$.fragment)},l(o){h(e.$$.fragment,o),t=S(o),h(r.$$.fragment,o)},m(o,f){m(e,o,f),w(o,t,f),m(r,o,f),a=!0},p(o,f){const c={};f&4100&&(c.$$scope={dirty:f,ctx:o}),!n&&f&1&&(n=!0,c.logic_state=o[0],j(()=>n=!1)),e.$set(c);const $={};f&4096&&($.$$scope={dirty:f,ctx:o}),r.$set($)},i(o){a||(u(e.$$.fragment,o),u(r.$$.fragment,o),a=!0)},o(o){_(e.$$.fragment,o),_(r.$$.fragment,o),a=!1},d(o){g(e,o),o&&b(t),g(r,o)}}}function An(s){let e,n,t,r,a,i;return e=new ct({props:{$$slots:{default:[pn]},$$scope:{ctx:s}}}),t=new $t({props:{class:"app-navigation-search",hidden:s[2],margin_x:"medium",$$slots:{default:[mn]},$$scope:{ctx:s}}}),a=new ut({props:{$$slots:{default:[Pn]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment),n=C(),p(t.$$.fragment),r=C(),p(a.$$.fragment)},l(l){h(e.$$.fragment,l),n=S(l),h(t.$$.fragment,l),r=S(l),h(a.$$.fragment,l)},m(l,o){m(e,l,o),w(l,n,o),m(t,l,o),w(l,r,o),m(a,l,o),i=!0},p(l,o){const f={};o&4096&&(f.$$scope={dirty:o,ctx:l}),e.$set(f);const c={};o&4&&(c.hidden=l[2]),o&4096&&(c.$$scope={dirty:o,ctx:l}),t.$set(c);const $={};o&4101&&($.$$scope={dirty:o,ctx:l}),a.$set($)},i(l){i||(u(e.$$.fragment,l),u(t.$$.fragment,l),u(a.$$.fragment,l),i=!0)},o(l){_(e.$$.fragment,l),_(t.$$.fragment,l),_(a.$$.fragment,l),i=!1},d(l){g(e,l),l&&b(n),g(t,l),l&&b(r),g(a,l)}}}function Tn(s){let e,n;return e=new _t({props:{$$slots:{default:[On]},$$scope:{ctx:s}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,r){m(e,t,r),n=!0},p(t,r){const a={};r&4098&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function On(s){let e,n,t;function r(i){s[6](i)}let a={};return s[1]!==void 0&&(a.logic_state=s[1]),e=new sn({props:a}),U.push(()=>I(e,"logic_state",r)),{c(){p(e.$$.fragment)},l(i){h(e.$$.fragment,i)},m(i,l){m(e,i,l),t=!0},p(i,l){const o={};!n&&l&2&&(n=!0,o.logic_state=i[1],j(()=>n=!1)),e.$set(o)},i(i){t||(u(e.$$.fragment,i),t=!0)},o(i){_(e.$$.fragment,i),t=!1},d(i){g(e,i)}}}function yn(s){let e,n,t,r,a,i;e=new it({props:{class:"app-navigation",$$slots:{default:[An]},$$scope:{ctx:s}}});let l=Tn(s);return{c(){p(e.$$.fragment),n=C(),l&&l.c(),t=v()},l(o){h(e.$$.fragment,o),n=S(o),l&&l.l(o),t=v()},m(o,f){m(e,o,f),w(o,n,f),l&&l.m(o,f),w(o,t,f),r=!0,a||(i=ft(Mt.call(null,window,s[3])),a=!0)},p(o,[f]){const c={};f&4101&&(c.$$scope={dirty:f,ctx:o}),e.$set(c),l.p(o,f)},i(o){r||(u(e.$$.fragment,o),u(l),r=!0)},o(o){_(e.$$.fragment,o),_(l),r=!1},d(o){g(e,o),o&&b(n),l&&l.d(o),o&&b(t),a=!1,i()}}}const V=[{href:"/blog",text:"Blog",icon:me},{href:"/docs",text:"Documentation",icon:ge},{href:"/playground",text:"Playground",icon:he},{href:"https://github.com/novacbn/kahi-ui",text:"Source",variation:"flush",icon:gt},{href:"https://github.com/novacbn/kahi-ui/releases",text:"Releases",variation:"flush",icon:ht},{href:"/chat",text:"Chat",variation:"flush",icon:dt}],Bn=ve({mobile:!0,tablet:!0,desktop:!0}),qn=ve({mobile:!0,tablet:!0});function Kn(s,e,n){let t,r;F(s,Bn,c=>n(4,t=c)),F(s,qn,c=>n(2,r=c));let a=!1,i=!1;function l(c){c.preventDefault();const $=c.target;$&&$.blur(),n(0,a=!1),n(1,i=!0)}function o(c){a=c,n(0,a),n(4,t)}function f(c){i=c,n(1,i)}return s.$$.update=()=>{s.$$.dirty&16&&(t||n(0,a=!1))},[a,i,r,l,t,o,f]}class Rn extends Y{constructor(e){super();E(this,e,Kn,yn,G,{})}}export{Rn as A,H as P,Pt as m,re as s};