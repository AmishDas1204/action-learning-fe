import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLoadComponent } from './device-load.component';

describe('DeviceLoadComponent', () => {
  let component: DeviceLoadComponent;
  let fixture: ComponentFixture<DeviceLoadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceLoadComponent]
    });
    fixture = TestBed.createComponent(DeviceLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
