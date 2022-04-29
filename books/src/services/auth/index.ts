import axios from "axios";
import { ioasysApi } from "../api";
import {User, ResponseUser, UserRefresh} from '../auth/types'
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    data['refreshToken'] = refresh;
    if(status == 200){
        return data;
    }else{
        return 400;
    }
}

export const refreshToken = async (): Promise<any> => {
    const value = await AsyncStorage.getItem('@user')
    if(value != null){
        const validValue = JSON.parse(value)
        const body: UserRefresh = {
            refreshToken: validValue.refreshToken,
        }
    
        const url = '/auth/refresh-token'
        const {status, headers} = await ioasysApi.post(url, body)
        
        const authorization = headers['authorization'];
        const refresh = headers['refresh-token'];
        let data = {
            authorization,
            refresh
        }
        return data;
    }
}