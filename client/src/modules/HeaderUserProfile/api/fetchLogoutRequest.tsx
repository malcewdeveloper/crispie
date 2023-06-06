import $api from '../../../api';

export default async function fetchLogoutRequest() {
    const response = await $api.post('/api/logout');

    return response.data;
}