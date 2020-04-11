import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuoPaneComponent } from './duo-pane.component';

describe('DuoPaneComponent', () => {
  let component: DuoPaneComponent;
  let fixture: ComponentFixture<DuoPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuoPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuoPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
