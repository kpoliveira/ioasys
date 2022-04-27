import { BookId } from './types.d';
import axios from "axios";
import { ioasysApi } from "../api";
import { RequestBooks } from "./types";

export const books = async ({
    page, amount, title, category
}: RequestBooks): Promise<any> => {
    let url = `/books?page=${page}&amount=${amount}`
    if(title != '') url += `&title=${title}`
    if(category != '') url += `&category=${category}`

    const {status, data} = await ioasysApi.get(url);
    return data;
}

export const booksId = async ({
    id
}: BookId): Promise<any> => {
    const url = `/books/${id}`

    const { status, data } = await ioasysApi.get(url);
    return data;
}