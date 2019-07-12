import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

export interface NavbarItemInterface {
  label: string;
}

@Component({
  selector: 'ngx-ludan-sidebar',
  styleUrls: ['ngx-ludan-sidebar.component.scss'],
  animations: [
    trigger('toggleOverlay', [
      state(
        '1',
        style({
          opacity: 0.5
        })
      ),
      state(
        '0',
        style({
          opacity: 0
        })
      ),
      transition('1 => 0', animate('200ms 300ms ease-out')),
      transition('0 => 1', animate('200ms ease-in'))
    ]),
    trigger('toggleSidebar', [
      state('1', style({ transform: 'translateX(0)' })),
      state('0', style({ transform: 'translateX(200px)' })),
      transition('1 => 0', animate('200ms ease-out')),
      transition('0 => 1', animate('200ms 300ms ease-in'))
    ])
  ],
  template: `
    <nav class="sidebar">
      <div
        class="overlay"
        (click)="overlayClick()"
        [@toggleOverlay]="sidebarOpen"
        [class.hidden]="!sidebarOpen"
      ></div>
      <ul class="nav" [@toggleSidebar]="sidebarOpen">
        <li *ngFor="let item of items" (click)="selectItem(item)" class="link">
          {{ item.label }}
        </li>
      </ul>
    </nav>
  `
})
export class NgxLudanSidebarComponent {
  @Input() items: NavbarItemInterface[];
  @Input() selectedItem: NavbarItemInterface;
  @Input() sidebarOpen = false;

  @Output() selectEvent = new EventEmitter();
  @Output() closeEvent = new EventEmitter();

  @ViewChild('nav', { static: false }) nav: ElementRef;

  selectItem = item => {
    this.selectEvent.emit(item);
    if (this.sidebarOpen) {
      this.sidebarOpen = false;
    }
  }

  overlayClick = () => {
    if (this.sidebarOpen) {
      this.closeEvent.emit(true);
    }
  }
}
