export interface RequestBooks {
    page: string;
    amount: string;
    title?: string;
    category?:string;
    auth?: string
}

export interface BookId {
    id: string;
    auth?: string
}