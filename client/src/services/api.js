import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8081/api', // <-- Must be 8081
  headers: {
    'Content-Type': 'application/json'
  }
});

// ... rest of the file ...
export const fetchAllClubs = () => apiClient.get('/clubs');
export const fetchClubById = (id) => apiClient.get(`/clubs/${id}`);
export const submitRegistration = (formData) => apiClient.post('/register', formData);