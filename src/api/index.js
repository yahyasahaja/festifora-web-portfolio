import axios from 'axios';
// import getPostsMock from '../mocks/get-posts.json';
import { API_KEY, API_URL, BLOG_ID } from '../configs/constants';

const interfaces = {
  getPosts() {
    return axios.get(`${API_URL}/${BLOG_ID}/posts?key=${API_KEY}`);
  }
}

export default interfaces;
