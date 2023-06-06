import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API_URL } from "../../utils/constants";
import { AUTH_CHECK_ERROR, AUTH_CHECK_SUCCESS } from "../types/types";

export async function checkAuth() {
    try {
        const response = await axios.get(`${API_URL}/api/refresh`, {
            withCredentials: true
        });        
        
        return {
            type: AUTH_CHECK_SUCCESS,
            payload: response.data
        }
    } catch (error) {
        return {
            type: AUTH_CHECK_ERROR
        }
    }
}