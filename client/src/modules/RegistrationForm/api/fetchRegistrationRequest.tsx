import $api from '../../../api';

export default async function fetchRegistrationRequest(email: string, password: string) {
    const response = await $api.post('/api/register', { email, password });
    
    return response.data;
}