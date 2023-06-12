import axios from "axios";
// const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
// const USERS_URL="https://tuiter-node-server-app-k5pw.onrender.com";
// const USERS_URL = `${SERVER_API_URL}/users`;


// const USERS_URL="http://localhost:4000/api/users"
// const USERS_URL="https://tuiter-node-server-app-k5pw.onrender.com/api/users"

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/api/users`;

const api = axios.create({ withCredentials: true });


export const login = async ({ username, password }) => {
 const response = await api.post(`${USERS_URL}/login`, { username, password });
 const user = response.data;
 return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response.data; // changed from response
};

export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};

export const register = async ({ username, password }) => { 
    // alert({username,password});
    const response = await api.post(`${USERS_URL}/register`, { username, password });
    // const user = response.data;
    // console.log("service "+user);
    return response.data;
    }