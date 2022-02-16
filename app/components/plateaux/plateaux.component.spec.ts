import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateauxComponent } from './plateaux.component';

describe('PlateauxComponent', () => {
  let component: PlateauxComponent;
  let fixture: ComponentFixture<PlateauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlateauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
