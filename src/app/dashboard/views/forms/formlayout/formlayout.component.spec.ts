import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlayoutComponent } from './formlayout.component';

describe('FormlayoutComponent', () => {
  let component: FormlayoutComponent;
  let fixture: ComponentFixture<FormlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
