import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccComponent } from './createacc.component';

describe('CreateaccComponent', () => {
  let component: CreateaccComponent;
  let fixture: ComponentFixture<CreateaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
