import $api from '../../../api';
import { IProduct } from "../../../interfaces/interfaces";


export default async function fetchProducts(category: string): Promise<IProduct[]> {
    const response = await $api.get(`/api/products?category=${category}`);

    return response.data;
}