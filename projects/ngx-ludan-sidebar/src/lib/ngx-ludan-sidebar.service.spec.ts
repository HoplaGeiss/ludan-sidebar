import { TestBed } from '@angular/core/testing';

import { NgxLudanSidebarService } from './ngx-ludan-sidebar.service';

describe('NgxLudanSidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLudanSidebarService = TestBed.get(NgxLudanSidebarService);
    expect(service).toBeTruthy();
  });
});
