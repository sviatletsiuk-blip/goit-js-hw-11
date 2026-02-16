/* empty css                      */import{a as p,S as m,i as c}from"./assets/vendor-CC7y-xQd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="54668124-f075674b72691b434b6dd74f8",h="https://pixabay.com/api/";function g(o){return p.get(h,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:d,downloads:f})=>`
<li class="gallery-item">
  <a href="${s}">
    <img src="${i}" alt="${e}" loading="lazy" />
  </a>
  <div class="info">
    <p><b>Likes</b> ${t}</p>
    <p><b>Views</b> ${n}</p>
    <p><b>Comments</b> ${d}</p>
    <p><b>Downloads</b> ${f}</p>
  </div>
</li>`).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function q(){l.innerHTML=""}function w(){u.classList.remove("is-hidden")}function S(){u.classList.add("is-hidden")}function a(){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function P(){c.warning({message:"Please enter a search query!",position:"topRight"})}const $=document.querySelector(".form");$.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){P();return}q(),w(),g(r).then(i=>{if(i.length===0){a();return}L(i)}).catch(()=>{a()}).finally(()=>{S()}),o.currentTarget.reset()});
//# sourceMappingURL=index.js.map
