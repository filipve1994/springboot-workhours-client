import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Barchart2Component } from './barchart2.component';

describe('Barchart2Component', () => {
  let component: Barchart2Component;
  let fixture: ComponentFixture<Barchart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Barchart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Barchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
