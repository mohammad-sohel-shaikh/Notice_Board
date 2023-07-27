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
  getNotices(){
    return this.http.get(`${this.url}/notice`)
  }
  getNotice(id:string){
    return this.http.get(`${this.url}/notice/${id}`)
  }
  updateNotice(id:string,notice:any){
    return this.http.put(`${this.url}/edit-notice/${id}`,notice)
  }
  deleteNotice(id:string){
    return this.http.delete(`${this.url}/notice/${id}`)
  }
}
