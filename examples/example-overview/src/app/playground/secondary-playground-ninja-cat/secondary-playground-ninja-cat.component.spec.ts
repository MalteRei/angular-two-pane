import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryPlaygroundNinjaCatComponent } from './secondary-playground-ninja-cat.component';

describe('SecondaryPlaygroundNinjaCatComponent', () => {
  let component: SecondaryPlaygroundNinjaCatComponent;
  let fixture: ComponentFixture<SecondaryPlaygroundNinjaCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryPlaygroundNinjaCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryPlaygroundNinjaCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
