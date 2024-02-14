import{i as u,S as g,a as b}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function c(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=c(r);fetch(r.href,t)}})();function L({webformatURL:e,largeImageURL:s,tags:c,likes:n,views:r,comments:t,downloads:i}){return`<li class="gallery-list">
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
        <p>${t}</p>
      </div>

      <div>
        <h3>Downloads</h3>
        <p>${i}</p>
      </div>

    </div>
  </li>`}const v="42192199-b3b6ebcf3d1600f471f1bd878",w="https://pixabay.com/api/";function h(e){e.classList.remove("hidden")}function a(e){e.classList.add("hidden")}const o={searchForm:document.querySelector(".search-form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLodeMore:document.querySelector(".load-btn")};let f,l=1,m=15,d="";o.searchForm.addEventListener("submit",M);async function M(e){e.preventDefault(),h(o.loader),o.galleryList.innerHTML="",l=1,d=e.target.elements.query.value;try{const s=await y(d);p(s.hits)}catch(s){a(o.btnLodeMore),u.error({message:`${s}`,position:"topRight",backgroundColor:"red",messageColor:"white"})}finally{o.searchForm.reset(),a(o.loader)}}o.btnLodeMore.addEventListener("click",S);async function S(){l+=1,h(o.loader);try{const e=await y(d);if(p(e.hits),window.scrollBy({top:400,behavior:"smooth"}),l*m>e.totalHits)throw a(o.btnLodeMore),new Error("We're sorry, but you've reached the end of search results.")}catch(e){u.error({message:` ${e}`,position:"topRight",backgroundColor:"red",messageColor:"white"}),a(o.btnLodeMore)}finally{a(o.loader)}}function p(e){if(e.length===0)u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"});else{const s=e.map(L).join("");o.galleryList.insertAdjacentHTML("beforeend",s),f=new g(".gallery a",{captionDelay:250,captionsData:"alt"}),f.refresh(),h(o.btnLodeMore)}}async function y(e){return(await b(w,{params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:l}})).data}
//# sourceMappingURL=commonHelpers.js.map
