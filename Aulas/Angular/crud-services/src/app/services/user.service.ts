import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/a23f484a-eb2d-4ff8-92bf-309fbf8c6662';
  
  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - Create, Read, Update, Delete
  // READ - Retorna a lista de usuários

  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }
}
