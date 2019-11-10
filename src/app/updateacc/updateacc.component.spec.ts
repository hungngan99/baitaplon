import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaccComponent } from './updateacc.component';

describe('UpdateaccComponent', () => {
  let component: UpdateaccComponent;
  let fixture: ComponentFixture<UpdateaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
