import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedsRoutingModule } from './shareds-routing.module';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { ClrVerticalNavModule } from '@clr/angular';
import {
  ClarityIcons,
  homeIcon,
  employeeGroupIcon,
  flameIcon,
  boltIcon,
  nodeGroupIcon,
  barChartIcon,
  certificateIcon,
} from '@cds/core/icon';
ClarityIcons.addIcons(
  homeIcon,
  employeeGroupIcon,
  flameIcon,
  boltIcon,
  nodeGroupIcon,
  barChartIcon,
  certificateIcon
);

@NgModule({
  declarations: [AuthSidebarComponent, AuthContentComponent],
  imports: [CommonModule, SharedsRoutingModule, ClrVerticalNavModule],
  exports: [AuthSidebarComponent, AuthContentComponent],
})
export class SharedsModule {}
