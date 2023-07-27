import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  setItem(user:any){
    localStorage.setItem('userInfo',user)
  }
  getItem(){
    return localStorage.getItem('userInfo')
  }

  clearStorage(){
    return localStorage.clear()
  }

}
