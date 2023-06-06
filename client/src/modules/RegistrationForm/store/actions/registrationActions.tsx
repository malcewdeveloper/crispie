import fetchRegistrationRequest from "../../api/fetchRegistrationRequest";
import { toast } from 'react-toastify';
import { AUTH_ERROR, AUTH_REGISTER } from "../../../../store/types/types";

export async function register(email: string, password: string) {
    try {
        const authData = await fetchRegistrationRequest(email, password);
        
        window.location.href = authData.redirectUrl;
    
        return {
            type: AUTH_REGISTER,
            payload: authData
        }
    } catch (error) {
        toast.error( `${error.response.data.message}`)

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