import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbavComponent } from './dbav.component';

describe('DbavComponent', () => {
  let component: DbavComponent;
  let fixture: ComponentFixture<DbavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
