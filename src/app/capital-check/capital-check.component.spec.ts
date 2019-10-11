import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalCheckComponent } from './capital-check.component';

describe('CapitalCheckComponent', () => {
  let component: CapitalCheckComponent;
  let fixture: ComponentFixture<CapitalCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
