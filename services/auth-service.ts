import axios from "axios";
import User from "../models/User";
const BASE_URL = process.env.REACT_APP_BASE_URL

const AUTH_API = `${BASE_URL}/api/auth`

const api = axios.create({
   withCredentials: true
});

export const signup = (user : User) =>
   api.post(`${AUTH_API}/signup`, user)
       .then(response => response.data);