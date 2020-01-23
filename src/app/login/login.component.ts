import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signUp: Boolean = false;
  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });
  signUpForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
  });

  ngOnInit() {
  }

  onSubmit = () => {
    console.log(this.loginForm.value);
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
        console.log("passwords matched")
      }
    }
  }
}
