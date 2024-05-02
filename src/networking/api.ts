import axios from 'axios';
import {Post} from '../types/postTypes';

const API_BASE_URL = 'https://mocki.io/v1/';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await apiClient.get<{posts: Post[]}>(
      '3efa7bf1-8efe-4c58-b15e-d570d12b18ff',
    );
    return response.data.posts;
  } catch (error) {
    throw new Error('Unable to fetch posts');
  }
};
