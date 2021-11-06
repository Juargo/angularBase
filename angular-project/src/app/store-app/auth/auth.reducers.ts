import { createReducer,on } from '@ngrx/store'
import * as authActions from './auth.actions'

export const authFeaturekey = 'auth';

export interface StateAuth{
    login:string
}

export const initialStateAuth:StateAuth = {
    login:''
}

export const  reducerAuth = createReducer(
    initialStateAuth,
    on(authActions.loginSuccess,(state,{login})=>({
        ...state,
         login
    }))
)