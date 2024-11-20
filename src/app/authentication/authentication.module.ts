import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedsModule } from '../shareds/shareds.module';
import { ClrVerticalNavModule } from '@clr/angular';
import { ClrDatagridModule, ClrIconModule } from '@clr/angular';
import { ClarityIcons, successStandardIcon } from '@cds/core/icon';
ClarityIcons.addIcons(successStandardIcon);

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedsModule,
    ClrVerticalNavModule,
    ClrDatagridModule,
    ClrIconModule,
  ],
})
export class AuthenticationModule {}
