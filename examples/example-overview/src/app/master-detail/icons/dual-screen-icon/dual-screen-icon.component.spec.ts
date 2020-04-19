import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DualScreenIconComponent } from './dual-screen-icon.component';

describe('DualScreenIconComponent', () => {
  let component: DualScreenIconComponent;
  let fixture: ComponentFixture<DualScreenIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualScreenIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualScreenIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
