import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { refreshToken, signIn } from '../../auth';
import { ResponseUser } from '../../auth/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface StoredUser extends ResponseUser{
    auth: string;
}

export interface User {
    storeUser: StoredUser;
}

const initialState: User = {
    storeUser: {auth: ''},
}

export const authUser = createAsyncThunk('auth', async (props: any) => {
    const a = await signIn({
        email: props.email,
        password: props.password,
      });
      const validBody = JSON.stringify(a);
      await AsyncStorage.setItem('@user', validBody);
      return a;
})

export const refreshTokenFunction = createAsyncThunk('refresh', async () => {
    const refreshTokenVariable = await refreshToken();
    
    return refreshTokenVariable;
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{signOut: (state, action) => {},
    refresh:(state, action) => {},
    storeUser:(state,action) => {
        state.storeUser = action.payload
        AsyncStorage.setItem('@user', JSON.stringify(state.storeUser));
    }},
    extraReducers: (builder) => {
        builder
            .addCase(refreshTokenFunction.fulfilled, (state, action) => {
                const a = AsyncStorage.getItem('@user')
                const userRefreshed: ResponseUser = {
                    authorization: action.payload.authorization,
                }
                AsyncStorage.mergeItem('@user', JSON.stringify(userRefreshed))
                state.storeUser.authorization = action.payload.authorization
                state.storeUser.refreshToken = action.payload.refreshToken
            })
            .addCase(refreshTokenFunction.pending, (state, action) => {
                console.log('PENDENTE')
            })
            .addCase(refreshTokenFunction.rejected, (state, action) => {
                console.log('FAIL')
                AsyncStorage.removeItem('@user')
            })
    }
})

export const {storeUser, signOut, refresh} = userSlice.actions;

export default userSlice.reducer