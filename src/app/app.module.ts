import { NgModule } from '@angular/core';
import { NgxLudanSidebarModule } from './../../projects/ngx-ludan-sidebar/src/lib/ngx-ludan-sidebar.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [NgxLudanSidebarModule, BrowserAnimationsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
