import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppURL } from '../../app.url';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    standalone: false
})
export class LoginComponent {
  constructor(private router: Router) {}
  form = {
    type: 'local',
    username: '',
    password: '',
    rememberMe: false,
  };
  onSubmit() {
    this.router.navigateByUrl(`${AppURL.Authen}`);
  }
}
