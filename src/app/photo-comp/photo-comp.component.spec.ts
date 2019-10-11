import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCompComponent } from './photo-comp.component';

describe('PhotoCompComponent', () => {
  let component: PhotoCompComponent;
  let fixture: ComponentFixture<PhotoCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
