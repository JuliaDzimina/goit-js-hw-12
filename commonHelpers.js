import{i as u,S as g,a as b}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=c(r);fetch(r.href,o)}})();function L({webformatURL:e,largeImageURL:s,tags:c,likes:n,views:r,comments:o,downloads:a}){return`<li class="gallery-list">
    <a class="gallery-link" href="${s}"><img class="img-gallery" src="${e}" alt="${c}"></a>
    <div class="info-img">
      
      <div>
        <h3>Likes</h3>
        <p>${n}</p>
      </div>

      <div>
        <h3>Views</h3>
        <p>${r}</p>
      </div>

      <div>
        <h3>Comments</h3>
        <p>${o}</p>
      </div>

      <div>
        <h3>Downloads</h3>
        <p>${a}</p>
      </div>

    </div>
  </li>`}const v="42192199-b3b6ebcf3d1600f471f1bd878",w="https://pixabay.com/api/";function h(e){e.classList.remove("hidden")}function i(e){e.classList.add("hidden")}const t={searchForm:document.querySelector(".search-form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLodeMore:document.querySelector(".load-btn")};let f,l=1,m=15,d="";t.searchForm.addEventListener("submit",M);async function M(e){e.preventDefault(),h(t.loader),i(t.btnLodeMore),t.galleryList.innerHTML="",l=1,d=e.target.elements.query.value;try{const s=await y(d);p(s.hits)}catch(s){i(t.btnLodeMore),u.error({message:`${s}`,position:"topRight",backgroundColor:"red",messageColor:"white"})}finally{t.searchForm.reset(),i(t.loader)}}t.btnLodeMore.addEventListener("click",S);async function S(){l+=1,h(t.loader);try{const e=await y(d);if(p(e.hits),window.scrollBy({top:400,behavior:"smooth"}),l*m>e.totalHits)throw i(t.btnLodeMore),new Error("We're sorry, but you've reached the end of search results.")}catch(e){u.error({message:` ${e}`,position:"topRight",backgroundColor:"red",messageColor:"white"}),i(t.btnLodeMore)}finally{i(t.loader)}}function p(e){if(e.length===0)u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"});else{const s=e.map(L).join("");t.galleryList.insertAdjacentHTML("beforeend",s),f=new g(".gallery a",{captionDelay:250,captionsData:"alt"}),f.refresh(),h(t.btnLodeMore)}}async function y(e){return(await b(w,{params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:l}})).data}
//# sourceMappingURL=commonHelpers.js.map
