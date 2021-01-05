import axios from "axios";

const accessToken = localStorage.getItem('accessToken');

const headers: any = {}

if (accessToken) {
  headers.Authorization = `Bearer ${accessToken}`;
}

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers
})
