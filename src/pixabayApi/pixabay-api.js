import axios from 'axios';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '37015191-a044c7542fd02fb82cb266545';

  //page = 1;
  per_page = 12;
  //q = null;

  async fetchPhotos(page, searchQuery) {
    try {
      return await axios.get(`${this.#BASE_URL}`, {
        params: {
          key: this.#API_KEY,
          q: searchQuery,
          orientation: 'horizontal',
          image_type: 'photo',
          safesearch: true,
          page: page,
          per_page: this.per_page,
        },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
