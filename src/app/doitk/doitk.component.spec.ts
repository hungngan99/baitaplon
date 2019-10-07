import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoitkComponent } from './doitk.component';

describe('DoitkComponent', () => {
  let component: DoitkComponent;
  let fixture: ComponentFixture<DoitkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoitkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoitkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
