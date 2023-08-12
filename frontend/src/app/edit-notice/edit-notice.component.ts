import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeService } from '../service/notice.service';

@Component({
  selector: 'app-edit-notice',
  templateUrl: './edit-notice.component.html',
  styleUrls: ['./edit-notice.component.scss']
})
export class EditNoticeComponent implements OnInit ,AfterViewInit{

  // form!: FormGroup;
  notice: any;
  id: any;
 
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
    // Add more fields as needed with corresponding titles and descriptions
  });
  constructor(private fb: FormBuilder, private noticeService: NoticeService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    
    this.noticeService.getNotice(this.id).subscribe((notice) => {
      this.notice = notice
      this.form.setValue({
        title:this.notice.title,
        description:this.notice.description
      })
    })
    
  }
  
  // Submit function to handle form submission
  onSubmit() {
    if (this.form.valid) {
      // Process the form data here
      this.noticeService.updateNotice(this.id, this.form.value).subscribe()
      // console.log(this.form.value);
      this.router.navigate(['/notice'])
    }
  }
  ngAfterViewInit(){
    console.log(this.notice);

  }
}
