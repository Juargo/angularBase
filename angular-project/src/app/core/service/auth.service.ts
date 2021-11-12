import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment';
import { RequestAuth } from '@model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(request: RequestAuth):Observable<string>{
    return this.http.post<string>(`${environment.api}/auth/login`,request)
  }
}
