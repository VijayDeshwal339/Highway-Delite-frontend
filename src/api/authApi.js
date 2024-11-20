import axios from 'axios';

export const loginApi = async (email, password) => {
  const response = await axios.post('https://highway-delite-backend.onrender.com/api/auth/login', { email, password });
  return response.data;
};

export const signupApi = async (email) => {
  const response = await axios.post('https://highway-delite-backend.onrender.com/api/auth/signup', { email });
  return response.data;
};

export const verifyOtpApi = async (email, otp, password) => {
  const response = await axios.post('https://highway-delite-backend.onrender.com/api/auth/verify-otp', { email, otp, password });
  return response.data;
};
