import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertModelComponent } from './alert-modal.component';

describe('AlertModalComponent', () => {
  let component: AlertModelComponent;
  let fixture: ComponentFixture<AlertModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
