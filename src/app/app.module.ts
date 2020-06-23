
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {MatDialogModule} from '@angular/material/dialog';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './user/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ToastrModule } from 'ngx-toastr';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { BartimetableComponent } from './bartimetable/bartimetable.component';
import { MatTableModule } from '@angular/material/table';
import { EventManagementComponent } from './event-management/event-management.component';

@NgModule({
  imports: [

  BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule, 
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    [NgxMaterialTimepickerModule],
    HttpClientModule ,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }
    ), // ToastrModule added    
    
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  exports:[  MatInputModule, MatCardModule],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    AddmenuComponent,
    EditmenuComponent,
    BartimetableComponent,
    EventManagementComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
