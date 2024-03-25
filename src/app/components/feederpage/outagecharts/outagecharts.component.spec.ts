import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutagechartsComponent } from './outagecharts.component';

describe('OutagechartsComponent', () => {
  let component: OutagechartsComponent;
  let fixture: ComponentFixture<OutagechartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutagechartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutagechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
