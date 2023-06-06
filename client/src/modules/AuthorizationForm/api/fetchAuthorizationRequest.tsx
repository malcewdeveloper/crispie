import $api from '../../../api';

export default async function fetchAuthorizationRequest(email, password) {
    const response = await $api.post('/api/login', { email, password });   
    
    return response.data;
}