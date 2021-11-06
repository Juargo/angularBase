import {createAction,props} from '@ngrx/store';

export const login = createAction('[Auth Login] POST login',props<{user:string,password:string}>())
export const loginSuccess = createAction('[Auth Login] POST login sucess',props<{login:string}>())
export const loginError = createAction('[Auth Login] POST login Error',props<{error:any}>())