import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/table-list', title: 'App Users',  icon:'person', class: '' },
    { path: '/menu', title: 'Menu Managment',  icon:'line_weight', class: '' },
    { path: '/events', title: 'Event Management',  icon:'toys', class: '' },
    { path: '/timing', title: 'Time Management',  icon:'schedule', class: '' },
    { path: '/staff', title: 'Staff',  icon:'accessibility', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
