import $api from '../../../api';
import { ICategory } from "../../../interfaces/interfaces";

export default async function fetchCategories(): Promise<ICategory[]>  {
    const response = await $api.get('/api/categories');
    
    return response.data;
}