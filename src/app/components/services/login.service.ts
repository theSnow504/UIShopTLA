import { Injectable } from '@angular/core';
import { loginValue } from '../models/login.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getlogin(model:loginValue): Observable<any>
  {
    return this.http.post<any>('https://localhost:7132/api/User',model);
    
  }
}
