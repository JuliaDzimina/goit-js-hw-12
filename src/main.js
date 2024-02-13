import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import {galleryTemplate} from "./js/render-functions";
import { fetchImages } from "./js/pixabay-api";

const refs = {
   searchForm: document.querySelector('.search-form'),
   galleryList: document.querySelector('.gallery'),
   loader: document.querySelector('.loader'),
}

let lightbox;
refs.loader.style.display = 'none';





// async function fetchImages(query){
//   const API_KEY = '42192199-b3b6ebcf3d1600f471f1bd878';
//   const BASE_URL = 'https://pixabay.com/api/';

//   const responce = await axios(BASE_URL, {
//       params: {
//           key: API_KEY,
//           q: query,
//           image_type: 'photo',
//           orientation: 'horizontal',
//           safesearch: true,
//           per_page,
//           page,
//       }
//   });

// return responce.data;

// };

refs.searchForm.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
    e.preventDefault();
    refs.loader.style.display = 'block';
    refs.galleryList.innerHTML = '';

    const query = e.target.elements.query.value;
    try{
      const data = await fetchImages(query);
    createMarkup(data.hits);
    } catch (error){
        iziToast.error({
              message: `Error fetching images: ${error}`,
              position: 'topRight',
              backgroundColor: 'red',
              messageColor: 'white',})
    } finally{
      refs.searchForm.reset();
    refs.loader.style.display = 'none';
    };
  };


  function createMarkup(arr){
      if (arr.length === 0){
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: 'red',
          messageColor: 'white',});
      }
      
    const markup =arr.map(galleryTemplate).join('');
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
    lightbox = new SimpleLightbox('.gallery a', {
      captionDelay: 250,
      captionsData: 'alt',
    });
    lightbox.refresh();
  }
