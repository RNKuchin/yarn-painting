function l(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const r=document.querySelector(".burger"),o=document.querySelector("#header-menu");r.addEventListener("click",()=>{r.classList.toggle("active"),r.name==="menu"?(r.name="close",o.classList.add("top-[80px]"),o.classList.add("opacity-100")):(r.name="menu",o.classList.remove("top-[80px]"),o.classList.remove("opacity-100"))});export{l as __vite_legacy_guard};
