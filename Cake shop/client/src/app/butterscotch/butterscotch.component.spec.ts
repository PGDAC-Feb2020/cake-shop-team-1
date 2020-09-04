import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterscotchComponent } from './butterscotch.component';

describe('ButterscotchComponent', () => {
  let component: ButterscotchComponent;
  let fixture: ComponentFixture<ButterscotchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButterscotchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButterscotchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
