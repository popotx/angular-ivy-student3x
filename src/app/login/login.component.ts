import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  password: string;

  LoginUser() {
    if (this.password == '079525569420') {
      console.log('you are in');
      localStorage.setItem('logged', 'neznama');
      this.router.navigate(['vilko']);
    }
    if (this.password != '079525569420') {
      console.log('you are not in');
    }
  }
  ngOnInit() {
    if (localStorage.getItem('logged') == 'neznama') {
      this.router.navigate(['vilko']);
    }
    }
}
