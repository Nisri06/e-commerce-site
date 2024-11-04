// lib/api.js
import axios from 'axios';
import { getProducts } from '../path/to/api';


const API_BASE_URL = 'https://fakestoreapi.com';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};



