import{bn as be,S as H,i as D,s as P,bo as ke,w as g,x as d,y as b,q as c,o as u,B as k,O as M,l as C,g as p,n as N,p as E,d as m,T as L,t as T,h as A,bp as fe,bq as se,I as z,k as h,m as v,bh as ae,H as F,j,ao as we,bg as G,br as he,bs as ve,bt as Ce,bu as $e,bv as q,bw as B,F as W,a3 as oe,a4 as ie,V as Te,an as Ae,R as Ne,U as Ee,b0 as Le,J as Se,L as Ie,M as je,N as He,a7 as De,e as Pe,c as ze,a as Re,K as Me,bx as ce,by as R,bz as ue,a$ as Oe,b1 as qe,b2 as Be,bA as Ue,bB as J,bC as _e,bD as me}from"../chunks/vendor-387a5055.js";import{a as pe}from"../chunks/navigation-967ad46c.js";import{p as O}from"../chunks/stores-fb089d61.js";import{R as Ve}from"../chunks/REPLEmbed-9b44e74e.js";import{A as ge}from"../chunks/AppAnchor-8c92e183.js";import"../chunks/singletons-a6a7384f.js";import"../chunks/preferences-7cbf9ac1.js";import"../chunks/REPLSplit-1459bff2.js";import"../chunks/preload-helper-ec9aa979.js";const K=(o,e)=>{function n(){f.disconnect();const $=t();for(const i of $)i.remove()}function t(){if(e.metadata.snippets.length===0)return[];const $=e.metadata.snippets.map(i=>`.repl-snippet[data-identifier="${i.identifier}"]`).join(",");return Array.from(o.querySelectorAll($))}function r(){if(e.metadata.snippets.length===0)return[];const $=e.metadata.snippets.map(i=>`.highlight[data-identifier="${i.identifier}"][data-mode="repl"]:not([data-observing])`).join(",");return Array.from(o.querySelectorAll($))}function l(){const $=r();for(const i of $)i.setAttribute("data-observing","true"),f.observe(i)}function s($){const i=$.filter(_=>_.isIntersecting).map(_=>_.target);for(const _ of i){f.unobserve(_);const w=_.getAttribute("data-identifier"),S=_.innerText,I=document.createElement("DIV");I.setAttribute("class","repl-snippet"),I.setAttribute("data-identifier",w),I.setAttribute("data-palette","auto"),_.after(I),_.innerHTML="",_.style.display="none",new Ve({target:I,context:a,props:{identifier:w,value:S}})}}const a=be(),f=new IntersectionObserver(s,{threshold:.1});return e&&l(),{destroy(){n()},update($){n(),e=$,e&&l()}}};function Fe(o){let e,n,t;return e=new L({props:{is:"strong",palette:"negative",$$slots:{default:[We]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),n=T(": failed to load content render")},l(r){d(e.$$.fragment,r),n=A(r,": failed to load content render")},m(r,l){b(e,r,l),p(r,n,l),t=!0},p(r,l){const s={};l&2&&(s.$$scope={dirty:l,ctx:r}),e.$set(s)},i(r){t||(c(e.$$.fragment,r),t=!0)},o(r){u(e.$$.fragment,r),t=!1},d(r){k(e,r),r&&m(n)}}}function Ge(o){let e,n=o[0].stuff.content.render+"",t;return{c(){e=new fe,t=C(),this.h()},l(r){e=se(r),t=C(),this.h()},h(){e.a=t},m(r,l){e.m(n,r,l),p(r,t,l)},p(r,l){l&1&&n!==(n=r[0].stuff.content.render+"")&&e.p(n)},i:z,o:z,d(r){r&&m(t),r&&e.d()}}}function We(o){let e;return{c(){e=T("Error")},l(n){e=A(n,"Error")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function Je(o){let e,n,t,r;const l=[Ge,Fe],s=[];function a(f,$){return f[0].stuff.content?0:1}return e=a(o),n=s[e]=l[e](o),{c(){n.c(),t=C()},l(f){n.l(f),t=C()},m(f,$){s[e].m(f,$),p(f,t,$),r=!0},p(f,$){let i=e;e=a(f),e===i?s[e].p(f,$):(N(),u(s[i],1,1,()=>{s[i]=null}),E(),n=s[e],n?n.p(f,$):(n=s[e]=l[e](f),n.c()),c(n,1),n.m(t.parentNode,t))},i(f){r||(c(n),r=!0)},o(f){u(n),r=!1},d(f){s[e].d(f),f&&m(t)}}}function Ke(o){let e,n;return e=new ke({props:{class:"content-article",actions:[[K,o[0].stuff.content]],$$slots:{default:[Je]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,[r]){const l={};r&1&&(l.actions=[[K,t[0].stuff.content]]),r&3&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Qe(o,e,n){let t;return M(o,O,r=>n(0,t=r)),[t]}class de extends H{constructor(e){super();D(this,e,Qe,Ke,P,{})}}function Q(o,e,n){const t=o.slice();return t[5]=e[n][0],t[6]=e[n][1],t}function X(o,e,n){const t=o.slice();return t[9]=e[n],t}function Y(o,e,n){const t=o.slice();return t[12]=e[n],t}function Z(o){let e,n,t,r;e=new F({props:{is:"h2",id:"api-reference-"+o[0],margin_y:"medium",$$slots:{default:[Xe]},$$scope:{ctx:o}}});let l=o[1],s=[];for(let f=0;f<l.length;f+=1)s[f]=te(Q(o,l,f));const a=f=>u(s[f],1,1,()=>{s[f]=null});return{c(){g(e.$$.fragment),n=h();for(let f=0;f<s.length;f+=1)s[f].c();t=C()},l(f){d(e.$$.fragment,f),n=v(f);for(let $=0;$<s.length;$+=1)s[$].l(f);t=C()},m(f,$){b(e,f,$),p(f,n,$);for(let i=0;i<s.length;i+=1)s[i].m(f,$);p(f,t,$),r=!0},p(f,$){const i={};if($&1&&(i.id="api-reference-"+f[0]),$&32769&&(i.$$scope={dirty:$,ctx:f}),e.$set(i),$&3){l=f[1];let _;for(_=0;_<l.length;_+=1){const w=Q(f,l,_);s[_]?(s[_].p(w,$),c(s[_],1)):(s[_]=te(w),s[_].c(),c(s[_],1),s[_].m(t.parentNode,t))}for(N(),_=l.length;_<s.length;_+=1)a(_);E()}},i(f){if(!r){c(e.$$.fragment,f);for(let $=0;$<l.length;$+=1)c(s[$]);r=!0}},o(f){u(e.$$.fragment,f),s=s.filter(Boolean);for(let $=0;$<s.length;$+=1)u(s[$]);r=!1},d(f){k(e,f),f&&m(n),ae(s,f),f&&m(t)}}}function Xe(o){let e;return{c(){e=T(o[0])},l(n){e=A(n,o[0])},m(n,t){p(n,e,t)},p(n,t){t&1&&j(e,n[0])},d(n){n&&m(e)}}}function Ye(o){let e=o[5]+"",n;return{c(){n=T(e)},l(t){n=A(t,e)},m(t,r){p(t,n,r)},p(t,r){r&2&&e!==(e=t[5]+"")&&j(n,e)},d(t){t&&m(n)}}}function Ze(o){let e,n;return e=new G({props:{$$slots:{default:[Ye]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&32770&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ye(o){let e;return{c(){e=T("Name")},l(n){e=A(n,"Name")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function xe(o){let e;return{c(){e=T("Description")},l(n){e=A(n,"Description")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function et(o){let e;return{c(){e=T("Types")},l(n){e=A(n,"Types")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function tt(o){let e,n,t,r,l,s;return e=new q({props:{$$slots:{default:[ye]},$$scope:{ctx:o}}}),t=new q({props:{$$slots:{default:[xe]},$$scope:{ctx:o}}}),l=new q({props:{$$slots:{default:[et]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),n=h(),g(t.$$.fragment),r=h(),g(l.$$.fragment)},l(a){d(e.$$.fragment,a),n=v(a),d(t.$$.fragment,a),r=v(a),d(l.$$.fragment,a)},m(a,f){b(e,a,f),p(a,n,f),b(t,a,f),p(a,r,f),b(l,a,f),s=!0},p(a,f){const $={};f&32768&&($.$$scope={dirty:f,ctx:a}),e.$set($);const i={};f&32768&&(i.$$scope={dirty:f,ctx:a}),t.$set(i);const _={};f&32768&&(_.$$scope={dirty:f,ctx:a}),l.$set(_)},i(a){s||(c(e.$$.fragment,a),c(t.$$.fragment,a),c(l.$$.fragment,a),s=!0)},o(a){u(e.$$.fragment,a),u(t.$$.fragment,a),u(l.$$.fragment,a),s=!1},d(a){k(e,a),a&&m(n),k(t,a),a&&m(r),k(l,a)}}}function nt(o){let e,n;return e=new $e({props:{$$slots:{default:[tt]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&32768&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function rt(o){let e=o[9].name+"",n;return{c(){n=T(e)},l(t){n=A(t,e)},m(t,r){p(t,n,r)},p(t,r){r&2&&e!==(e=t[9].name+"")&&j(n,e)},d(t){t&&m(n)}}}function lt(o){let e,n;return e=new G({props:{$$slots:{default:[rt]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&32770&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ft(o){let e,n=o[9].description+"",t;return{c(){e=new fe,t=C(),this.h()},l(r){e=se(r),t=C(),this.h()},h(){e.a=t},m(r,l){e.m(n,r,l),p(r,t,l)},p(r,l){l&2&&n!==(n=r[9].description+"")&&e.p(n)},d(r){r&&m(t),r&&e.d()}}}function y(o){let e,n;return e=new L({props:{is:"strong",$$slots:{default:[st]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function st(o){let e;return{c(){e=T("(DEFAULT)")},l(n){e=A(n,"(DEFAULT)")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function at(o){let e=o[12]+"",n,t,r,l,s=o[12]===o[9].default&&y(o);return{c(){n=T(e),t=h(),s&&s.c(),r=h()},l(a){n=A(a,e),t=v(a),s&&s.l(a),r=v(a)},m(a,f){p(a,n,f),p(a,t,f),s&&s.m(a,f),p(a,r,f),l=!0},p(a,f){(!l||f&2)&&e!==(e=a[12]+"")&&j(n,e),a[12]===a[9].default?s?f&2&&c(s,1):(s=y(a),s.c(),c(s,1),s.m(r.parentNode,r)):s&&(N(),u(s,1,1,()=>{s=null}),E())},i(a){l||(c(s),l=!0)},o(a){u(s),l=!1},d(a){a&&m(n),a&&m(t),s&&s.d(a),a&&m(r)}}}function x(o,e){let n,t,r;return t=new G({props:{$$slots:{default:[at]},$$scope:{ctx:e}}}),{key:o,first:null,c(){n=C(),g(t.$$.fragment),this.h()},l(l){n=C(),d(t.$$.fragment,l),this.h()},h(){this.first=n},m(l,s){p(l,n,s),b(t,l,s),r=!0},p(l,s){e=l;const a={};s&32770&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(l){r||(c(t.$$.fragment,l),r=!0)},o(l){u(t.$$.fragment,l),r=!1},d(l){l&&m(n),k(t,l)}}}function $t(o){let e=[],n=new Map,t,r,l=o[9].types;const s=a=>a[12];for(let a=0;a<l.length;a+=1){let f=Y(o,l,a),$=s(f);n.set($,e[a]=x($,f))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=C()},l(a){for(let f=0;f<e.length;f+=1)e[f].l(a);t=C()},m(a,f){for(let $=0;$<e.length;$+=1)e[$].m(a,f);p(a,t,f),r=!0},p(a,f){f&2&&(l=a[9].types,N(),e=oe(e,f,s,1,a,l,n,t.parentNode,ie,x,t,Y),E())},i(a){if(!r){for(let f=0;f<l.length;f+=1)c(e[f]);r=!0}},o(a){for(let f=0;f<e.length;f+=1)u(e[f]);r=!1},d(a){for(let f=0;f<e.length;f+=1)e[f].d(a);a&&m(t)}}}function ot(o){let e,n;return e=new W({props:{orientation:"horizontal",alignment_x:"right",spacing:"small",variation:"wrap",max_width:"prose",$$slots:{default:[$t]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&32770&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function it(o){let e,n,t,r,l,s,a;return e=new B({props:{$$slots:{default:[lt]},$$scope:{ctx:o}}}),t=new B({props:{class:"article",$$slots:{default:[ft]},$$scope:{ctx:o}}}),l=new B({props:{$$slots:{default:[ot]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),n=h(),g(t.$$.fragment),r=h(),g(l.$$.fragment),s=h()},l(f){d(e.$$.fragment,f),n=v(f),d(t.$$.fragment,f),r=v(f),d(l.$$.fragment,f),s=v(f)},m(f,$){b(e,f,$),p(f,n,$),b(t,f,$),p(f,r,$),b(l,f,$),p(f,s,$),a=!0},p(f,$){const i={};$&32770&&(i.$$scope={dirty:$,ctx:f}),e.$set(i);const _={};$&32770&&(_.$$scope={dirty:$,ctx:f}),t.$set(_);const w={};$&32770&&(w.$$scope={dirty:$,ctx:f}),l.$set(w)},i(f){a||(c(e.$$.fragment,f),c(t.$$.fragment,f),c(l.$$.fragment,f),a=!0)},o(f){u(e.$$.fragment,f),u(t.$$.fragment,f),u(l.$$.fragment,f),a=!1},d(f){k(e,f),f&&m(n),k(t,f),f&&m(r),k(l,f),f&&m(s)}}}function ee(o){let e,n;return e=new $e({props:{$$slots:{default:[it]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&32770&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ct(o){let e,n,t=o[6],r=[];for(let s=0;s<t.length;s+=1)r[s]=ee(X(o,t,s));const l=s=>u(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=C()},l(s){for(let a=0;a<r.length;a+=1)r[a].l(s);e=C()},m(s,a){for(let f=0;f<r.length;f+=1)r[f].m(s,a);p(s,e,a),n=!0},p(s,a){if(a&2){t=s[6];let f;for(f=0;f<t.length;f+=1){const $=X(s,t,f);r[f]?(r[f].p($,a),c(r[f],1)):(r[f]=ee($),r[f].c(),c(r[f],1),r[f].m(e.parentNode,e))}for(N(),f=t.length;f<r.length;f+=1)l(f);E()}},i(s){if(!n){for(let a=0;a<t.length;a+=1)c(r[a]);n=!0}},o(s){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)u(r[a]);n=!1},d(s){ae(r,s),s&&m(e)}}}function ut(o){let e,n,t,r;return e=new ve({props:{$$slots:{default:[nt]},$$scope:{ctx:o}}}),t=new Ce({props:{$$slots:{default:[ct]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),n=h(),g(t.$$.fragment)},l(l){d(e.$$.fragment,l),n=v(l),d(t.$$.fragment,l)},m(l,s){b(e,l,s),p(l,n,s),b(t,l,s),r=!0},p(l,s){const a={};s&32768&&(a.$$scope={dirty:s,ctx:l}),e.$set(a);const f={};s&32770&&(f.$$scope={dirty:s,ctx:l}),t.$set(f)},i(l){r||(c(e.$$.fragment,l),c(t.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),u(t.$$.fragment,l),r=!1},d(l){k(e,l),l&&m(n),k(t,l)}}}function _t(o){let e,n,t;return e=new he({props:{"min-width":["mobile:content-max","tablet:content-max"],$$slots:{default:[ut]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),n=h()},l(r){d(e.$$.fragment,r),n=v(r)},m(r,l){b(e,r,l),p(r,n,l),t=!0},p(r,l){const s={};l&32770&&(s.$$scope={dirty:l,ctx:r}),e.$set(s)},i(r){t||(c(e.$$.fragment,r),t=!0)},o(r){u(e.$$.fragment,r),t=!1},d(r){k(e,r),r&&m(n)}}}function te(o){let e,n,t,r;return e=new F({props:{is:"h3",id:"api-reference-"+o[0]+"-"+o[5].toLowerCase(),margin_y:"medium",$$slots:{default:[Ze]},$$scope:{ctx:o}}}),t=new we({props:{$$slots:{default:[_t]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),n=h(),g(t.$$.fragment)},l(l){d(e.$$.fragment,l),n=v(l),d(t.$$.fragment,l)},m(l,s){b(e,l,s),p(l,n,s),b(t,l,s),r=!0},p(l,s){const a={};s&3&&(a.id="api-reference-"+l[0]+"-"+l[5].toLowerCase()),s&32770&&(a.$$scope={dirty:s,ctx:l}),e.$set(a);const f={};s&32770&&(f.$$scope={dirty:s,ctx:l}),t.$set(f)},i(l){r||(c(e.$$.fragment,l),c(t.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),u(t.$$.fragment,l),r=!1},d(l){k(e,l),l&&m(n),k(t,l)}}}function mt(o){let e,n,t=o[1].length>0&&Z(o);return{c(){t&&t.c(),e=C()},l(r){t&&t.l(r),e=C()},m(r,l){t&&t.m(r,l),p(r,e,l),n=!0},p(r,[l]){r[1].length>0?t?(t.p(r,l),l&2&&c(t,1)):(t=Z(r),t.c(),c(t,1),t.m(e.parentNode,e)):t&&(N(),u(t,1,1,()=>{t=null}),E())},i(r){n||(c(t),n=!0)},o(r){u(t),n=!1},d(r){t&&t.d(r),r&&m(e)}}}function pt(o,e,n){let t,{id:r}=e,{filter:l=""}=e,{references:s}=e,a;return o.$$set=f=>{"id"in f&&n(0,r=f.id),"filter"in f&&n(2,l=f.filter),"references"in f&&n(3,s=f.references)},o.$$.update=()=>{o.$$.dirty&4&&n(4,t=l.toLowerCase()),o.$$.dirty&25&&n(1,a=Object.entries(s).map(([f,$])=>{var i;return r.toLowerCase().startsWith(t)||f.toLowerCase().startsWith(t)?[f,$!=null?$:[]]:[f,(i=$==null?void 0:$.filter(_=>_.name.toLowerCase().includes(t)||_.types.filter(w=>w.toLowerCase().includes(t)).length>0))!==null&&i!==void 0?i:[]]}).filter(([f,$])=>f.toLowerCase().startsWith(t)||$.length>0))},[r,a,l,s,t]}class U extends H{constructor(e){super();D(this,e,pt,mt,P,{id:0,filter:2,references:3})}}function gt(o){let e,n,t;return e=new L({props:{is:"strong",palette:"negative",$$slots:{default:[bt]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),n=T(": failed to load content api reference")},l(r){d(e.$$.fragment,r),n=A(r,": failed to load content api reference")},m(r,l){b(e,r,l),p(r,n,l),t=!0},p(r,l){const s={};l&8&&(s.$$scope={dirty:l,ctx:r}),e.$set(s)},i(r){t||(c(e.$$.fragment,r),t=!0)},o(r){u(e.$$.fragment,r),t=!1},d(r){k(e,r),r&&m(n)}}}function dt(o){let e,n,t,r,l,s,a,f=kt(o);return n=new U({props:{id:"Properties",references:o[1].stuff.content.references.properties,filter:o[0]}}),r=new U({props:{id:"Events",references:o[1].stuff.content.references.events,filter:o[0]}}),s=new U({props:{id:"Slots",references:o[1].stuff.content.references.slots,filter:o[0]}}),{c(){f&&f.c(),e=h(),g(n.$$.fragment),t=h(),g(r.$$.fragment),l=h(),g(s.$$.fragment)},l($){f&&f.l($),e=v($),d(n.$$.fragment,$),t=v($),d(r.$$.fragment,$),l=v($),d(s.$$.fragment,$)},m($,i){f&&f.m($,i),p($,e,i),b(n,$,i),p($,t,i),b(r,$,i),p($,l,i),b(s,$,i),a=!0},p($,i){f.p($,i);const _={};i&2&&(_.references=$[1].stuff.content.references.properties),i&1&&(_.filter=$[0]),n.$set(_);const w={};i&2&&(w.references=$[1].stuff.content.references.events),i&1&&(w.filter=$[0]),r.$set(w);const S={};i&2&&(S.references=$[1].stuff.content.references.slots),i&1&&(S.filter=$[0]),s.$set(S)},i($){a||(c(f),c(n.$$.fragment,$),c(r.$$.fragment,$),c(s.$$.fragment,$),a=!0)},o($){u(f),u(n.$$.fragment,$),u(r.$$.fragment,$),u(s.$$.fragment,$),a=!1},d($){f&&f.d($),$&&m(e),k(n,$),$&&m(t),k(r,$),$&&m(l),k(s,$)}}}function bt(o){let e;return{c(){e=T("Error")},l(n){e=A(n,"Error")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function kt(o){let e,n,t;function r(s){o[2](s)}let l={placeholder:"Filter API..."};return o[0]!==void 0&&(l.value=o[0]),e=new Ae({props:l}),Ne.push(()=>Ee(e,"value",r)),{c(){g(e.$$.fragment)},l(s){d(e.$$.fragment,s)},m(s,a){b(e,s,a),t=!0},p(s,a){const f={};!n&&a&1&&(n=!0,f.value=s[0],Te(()=>n=!1)),e.$set(f)},i(s){t||(c(e.$$.fragment,s),t=!0)},o(s){u(e.$$.fragment,s),t=!1},d(s){k(e,s)}}}function wt(o){let e,n,t,r;const l=[dt,gt],s=[];function a(f,$){return f[1].stuff.content?0:1}return e=a(o),n=s[e]=l[e](o),{c(){n.c(),t=C()},l(f){n.l(f),t=C()},m(f,$){s[e].m(f,$),p(f,t,$),r=!0},p(f,[$]){let i=e;e=a(f),e===i?s[e].p(f,$):(N(),u(s[i],1,1,()=>{s[i]=null}),E(),n=s[e],n?n.p(f,$):(n=s[e]=l[e](f),n.c()),c(n,1),n.m(t.parentNode,t))},i(f){r||(c(n),r=!0)},o(f){u(n),r=!1},d(f){s[e].d(f),f&&m(t)}}}function ht(o,e,n){let t;M(o,O,s=>n(1,t=s));let r="";pe(()=>{n(0,r="")});function l(s){r=s,n(0,r)}return[r,t,l]}class vt extends H{constructor(e){super();D(this,e,ht,wt,P,{})}}function Ct(o){let e;const n=o[0].default,t=Se(n,o,o[1],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,l){t&&t.m(r,l),e=!0},p(r,l){t&&t.p&&(!e||l&2)&&Ie(t,n,r,r[1],e?He(n,r[1],l,null):je(r[1]),null)},i(r){e||(c(t,r),e=!0)},o(r){u(t,r),e=!1},d(r){t&&t.d(r)}}}function Tt(o){let e,n;return e=new Le({props:{is:"main",class:"content-container",width:"100",padding_y:"large",$$slots:{default:[Ct]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,[r]){const l={};r&2&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function At(o,e,n){let{$$slots:t={},$$scope:r}=e;return o.$$set=l=>{"$$scope"in l&&n(1,r=l.$$scope)},[t,r]}class Nt extends H{constructor(e){super();D(this,e,At,Tt,P,{})}}function ne(o,e,n){const t=o.slice();return t[2]=e[n][0],t[3]=e[n][1],t[5]=n,t}function Et(o){let e,n,t;return e=new L({props:{is:"strong",palette:"negative",$$slots:{default:[St]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),n=T(": failed to load content metadata")},l(r){d(e.$$.fragment,r),n=A(r,": failed to load content metadata")},m(r,l){b(e,r,l),p(r,n,l),t=!0},p(r,l){const s={};l&64&&(s.$$scope={dirty:l,ctx:r}),e.$set(s)},i(r){t||(c(e.$$.fragment,r),t=!0)},o(r){u(e.$$.fragment,r),t=!1},d(r){k(e,r),r&&m(n)}}}function Lt(o){let e,n,t,r;return e=new F({props:{margin_bottom:"small",$$slots:{default:[It]},$$scope:{ctx:o}}}),t=new W({props:{orientation:"horizontal",alignment_y:"center",spacing:"small",margin_bottom:"medium",$$slots:{default:[Vt]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),n=h(),g(t.$$.fragment)},l(l){d(e.$$.fragment,l),n=v(l),d(t.$$.fragment,l)},m(l,s){b(e,l,s),p(l,n,s),b(t,l,s),r=!0},p(l,s){const a={};s&65&&(a.$$scope={dirty:s,ctx:l}),e.$set(a);const f={};s&67&&(f.$$scope={dirty:s,ctx:l}),t.$set(f)},i(l){r||(c(e.$$.fragment,l),c(t.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),u(t.$$.fragment,l),r=!1},d(l){k(e,l),l&&m(n),k(t,l)}}}function St(o){let e;return{c(){e=T("Error")},l(n){e=A(n,"Error")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function It(o){let e=o[0].stuff.content.metadata.title+"",n;return{c(){n=T(e)},l(t){n=A(t,e)},m(t,r){p(t,n,r)},p(t,r){r&1&&e!==(e=t[0].stuff.content.metadata.title+"")&&j(n,e)},d(t){t&&m(n)}}}function jt(o){let e,n;return e=new L({props:{class:"content-metadata--timestamps",is:"small",$$slots:{default:[Dt]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&65&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Ht(o){let e,n,t,r,l;return n=new W({props:{orientation:"horizontal",alignment_y:"center",spacing:"small",$$slots:{default:[Ot]},$$scope:{ctx:o}}}),r=new L({props:{class:"content-metadata--timestamps",is:"small",$$slots:{default:[qt]},$$scope:{ctx:o}}}),{c(){e=Pe("div"),g(n.$$.fragment),t=h(),g(r.$$.fragment)},l(s){e=ze(s,"DIV",{});var a=Re(e);d(n.$$.fragment,a),t=v(a),d(r.$$.fragment,a),a.forEach(m)},m(s,a){p(s,e,a),b(n,e,null),Me(e,t),b(r,e,null),l=!0},p(s,a){const f={};a&65&&(f.$$scope={dirty:a,ctx:s}),n.$set(f);const $={};a&65&&($.$$scope={dirty:a,ctx:s}),r.$set($)},i(s){l||(c(n.$$.fragment,s),c(r.$$.fragment,s),l=!0)},o(s){u(n.$$.fragment,s),u(r.$$.fragment,s),l=!1},d(s){s&&m(e),k(n),k(r)}}}function Dt(o){let e,n,t,r,l,s,a,f;return e=new ce({props:{size:"1em"}}),t=new R({props:{timestamp:o[0].stuff.content.metadata.created_at,day:"2-digit",month:"2-digit",year:"2-digit",margin_left:"tiny",margin_right:"small"}}),l=new ue({props:{size:"1em"}}),a=new R({props:{timestamp:o[0].stuff.content.metadata.modified_at,day:"2-digit",month:"2-digit",year:"2-digit",margin_left:"tiny"}}),{c(){g(e.$$.fragment),n=h(),g(t.$$.fragment),r=h(),g(l.$$.fragment),s=h(),g(a.$$.fragment)},l($){d(e.$$.fragment,$),n=v($),d(t.$$.fragment,$),r=v($),d(l.$$.fragment,$),s=v($),d(a.$$.fragment,$)},m($,i){b(e,$,i),p($,n,i),b(t,$,i),p($,r,i),b(l,$,i),p($,s,i),b(a,$,i),f=!0},p($,i){const _={};i&1&&(_.timestamp=$[0].stuff.content.metadata.created_at),t.$set(_);const w={};i&1&&(w.timestamp=$[0].stuff.content.metadata.modified_at),a.$set(w)},i($){f||(c(e.$$.fragment,$),c(t.$$.fragment,$),c(l.$$.fragment,$),c(a.$$.fragment,$),f=!0)},o($){u(e.$$.fragment,$),u(t.$$.fragment,$),u(l.$$.fragment,$),u(a.$$.fragment,$),f=!1},d($){k(e,$),$&&m(n),k(t,$),$&&m(r),k(l,$),$&&m(s),k(a,$)}}}function re(o){let e;return{c(){e=T("\u2022")},l(n){e=A(n,"\u2022")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function Pt(o){let e=o[2]+"",n;return{c(){n=T(e)},l(t){n=A(t,e)},m(t,r){p(t,n,r)},p(t,r){r&1&&e!==(e=t[2]+"")&&j(n,e)},i:z,o:z,d(t){t&&m(n)}}}function zt(o){let e,n;return e=new ge({props:{class:"anchor",href:o[3].href,palette:"informative",$$slots:{default:[Rt]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&1&&(l.href=t[3].href),r&65&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Rt(o){let e=o[2]+"",n;return{c(){n=T(e)},l(t){n=A(t,e)},m(t,r){p(t,n,r)},p(t,r){r&1&&e!==(e=t[2]+"")&&j(n,e)},d(t){t&&m(n)}}}function Mt(o){let e,n,t,r;const l=[zt,Pt],s=[];function a(f,$){var i;return((i=f[3])==null?void 0:i.href)?0:1}return e=a(o),n=s[e]=l[e](o),{c(){n.c(),t=h()},l(f){n.l(f),t=v(f)},m(f,$){s[e].m(f,$),p(f,t,$),r=!0},p(f,$){let i=e;e=a(f),e===i?s[e].p(f,$):(N(),u(s[i],1,1,()=>{s[i]=null}),E(),n=s[e],n?n.p(f,$):(n=s[e]=l[e](f),n.c()),c(n,1),n.m(t.parentNode,t))},i(f){r||(c(n),r=!0)},o(f){u(n),r=!1},d(f){s[e].d(f),f&&m(t)}}}function le(o,e){let n,t,r,l,s=e[5]>0&&re();return r=new L({props:{is:"small",$$slots:{default:[Mt]},$$scope:{ctx:e}}}),{key:o,first:null,c(){n=C(),s&&s.c(),t=h(),g(r.$$.fragment),this.h()},l(a){n=C(),s&&s.l(a),t=v(a),d(r.$$.fragment,a),this.h()},h(){this.first=n},m(a,f){p(a,n,f),s&&s.m(a,f),p(a,t,f),b(r,a,f),l=!0},p(a,f){e=a,e[5]>0?s||(s=re(),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null);const $={};f&65&&($.$$scope={dirty:f,ctx:e}),r.$set($)},i(a){l||(c(r.$$.fragment,a),l=!0)},o(a){u(r.$$.fragment,a),l=!1},d(a){a&&m(n),s&&s.d(a),a&&m(t),k(r,a)}}}function Ot(o){let e=[],n=new Map,t,r,l=Object.entries(o[0].stuff.content.metadata.authors);const s=a=>a[2];for(let a=0;a<l.length;a+=1){let f=ne(o,l,a),$=s(f);n.set($,e[a]=le($,f))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=C()},l(a){for(let f=0;f<e.length;f+=1)e[f].l(a);t=C()},m(a,f){for(let $=0;$<e.length;$+=1)e[$].m(a,f);p(a,t,f),r=!0},p(a,f){f&1&&(l=Object.entries(a[0].stuff.content.metadata.authors),N(),e=oe(e,f,s,1,a,l,n,t.parentNode,ie,le,t,ne),E())},i(a){if(!r){for(let f=0;f<l.length;f+=1)c(e[f]);r=!0}},o(a){for(let f=0;f<e.length;f+=1)u(e[f]);r=!1},d(a){for(let f=0;f<e.length;f+=1)e[f].d(a);a&&m(t)}}}function qt(o){let e,n,t,r,l,s,a,f;return e=new ce({props:{size:"1em"}}),t=new R({props:{timestamp:o[0].stuff.content.metadata.created_at,day:"2-digit",month:"2-digit",year:"2-digit",margin_left:"tiny",margin_right:"small"}}),l=new ue({props:{size:"1em"}}),a=new R({props:{timestamp:o[0].stuff.content.metadata.modified_at,day:"2-digit",month:"2-digit",year:"2-digit",margin_left:"tiny"}}),{c(){g(e.$$.fragment),n=h(),g(t.$$.fragment),r=h(),g(l.$$.fragment),s=h(),g(a.$$.fragment)},l($){d(e.$$.fragment,$),n=v($),d(t.$$.fragment,$),r=v($),d(l.$$.fragment,$),s=v($),d(a.$$.fragment,$)},m($,i){b(e,$,i),p($,n,i),b(t,$,i),p($,r,i),b(l,$,i),p($,s,i),b(a,$,i),f=!0},p($,i){const _={};i&1&&(_.timestamp=$[0].stuff.content.metadata.created_at),t.$set(_);const w={};i&1&&(w.timestamp=$[0].stuff.content.metadata.modified_at),a.$set(w)},i($){f||(c(e.$$.fragment,$),c(t.$$.fragment,$),c(l.$$.fragment,$),c(a.$$.fragment,$),f=!0)},o($){u(e.$$.fragment,$),u(t.$$.fragment,$),u(l.$$.fragment,$),u(a.$$.fragment,$),f=!1},d($){k(e,$),$&&m(n),k(t,$),$&&m(r),k(l,$),$&&m(s),k(a,$)}}}function Bt(o){let e;return{c(){e=T("View Source")},l(n){e=A(n,"View Source")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function Ut(o){let e,n;return e=new ge({props:{class:"anchor",href:o[1],palette:"informative",$$slots:{default:[Bt]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&2&&(l.href=t[1]),r&64&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Vt(o){let e,n,t,r,l,s,a;const f=[Ht,jt],$=[];function i(_,w){return _[0].stuff.content.metadata.authors?0:1}return e=i(o),n=$[e]=f[e](o),r=new De({}),s=new L({props:{is:"small",$$slots:{default:[Ut]},$$scope:{ctx:o}}}),{c(){n.c(),t=h(),g(r.$$.fragment),l=h(),g(s.$$.fragment)},l(_){n.l(_),t=v(_),d(r.$$.fragment,_),l=v(_),d(s.$$.fragment,_)},m(_,w){$[e].m(_,w),p(_,t,w),b(r,_,w),p(_,l,w),b(s,_,w),a=!0},p(_,w){let S=e;e=i(_),e===S?$[e].p(_,w):(N(),u($[S],1,1,()=>{$[S]=null}),E(),n=$[e],n?n.p(_,w):(n=$[e]=f[e](_),n.c()),c(n,1),n.m(t.parentNode,t));const I={};w&66&&(I.$$scope={dirty:w,ctx:_}),s.$set(I)},i(_){a||(c(n),c(r.$$.fragment,_),c(s.$$.fragment,_),a=!0)},o(_){u(n),u(r.$$.fragment,_),u(s.$$.fragment,_),a=!1},d(_){$[e].d(_),_&&m(t),k(r,_),_&&m(l),k(s,_)}}}function Ft(o){let e,n,t,r;const l=[Lt,Et],s=[];function a(f,$){return f[0].stuff.content?0:1}return e=a(o),n=s[e]=l[e](o),{c(){n.c(),t=C()},l(f){n.l(f),t=C()},m(f,$){s[e].m(f,$),p(f,t,$),r=!0},p(f,[$]){let i=e;e=a(f),e===i?s[e].p(f,$):(N(),u(s[i],1,1,()=>{s[i]=null}),E(),n=s[e],n?n.p(f,$):(n=s[e]=l[e](f),n.c()),c(n,1),n.m(t.parentNode,t))},i(f){r||(c(n),r=!0)},o(f){u(n),r=!1},d(f){s[e].d(f),f&&m(t)}}}const Gt=({identifier:o})=>`https://github.com/kahi-framework/kahi-ui.nbn.dev/tree/main/content${o}.md`;function Wt(o,e,n){let t,r;return M(o,O,l=>n(0,r=l)),o.$$.update=()=>{o.$$.dirty&1&&n(1,t=r.stuff.content?Gt({identifier:r.stuff.content.metadata.identifier}):"")},[r,t]}class Jt extends H{constructor(e){super();D(this,e,Wt,Ft,P,{})}}function Kt(o){let e,n;return e=new Oe({props:{palette:"negative",$$slots:{default:[xt]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&64&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Qt(o){let e,n;return e=new Nt({props:{$$slots:{default:[on]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&70&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Xt(o){let e;return{c(){e=T("404")},l(n){e=A(n,"404")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function Yt(o){let e;return{c(){e=T("page")},l(n){e=A(n,"page")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function Zt(o){let e;return{c(){e=T("was not")},l(n){e=A(n,"was not")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function yt(o){let e,n,t,r,l,s;return n=new L({props:{is:"strong",$$slots:{default:[Yt]},$$scope:{ctx:o}}}),r=new L({props:{is:"strong",$$slots:{default:[Zt]},$$scope:{ctx:o}}}),{c(){e=T("The "),g(n.$$.fragment),t=T(" you were looking for "),g(r.$$.fragment),l=T(" found.")},l(a){e=A(a,"The "),d(n.$$.fragment,a),t=A(a," you were looking for "),d(r.$$.fragment,a),l=A(a," found.")},m(a,f){p(a,e,f),b(n,a,f),p(a,t,f),b(r,a,f),p(a,l,f),s=!0},p(a,f){const $={};f&64&&($.$$scope={dirty:f,ctx:a}),n.$set($);const i={};f&64&&(i.$$scope={dirty:f,ctx:a}),r.$set(i)},i(a){s||(c(n.$$.fragment,a),c(r.$$.fragment,a),s=!0)},o(a){u(n.$$.fragment,a),u(r.$$.fragment,a),s=!1},d(a){a&&m(e),k(n,a),a&&m(t),k(r,a),a&&m(l)}}}function xt(o){let e,n,t,r;return e=new qe({props:{$$slots:{default:[Xt]},$$scope:{ctx:o}}}),t=new Be({props:{$$slots:{default:[yt]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),n=h(),g(t.$$.fragment)},l(l){d(e.$$.fragment,l),n=v(l),d(t.$$.fragment,l)},m(l,s){b(e,l,s),p(l,n,s),b(t,l,s),r=!0},p(l,s){const a={};s&64&&(a.$$scope={dirty:s,ctx:l}),e.$set(a);const f={};s&64&&(f.$$scope={dirty:s,ctx:l}),t.$set(f)},i(l){r||(c(e.$$.fragment,l),c(t.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),u(t.$$.fragment,l),r=!1},d(l){k(e,l),l&&m(n),k(t,l)}}}function en(o){let e,n;return e=new de({}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p:z,i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function tn(o){let e,n;return e=new Ue({props:{logic_name:"content-switcher",alignment_x:"stretch",logic_state:o[1],$$slots:{default:[$n]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},p(t,r){const l={};r&2&&(l.logic_state=t[1]),r&64&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function nn(o){let e;return{c(){e=T("Guide")},l(n){e=A(n,"Guide")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function rn(o){let e,n;return e=new de({}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ln(o){let e,n,t,r;return e=new _e({props:{palette:"accent",$$slots:{default:[nn]},$$scope:{ctx:o}}}),t=new me({props:{padding_top:"medium",$$slots:{default:[rn]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),n=h(),g(t.$$.fragment)},l(l){d(e.$$.fragment,l),n=v(l),d(t.$$.fragment,l)},m(l,s){b(e,l,s),p(l,n,s),b(t,l,s),r=!0},p(l,s){const a={};s&64&&(a.$$scope={dirty:s,ctx:l}),e.$set(a);const f={};s&64&&(f.$$scope={dirty:s,ctx:l}),t.$set(f)},i(l){r||(c(e.$$.fragment,l),c(t.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),u(t.$$.fragment,l),r=!1},d(l){k(e,l),l&&m(n),k(t,l)}}}function fn(o){let e;return{c(){e=T("API Reference")},l(n){e=A(n,"API Reference")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function sn(o){let e,n;return e=new vt({}),{c(){g(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,r){b(e,t,r),n=!0},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function an(o){let e,n,t,r;return e=new _e({props:{palette:"accent",$$slots:{default:[fn]},$$scope:{ctx:o}}}),t=new me({props:{padding_top:"medium",$$slots:{default:[sn]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),n=h(),g(t.$$.fragment)},l(l){d(e.$$.fragment,l),n=v(l),d(t.$$.fragment,l)},m(l,s){b(e,l,s),p(l,n,s),b(t,l,s),r=!0},p(l,s){const a={};s&64&&(a.$$scope={dirty:s,ctx:l}),e.$set(a);const f={};s&64&&(f.$$scope={dirty:s,ctx:l}),t.$set(f)},i(l){r||(c(e.$$.fragment,l),c(t.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),u(t.$$.fragment,l),r=!1},d(l){k(e,l),l&&m(n),k(t,l)}}}function $n(o){let e,n,t,r;return e=new J({props:{logic_id:"content-switcher-guide",$$slots:{default:[ln]},$$scope:{ctx:o}}}),t=new J({props:{logic_id:"content-switcher-api-reference",$$slots:{default:[an]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),n=h(),g(t.$$.fragment)},l(l){d(e.$$.fragment,l),n=v(l),d(t.$$.fragment,l)},m(l,s){b(e,l,s),p(l,n,s),b(t,l,s),r=!0},p(l,s){const a={};s&64&&(a.$$scope={dirty:s,ctx:l}),e.$set(a);const f={};s&64&&(f.$$scope={dirty:s,ctx:l}),t.$set(f)},i(l){r||(c(e.$$.fragment,l),c(t.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),u(t.$$.fragment,l),r=!1},d(l){k(e,l),l&&m(n),k(t,l)}}}function on(o){let e,n,t,r,l,s;e=new Jt({});const a=[tn,en],f=[];function $(i,_){return i[2]?0:1}return t=$(o),r=f[t]=a[t](o),{c(){g(e.$$.fragment),n=h(),r.c(),l=C()},l(i){d(e.$$.fragment,i),n=v(i),r.l(i),l=C()},m(i,_){b(e,i,_),p(i,n,_),f[t].m(i,_),p(i,l,_),s=!0},p(i,_){let w=t;t=$(i),t===w?f[t].p(i,_):(N(),u(f[w],1,1,()=>{f[w]=null}),E(),r=f[t],r?r.p(i,_):(r=f[t]=a[t](i),r.c()),c(r,1),r.m(l.parentNode,l))},i(i){s||(c(e.$$.fragment,i),c(r),s=!0)},o(i){u(e.$$.fragment,i),u(r),s=!1},d(i){k(e,i),i&&m(n),f[t].d(i),i&&m(l)}}}function cn(o){let e,n,t,r;const l=[Qt,Kt],s=[];function a(f,$){return f[0].stuff.content?0:1}return e=a(o),n=s[e]=l[e](o),{c(){n.c(),t=C()},l(f){n.l(f),t=C()},m(f,$){s[e].m(f,$),p(f,t,$),r=!0},p(f,[$]){let i=e;e=a(f),e===i?s[e].p(f,$):(N(),u(s[i],1,1,()=>{s[i]=null}),E(),n=s[e],n?n.p(f,$):(n=s[e]=l[e](f),n.c()),c(n,1),n.m(t.parentNode,t))},i(f){r||(c(n),r=!0)},o(f){u(n),r=!1},d(f){s[e].d(f),f&&m(t)}}}const vn=async({fetch:o,params:e})=>{const{identifier:n=""}=e,t=await o(`/api/v4/content/${n}.json`);if(!t.ok){const a=await t.json();return{status:t.status,error:a.code}}const l=(await t.json()).data,s=l.metadata.snippets.map(a=>`/api/v4/snippets/${a.identifier}.json`);return{stuff:{content:l,prerender:s}}};function V(o){return o?Object.keys(o).length>0:!1}function un(o,e,n){let t,r;M(o,O,$=>n(0,r=$));var l,s,a;let f="content-switcher-guide";return pe(()=>{n(1,f="content-switcher-guide")}),o.$$.update=()=>{o.$$.dirty&57&&n(2,t=V(n(3,l=r.stuff.content)===null||l===void 0?void 0:l.references.events)||V(n(4,s=r.stuff.content)===null||s===void 0?void 0:s.references.properties)||V(n(5,a=r.stuff.content)===null||a===void 0?void 0:a.references.slots))},[r,f,t,l,s,a]}class Cn extends H{constructor(e){super();D(this,e,un,cn,P,{})}}export{Cn as default,vn as load};
