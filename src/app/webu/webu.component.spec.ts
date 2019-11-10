import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebuComponent } from './webu.component';

describe('WebuComponent', () => {
  let component: WebuComponent;
  let fixture: ComponentFixture<WebuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
