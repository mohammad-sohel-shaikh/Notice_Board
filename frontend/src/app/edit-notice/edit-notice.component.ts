import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeService } from '../service/notice.service';

@Component({
  selector: 'app-edit-notice',
  templateUrl: './edit-notice.component.html',
  styleUrls: ['./edit-notice.component.scss']
})
export class EditNoticeComponent {

  form!: FormGroup;
  notice:any;
  id:any;
  constructor(private fb: FormBuilder, private noticeService: NoticeService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      // Add more fields as needed with corresponding titles and descriptions
    });
    this.id=this.route.snapshot.paramMap.get("id")
    this.noticeService.updateNotice(this.id,this.form.value)
  }

  // Submit function to handle form submission
  onSubmit() {
    if (this.form.valid) {
      // Process the form data here
      console.log(this.form.value);
    }
  }

}
