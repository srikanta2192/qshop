import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubUserComponent } from './create-sub-user.component';

describe('CreateSubUserComponent', () => {
  let component: CreateSubUserComponent;
  let fixture: ComponentFixture<CreateSubUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
