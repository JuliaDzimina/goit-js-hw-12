import axios from 'axios';


export async function fetchImages(query){
    const API_KEY = '42192199-b3b6ebcf3d1600f471f1bd878';
    const BASE_URL = 'https://pixabay.com/api/';
  
    const responce = await axios(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 15,
            page: 1,
        }
    });
  
  return responce.data;
  
  };