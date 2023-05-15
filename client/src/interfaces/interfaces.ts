import { AxiosResponse } from "axios";

export interface IUser {
    id: number;
    email: string;
    password: string;
    isActivated: boolean;
    activationLink: string;
    createdAt: string;
}

export interface IToken {
    id: number;
    refreshToken: string;
    userId: number;
}

export interface ISlide {
    id: number;
    image: string;
    imageMobile?: string;
    buttonText?: string;
    title?: string;
    description?: string;
}

export interface IProduct {
    id: number;
    categoryId: number;
    description?: string;
    discounrRate?: number;
    sku?: string | number;
    stock?: number;
    title: string;
    merchant: string;
    rating: number;
    price: number;
    promoStartDate?: string;
    promoEndDate?: string;
    isSold?: boolean;
    isDeleted?: boolean;
    isFreeProduct?: boolean;
    isPromoted?: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ICategory {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}