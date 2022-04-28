import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  submit() {
    const { login, password } = this.loginForm.value;
    if (login === 'admin' && password === '123456') {
      localStorage.setItem('login', login);
      alert('Успешная авторизация!');
      this.router.navigateByUrl('/home');
    } else {
      alert('Неправильный логин и/или пароль!');
    }
  }
}
