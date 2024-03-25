import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutfeederComponent } from './aboutfeeder.component';

describe('AboutfeederComponent', () => {
  let component: AboutfeederComponent;
  let fixture: ComponentFixture<AboutfeederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutfeederComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutfeederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
