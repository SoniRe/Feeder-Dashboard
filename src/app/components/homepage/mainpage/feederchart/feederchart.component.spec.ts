import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeederchartComponent } from './feederchart.component';

describe('FeederchartComponent', () => {
  let component: FeederchartComponent;
  let fixture: ComponentFixture<FeederchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeederchartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeederchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
