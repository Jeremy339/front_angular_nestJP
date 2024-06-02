import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl= "http://127.0.0.1:3000";
  
  constructor(private http: HttpClient) {}

  loginConNest(credenciales: any) {
    return this.http.get<any>(`${this.baseUrl}/auth/login`, credenciales);
  }

  registroConNest(datos: any) {
    return this.http.post<any>(`${this.baseUrl}/register`, datos);
  }
}
