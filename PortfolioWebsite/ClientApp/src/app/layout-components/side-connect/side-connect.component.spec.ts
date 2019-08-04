import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideConnectComponent } from './side-connect.component';

describe('SideConnectComponent', () => {
  let component: SideConnectComponent;
  let fixture: ComponentFixture<SideConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
