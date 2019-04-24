import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerMainComponent } from './career-main.component';

describe('CareerMainComponent', () => {
  let component: CareerMainComponent;
  let fixture: ComponentFixture<CareerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
