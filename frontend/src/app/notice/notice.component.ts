import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';
import { NoticeService } from '../service/notice.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  id: any;
  notice: any;
  user: any;
constructor(private router:Router,private route:ActivatedRoute,private noticeService:NoticeService,private localService:LocalStorageService){}
  ngOnInit():void{
    this.id=this.route.snapshot.paramMap.get('id')
    // this.ad=this.localService.getItem()
    // this.username=
    this.noticeService.getNotice(this.id).subscribe((notice)=>{
      this.notice=notice
      this.user=this.notice.userId
      console.log(notice,"Single");
      console.log(this.user,"User");
    })
  }
}
