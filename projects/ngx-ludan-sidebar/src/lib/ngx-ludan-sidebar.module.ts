import { NgModule } from '@angular/core';
import { NgxLudanSidebarComponent } from './ngx-ludan-sidebar.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NgxLudanSidebarComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [NgxLudanSidebarComponent]
})
export class NgxLudanSidebarModule {}
