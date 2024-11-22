import { Component } from '@angular/core';
import { AppURL } from '../../../app.url';
import { AuthURL } from '../../../authentication/authentication.url';

@Component({
  selector: 'app-auth-sidebar',
  templateUrl: './auth-sidebar.component.html',
  styleUrl: './auth-sidebar.component.scss',
  standalone: false,
})
export class AuthSidebarComponent {
  AppURL = AppURL;
  AuthURL = AuthURL;
}
