import { AxiosResponse } from 'axios';
import $api from '../../../api';
import { ISlide } from '../../../interfaces/interfaces';


export default async function fetchImages(): Promise<ISlide[]>  {
    try {
        const response: AxiosResponse<ISlide[]> = await $api.get(`/api/slider`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
