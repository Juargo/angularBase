import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as authActions from './auth.actions';
import * as authSelector from './auth.selectors';
import { Observable } from 'rxjs';
import { StateAuth } from './auth.reducers';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  constructor(private store: Store<StateAuth>) {} //El tipo dentro <> debe ser igual a lo que puede devolver en las funciones de selectors

  public Login(user: string, password: string) {
    this.store.dispatch(authActions.login({ user, password }));
  }

  public Login$(): Observable<string> {
    return this.store.select(authSelector.getLogin);
  }
}
