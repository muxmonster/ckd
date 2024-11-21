import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientListComponent } from './components/patient-ckd/patient-list/patient-list.component';

const routes: Routes = [
  { path: '', redirectTo: AuthURL.Dashboard, pathMatch: 'full' },
  { path: AuthURL.Dashboard, component: DashboardComponent },
  { path: AuthURL.PatientList, component: PatientListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
