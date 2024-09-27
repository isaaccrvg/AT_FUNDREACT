import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Usuário não encontrado:', error);
    throw error;
  }
};

const fetchPosts = async (userId) => {
  try {
    const response = await api.get(`/posts?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error('Postagem não encontrada:', error);
    throw error;
  }
};

const fetchComments = async (postId) => {
  try {
    const response = await api.get(`/comments?postId=${postId}`);
    return response.data;
  } catch (error) {
    console.error('Não há comentário:', error);
    throw error;
  }
};

export default { fetchUsers, fetchPosts, fetchComments };
