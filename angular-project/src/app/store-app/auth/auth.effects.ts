import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, tap } from 'rxjs/operators';

import * as authActions from './auth.actions';
import { AuthService } from '@services';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  loginEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      concatMap(({ request }) =>
        this.authService.login(request).pipe(
          map((response) => authActions.loginSuccess({ login: response })),
          catchError((error) => of(authActions.loginError({ error })))
        )
      )
    )
  );

  notifyAfterLoginError = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.loginError),
        tap(({ error }) => {
          console.log('Login Error', error);
        })
      ),
    { dispatch: false } //IMPORTANTE
  );

  notifyAfterLoginSuccess = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.loginSuccess),
        tap(({ login }) => {
          console.log('login');
          localStorage.setItem('auth', login);
        })
      ),
    { dispatch: false }
  );
}
