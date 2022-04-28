import axios from "axios";
import { ioasysApi } from "../api";
import {User, ResponseUser, UserRefresh} from '../auth/types'

export const signIn = async ({
    email, password
}:User): Promise<ResponseUser | number> => {
    const body: User = {
        email: email,
        password: password
    }

    const url = '/auth/sign-in'
    const {status, data, headers} = await ioasysApi.post<ResponseUser>(url, body);

    const authorization = headers['authorization'];
    const refresh = headers['refresh-token'];

    data['authorization'] = authorization;
    data['refresh-token'] = refresh;
    if(status == 200){
        return data;
    }else{
        return 400;
    }
}

export const refreshToken = async ({
    refreshToken
}:UserRefresh): Promise<any> => {
    const body: UserRefresh = {
        refreshToken: refreshToken,
    }

    const url = '/auth/refresh-token'
    const {status, data, headers} = await ioasysApi.post(url, body)

    const authorization = headers['authorization'];
    const refresh = headers['refresh-token'];
    data['authorization'] = authorization;
    data['refresh-token'] = refresh;
    return data;
}