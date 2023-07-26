import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class  UserService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:3000"

  register(user:any){
    return this.http.post(`${this.url}/register`,user)
  }

  login(user:any){
    return this.http.post(`${this.url}/login`,user)
  }
}
