import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AddmenuComponent } from 'app/addmenu/addmenu.component';
import { LoginComponent } from 'app/user/login/login.component';
import { EditmenuComponent } from 'app/editmenu/editmenu.component';
import { BartimetableComponent } from 'app/bartimetable/bartimetable.component';
import { EventManagementComponent } from 'app/event-management/event-management.component';
import { AddeventComponent } from 'app/addevent/addevent.component';
import { EditeventComponent } from 'app/editevent/editevent.component';
import { OfferManagementComponent } from 'app/offer-management/offer-management.component';
import { StaffComponent } from 'app/staff/staff.component';
import { AddstaffComponent } from 'app/addstaff/addstaff.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile/:id',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'menu',     component: TypographyComponent },
    { path: 'addmenu',     component: AddmenuComponent},
    { path: 'editmenu/:id',     component: EditmenuComponent},
    { path: 'timing',     component:BartimetableComponent},
    { path: 'events',     component:EventManagementComponent},
    { path: 'offer',     component:OfferManagementComponent},
    { path: 'staff',     component:StaffComponent},
    { path: 'addstaff',     component:AddstaffComponent},
    { path: 'addevent/:id',     component:AddeventComponent},
    { path: 'eventmanage/:id',     component:EditeventComponent},
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
   
];
