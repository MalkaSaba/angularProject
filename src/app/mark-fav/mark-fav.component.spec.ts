import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkFavComponent } from './mark-fav.component';

describe('MarkFavComponent', () => {
  let component: MarkFavComponent;
  let fixture: ComponentFixture<MarkFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
