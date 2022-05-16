import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { nuevoEntidad } from '../models/nuevoEntidad';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { JwtDTO } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoEntidad1: nuevoEntidad): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'registrarse', nuevoEntidad1);
  }

  public login(login: Login): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'iniciar', login);
  }
}
