import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbasiclayoutComponent } from './formbasiclayout.component';

describe('FormbasiclayoutComponent', () => {
  let component: FormbasiclayoutComponent;
  let fixture: ComponentFixture<FormbasiclayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormbasiclayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbasiclayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
