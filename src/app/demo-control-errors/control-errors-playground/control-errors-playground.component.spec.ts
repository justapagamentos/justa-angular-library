import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlErrorsPlaygroundComponent } from './control-errors-playground.component';

describe('ControlErrorsPlaygroundComponent', () => {
  let component: ControlErrorsPlaygroundComponent;
  let fixture: ComponentFixture<ControlErrorsPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlErrorsPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlErrorsPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
