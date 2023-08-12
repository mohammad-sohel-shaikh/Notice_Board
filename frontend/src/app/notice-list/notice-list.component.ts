import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { LocalStorageService } from '../service/local-storage.service';
import { NoticeService } from '../service/notice.service';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.scss']
})
export class NoticeListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['title', 'description', 'update', 'delete'];
  dataSource: any;
  filterSource: any
  role: string = ''
  constructor(private noticeServics: NoticeService, private router: Router, private localStorage: LocalStorageService, private _snackBar: MatSnackBar) { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.noticeServics.getNotices().subscribe((value) => {
      console.log(value);
      this.dataSource = value
      this.filterSource = this.dataSource
      let localData = JSON.parse(this.localStorage.getItem()!)
      this.role = localData.role
      // this.openSnackBar(`Welcome to Notice Board ${localData.username}`,"ok")

    })
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  addData() {
    this.router.navigate(['/add-notice'])
  }

  removeData(id: any) {
    console.log(id);
    this.noticeServics.deleteNotice(id).subscribe()
    this.router.navigate(['/notice'])

  }
  updateData(id: any) {
    this.router.navigate([`/edit-notice/${id}`])
  }

  logout() {
    this.localStorage.clearStorage()
    this.router.navigate(['/login'])
  }

  applyFilter(event: Event) {
    debounceTime(4000)
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterSource = this.dataSource.filter((element: any) => {
      if (String(element.title.toLowerCase()).includes(filterValue)) {
        return element;
      }
    })
  }

}


