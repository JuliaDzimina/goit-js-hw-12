import{a as d,i as c,S as u}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function p({webformatURL:t,largeImageURL:o,tags:s,likes:a,views:e,comments:r,downloads:n}){return`<li class="gallery-list">
    <a class="gallery-link" href="${o}"><img class="img-gallery" src="${t}" alt="${s}"></a>
    <div class="info-img">
      
      <div>
        <h3>Likes</h3>
        <p>${a}</p>
      </div>

      <div>
        <h3>Views</h3>
        <p>${e}</p>
      </div>

      <div>
        <h3>Comments</h3>
        <p>${r}</p>
      </div>

      <div>
        <h3>Downloads</h3>
        <p>${n}</p>
      </div>

    </div>
  </li>`}async function f(t){return(await d("https://pixabay.com/api/",{params:{key:"42192199-b3b6ebcf3d1600f471f1bd878",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1}})).data}const i={searchForm:document.querySelector(".search-form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let l;i.loader.style.display="none";i.searchForm.addEventListener("submit",m);async function m(t){t.preventDefault(),i.loader.style.display="block",i.galleryList.innerHTML="";const o=t.target.elements.query.value;try{const s=await f(o);y(s.hits)}catch(s){c.error({message:`Error fetching images: ${s}`,position:"topRight",backgroundColor:"red",messageColor:"white"})}finally{i.searchForm.reset(),i.loader.style.display="none"}}function y(t){t.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"});const o=t.map(p).join("");i.galleryList.insertAdjacentHTML("beforeend",o),l=new u(".gallery a",{captionDelay:250,captionsData:"alt"}),l.refresh()}
//# sourceMappingURL=commonHelpers.js.map
