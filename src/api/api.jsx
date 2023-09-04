import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?q=cat&page=1&key=39126113-5c3d0c6387b252f4ea2e516d7&image_type=photo&orientation=horizontal&per_page=12';

const api = axios.create({
  baseURL: BASE_URL,
});

const getApi = {
  search: (query, page = 1) =>
    api.get('', {
      params: {
        q: query,
        page: page,
      },
    }),
};

export { getApi };
