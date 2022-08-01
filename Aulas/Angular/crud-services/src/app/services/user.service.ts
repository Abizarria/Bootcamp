import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/a23f484a-eb2d-4ff8-92bf-309fbf8c6662';
  
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - Create, Read, Update, Delete
  // Retorna (lê) a lista de usuários - >>READ<<

  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // Insere Usuário no Banco de Dados - CREATE

  postUser(user: User):Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

   // Apaga Usuário no Banco de Dados - DELETE

   deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`);
  }

   // Editar Usuário no Banco de Dados - Update

   updateUser(id: string, user: User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  // Exibe Usuário a ser Alterado 

  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`);
  }
}

