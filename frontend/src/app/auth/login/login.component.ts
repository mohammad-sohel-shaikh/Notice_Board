import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: any;
  constructor(private formBuilder: FormBuilder,private router:Router,private userService:UserService,private localStorage:LocalStorageService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      // Handle form submission here
      console.log(this.loginForm.value);
      this.userService.login(this.loginForm.value).subscribe((value)=>{
        console.log(value);
        this.localStorage.setItem(JSON.stringify(value))
        
        this.router.navigate(['notice'])
      })
    }
  }
  goToRegister(){
    this.router.navigate(['/register'])
  }
}
