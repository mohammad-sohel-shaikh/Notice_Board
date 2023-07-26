import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  url = "http://localhost:3000"
  constructor(private http:HttpClient) { }
  createNotice(notice:any){
    return this.http.post(`${this.url}/add-notice/`,notice)
  }
  getNotice(){
    return this.http.get(`${this.url}/notice`)
  }
  updateNotice(notice:any){
    return this.http.put(`${this.url}/edit-notice/:id`,notice)
  }
  deleteNotice(){
    return this.http.delete(`${this.url}/notice/:id`)
  }
}
