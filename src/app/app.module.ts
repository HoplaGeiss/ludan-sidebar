import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLudanSidebarModule } from './../../projects/ngx-ludan-sidebar/src/lib/ngx-ludan-sidebar.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxLudanSidebarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
