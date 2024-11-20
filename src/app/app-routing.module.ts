import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppURL } from './app.url';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: AppURL.Login, pathMatch: 'full' },
  { path: AppURL.Login, component: LoginComponent },
  {
    path: AppURL.Authen,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
