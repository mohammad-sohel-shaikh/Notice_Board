import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  user: any;
  constructor(private formBuilder: FormBuilder,private router:Router,private userService:UserService,private _snackBar: MatSnackBar,private localStorage:LocalStorageService) {
    this.user=this.localStorage.getItem()
    if(this.user){
      this.router.navigate(['/notice'])
    }
  }
  
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
      this.userService.login(this.loginForm.value).subscribe((user:any)=>{
        console.log(user);
        this.localStorage.setItem(JSON.stringify(user))
        this.openSnackBar("welcom","ok")
        this.router.navigate(['notice'])
      })
    }
  }
  goToRegister(){
    this.router.navigate(['/register'])
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
