import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Required for cookies
});

// Function to get CSRF cookie
const getCsrfToken = async () => {
    await fetch('http://localhost:8000/sanctum/csrf-cookie', {
        method: 'GET',
        credentials: 'include',
    });
};

export const testConnection = async () => {
    try {
        const response = await fetch(`${API_URL}/test`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const sendTestData = async (data) => {
  try {
    const response = await fetch(`${API_URL}/test`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    // Get CSRF cookie
    await api.get('/sanctum/csrf-cookie');
    // Register user
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};