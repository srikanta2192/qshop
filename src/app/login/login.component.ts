import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminDataService } from '../admin-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signUp: Boolean = false;
  constructor(private fb: FormBuilder, public router: Router, private adminDataService: AdminDataService) { }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });
  signUpForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
  });

  ngOnInit() {
    if (this.router.url.includes('signup')) {
      this.signUp = true;
    }
  }

  onSignIn = () => {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    this.adminDataService.signInUser({ email, password }).subscribe(data => {
      console.log(data)
      localStorage.setItem('login', data['login']);
      localStorage.setItem('admin', data['admin']);
      localStorage.setItem('email', email)
      if (data['login']) {
        this.router.navigateByUrl('/home')
      }
    })
  }

  toggleSignUp = (toggleFlag: Number) => {
    if (toggleFlag) {
      this.signUp = true;
    }
    else {
      this.signUp = false
    }
  }

  onSignUpSubmit = () => {
    console.log(this.signUpForm)
    if (this.signUpForm.value.password.trim().length > 0 && this.signUpForm.value.confirmPassword.trim().length > 0) {
      if (this.signUpForm.value.password.trim() === this.signUpForm.value.confirmPassword.trim()) {
        const { email, password } = this.signUpForm.value;
        this.adminDataService.createUser({ email, password, admin: true }).subscribe(data => {
          this.signUp= false;
        }, error => {
          window.alert("Could not create alert due to this ")
        })
        // this.http.post("http://localhost:8081/create/user", { "email": this.signUpForm.value.email, "password": this.signUpForm.value.password }, httpOptions).subscribe(data => {
        //   console.log(data)
        // })
        // // this.http.get("http://localhost:8081/create", httpOptions).subscribe(data => {
        //   console.log(data)
        // })
      }
    }
  }
}
