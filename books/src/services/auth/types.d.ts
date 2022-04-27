export interface User {
    email: string;
    password: string
}

export interface ResponseUser{
    name: string;
    email: string;
    birthdate: string;
    gender: string;
    id: string;
    authorization?: string
}

export interface UserRefresh{
    refreshToken: string;
}