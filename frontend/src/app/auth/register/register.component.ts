import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router,private userService:UserService) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.registerForm.valid) {
      // Handle form submission here
      this.userService.register(this.registerForm.value).subscribe()
      console.log(this.registerForm.value);
      this.router.navigate(['/login'])
    }
  }
  goToRegister(){
    this.router.navigate(['/register'])
  }

}
