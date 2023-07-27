import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';
import { NoticeService } from '../service/notice.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.scss']
})
export class AddNoticeComponent {
  addNoticeForm: any;
  newNotice:any;
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private userService: UserService,
    private localService:LocalStorageService,
    private noticeServie:NoticeService
    ) { }

  ngOnInit() {
    this.addNoticeForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  submitForm() {
    if (this.addNoticeForm.valid) {
      // Handle form submission here
      console.log(this.addNoticeForm.value);
      const adminId=JSON.parse(this.localService.getItem()!)
      console.log(adminId._id);
      this.newNotice={...this.addNoticeForm.value, userId:adminId._id}
      console.log(this.newNotice);
      this.noticeServie.createNotice(this.newNotice).subscribe()
      
      // this.noticeServie.createNotice()
      // this.userService.login(this.addNoticeForm.value).subscribe((value) => {
      //   console.log(value);

      // })
      this.router.navigate(['notice'])
    }
  }
  goBack(){
    this.router.navigate(['/notice'])
  }
}
