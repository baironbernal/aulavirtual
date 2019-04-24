import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterMainComponent } from './matter-main.component';

describe('MatterMainComponent', () => {
  let component: MatterMainComponent;
  let fixture: ComponentFixture<MatterMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatterMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
