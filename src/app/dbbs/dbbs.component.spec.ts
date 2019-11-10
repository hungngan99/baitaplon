import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbbsComponent } from './dbbs.component';

describe('DbbsComponent', () => {
  let component: DbbsComponent;
  let fixture: ComponentFixture<DbbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
