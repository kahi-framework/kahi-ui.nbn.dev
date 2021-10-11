import{ac as t,ag as e,C as n}from"./vendor-7997a176.js";function r(t,e=0){let n;return(...r)=>{n&&(n(),n=null),n=function(t,e=0){const n=setTimeout((()=>t()),e);return()=>clearTimeout(n)}((()=>t(...r)),e)}}function i(i){if("undefined"==typeof window)return t(null);const{debounce:o=250,index_name:a,minimum_length:s=3}=i,d=window.stork;if(!d)throw new ReferenceError("bad dispatch to 'search' (Stork namespace not found)");const c=n(null),{set:l,subscribe:u}=c,w=r((t=>{if(t&&t.length>=s){const e=d.search(a,t);l(e)}else l(null)}),o);return{set:w,subscribe:u,update(t){const n=t(e(c));w(n)}}}const o=new Map;async function a(t){const{script_url:e,wasm_url:n}=t;let r=window.stork;if(e)if(r)console.warn("[svelte-stork] Stork Search library was previously mounted and initialized, skipping...");else try{await function(t,e){if(o.has(t))return o.get("id");const{head:n}=document,r=new Promise(((r,i)=>{const o=document.createElement("script"),a=(({id:t})=>`svst-${t}`)({id:t});o.setAttribute("async","true"),o.setAttribute("id",a),o.setAttribute("src",e),o.setAttribute("type","application/javascript"),o.addEventListener("error",(()=>i())),o.addEventListener("load",(()=>r())),n.appendChild(o)}));return o.set(t,r),r}("stork-search",e),r=window.stork}catch(i){throw new ReferenceError("bad dispatch to 'initialize' (failed to mount and initialize Stork Search library)")}if(!r)throw new ReferenceError("bad dispatch to 'initialize' (Stork namespace not found)");try{await r.initialize(n)}catch(i){throw new Error("bad option 'IInitializeOptions.wasm_url' to 'initialize' (failed to download and initialize Stork WASM blob)")}}async function s(t){const{index_name:e,index_url:n,overwrite:r=!1}=t,i=window.stork;if(!i)throw new ReferenceError("bad dispatch to 'register' (Stork namespace not found)");try{await i.downloadIndex(e,n,{forceOverwrite:r})}catch(o){throw new Error("bad option 'IRegisterOptions.index_url' to 'register' (failed to download and register search index)")}}export{a as initialize,s as register,i as search};
