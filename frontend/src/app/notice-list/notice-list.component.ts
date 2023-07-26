import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticeService } from '../service/notice.service';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.scss']
})
export class NoticeListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'description'];
  dataToDisplay = [12, 65]
  dataSource: any;
  constructor(private noticeServics: NoticeService,private router:Router) { }

  ngOnInit(): void {
    this.noticeServics.getNotice().subscribe((value) => {
      console.log(value);

      this.dataSource = value

    })
  }
  addData() { 
    this.router.navigate(['/add-notice'])
  }
  removeData() { }

}
