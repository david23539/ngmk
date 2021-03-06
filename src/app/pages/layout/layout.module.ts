import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutRoutes } from './layout.routing';
import { NavbarComponent } from '../navbar/navbar.component';
//import { UserProfileComponent } from '../../user-profile/user-profile.component';
//import { TableListComponent } from '../../table-list/table-list.component';
//import { TypographyComponent } from '../../typography/typography.component';
//import { IconsComponent } from '../../icons/icons.component';
//import { MapsComponent } from '../../maps/maps.component';
//import { NotificationsComponent } from '../../notifications/notifications.component';
//import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { MatButtonModule, MatInputModule, MatRippleModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
  ],
  declarations: [
    NavbarComponent,
//    UserProfileComponent,
//    TableListComponent,
//    TypographyComponent,
//    IconsComponent,
//    MapsComponent,
//    NotificationsComponent,
//    UpgradeComponent,
  ]
})

export class LayoutModule { }
