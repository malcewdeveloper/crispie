import fetchAuthorizationRequest from "../../api/fetchAuthorizationRequest"
import { AUTH_ERROR, AUTH_REQUEST } from "../../../../store/types/types";
import { toast } from 'react-toastify';

export async function login(email: string, password: string) {

    try {
        const authData = await fetchAuthorizationRequest(email, password);

        window.location.href = authData.redirectUrl;
    
        return {
            type: AUTH_REQUEST,
            payload: authData
        }
    } catch (error) {
        toast.error(`${ error.response.data.message }`);
        
        return {
            type: AUTH_ERROR,
            payload: {
                message: error.response.data.message,
                status: error.response.status, 
                statusText: error.response.statusText, 
                errors: error.response.data.errors
            }
        }
    }
}