import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdavComponent } from './adav.component';

describe('AdavComponent', () => {
  let component: AdavComponent;
  let fixture: ComponentFixture<AdavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
