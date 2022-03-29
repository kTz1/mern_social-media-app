import axios from 'axios';

const url = 'http://localhost:5000/post';

const fetchPost = () => axios.get(url);