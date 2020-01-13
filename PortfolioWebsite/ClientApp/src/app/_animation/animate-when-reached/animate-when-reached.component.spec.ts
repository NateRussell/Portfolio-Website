import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateWhenReachedComponent } from './animate-when-reached.component';

describe('AnimateWhenReachedComponent', () => {
  let component: AnimateWhenReachedComponent;
  let fixture: ComponentFixture<AnimateWhenReachedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateWhenReachedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateWhenReachedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
