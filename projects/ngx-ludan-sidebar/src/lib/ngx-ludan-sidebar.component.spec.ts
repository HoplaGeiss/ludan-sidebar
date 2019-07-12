import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLudanSidebarComponent } from './ngx-ludan-sidebar.component';

describe('NgxLudanSidebarComponent', () => {
  let component: NgxLudanSidebarComponent;
  let fixture: ComponentFixture<NgxLudanSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLudanSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLudanSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
