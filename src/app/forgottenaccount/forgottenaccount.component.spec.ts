import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottenaccountComponent } from './forgottenaccount.component';

describe('ForgottenaccountComponent', () => {
  let component: ForgottenaccountComponent;
  let fixture: ComponentFixture<ForgottenaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgottenaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgottenaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
