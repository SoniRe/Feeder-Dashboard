import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergychartsComponent } from './energycharts.component';

describe('EnergychartsComponent', () => {
  let component: EnergychartsComponent;
  let fixture: ComponentFixture<EnergychartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergychartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnergychartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
