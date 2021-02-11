import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambolaLibComponent } from './tambola-lib.component';

describe('TambolaLibComponent', () => {
  let component: TambolaLibComponent;
  let fixture: ComponentFixture<TambolaLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambolaLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambolaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
