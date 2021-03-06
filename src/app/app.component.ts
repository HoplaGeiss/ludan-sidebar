import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <img
      class="menu"
      src="assets/icons/burger.svg"
      alt="Menu"
      (click)="toggleSidebar()"
    />
    <ngx-ludan-sidebar
      [items]="navbarItems"
      [selectedItem]="selectedItem"
      [sidebarOpen]="sidebarOpen"
      (selectEvent)="select($event)"
      (closeEvent)="closeSidebar()"
    ></ngx-ludan-sidebar>
  `
})
export class AppComponent {
  navbarItems = [
    { label: 'Introduction' },
    { label: 'Getting Started' },
    { label: 'Setup' },
    { label: 'About' }
  ];

  selectedItem = this.navbarItems[0];
  sidebarOpen = false;

  select = element => {
    this.selectedItem = element;
  }

  toggleSidebar = () => {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar = () => {
    this.sidebarOpen = false;
  }
}
