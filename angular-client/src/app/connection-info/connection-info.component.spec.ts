import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionInfoComponent } from './connection-info.component';

describe('ConnectionInfoComponent', () => {
  let component: ConnectionInfoComponent;
  let fixture: ComponentFixture<ConnectionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
