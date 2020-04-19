import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPageIconComponent } from './two-page-icon.component';

describe('TwoPageIconComponent', () => {
  let component: TwoPageIconComponent;
  let fixture: ComponentFixture<TwoPageIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPageIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPageIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
