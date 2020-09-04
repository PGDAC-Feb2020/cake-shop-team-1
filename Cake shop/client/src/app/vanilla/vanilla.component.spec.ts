import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanillaComponent } from './vanilla.component';

describe('VanillaComponent', () => {
  let component: VanillaComponent;
  let fixture: ComponentFixture<VanillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
