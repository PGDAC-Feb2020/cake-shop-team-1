import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavComponent } from './flav.component';

describe('FlavComponent', () => {
  let component: FlavComponent;
  let fixture: ComponentFixture<FlavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
