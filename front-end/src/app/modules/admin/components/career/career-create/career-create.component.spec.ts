import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCreateComponent } from './career-create.component';

describe('CareerCreateComponent', () => {
  let component: CareerCreateComponent;
  let fixture: ComponentFixture<CareerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
