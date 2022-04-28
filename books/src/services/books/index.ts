import { BookId } from './types.d';
import axios from "axios";
import { ioasysApi } from "../api";
import { RequestBooks } from "./types";

export const books = async ({
    page, amount, title, category, auth
}: RequestBooks): Promise<any> => {
    let url = `/books?page=${page}&amount=${amount}`
    if(title != '') url += `&title=${title}`
    if(category != '') url += `&category=${category}`
    console.log('auqi', url)
    console.log('page', page)
    console.log('amount', amount)
    console.log('title', title)
    console.log('category', category)
    console.log('auth', auth)
    const {status, data} = await ioasysApi.get(url, {
        headers: {Authorization: `Bearer ${auth}`}
    });
    return data;
}

export const booksId = async ({
    id, auth
}: BookId): Promise<any> => {
    const url = `/books/${id}`

    const { status, data } = await ioasysApi.get(url, {
        headers: {Authorization: `Bearer ${auth}`}
    });
    return data;
}