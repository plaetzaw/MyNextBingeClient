import axios from 'axios'

// Set JWT Token
export const setAuthorizationHeader = (token) => {
    const JWToken = `Bearer ${token}`;
    localStorage.setItem("JWToken", JWToken);
    axios.defaults.headers.common["Authorization"] = JWToken;
  };