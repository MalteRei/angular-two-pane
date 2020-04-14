import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDetailIconComponent } from './master-detail-icon.component';

describe('MasterDetailIconComponent', () => {
  let component: MasterDetailIconComponent;
  let fixture: ComponentFixture<MasterDetailIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDetailIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDetailIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
