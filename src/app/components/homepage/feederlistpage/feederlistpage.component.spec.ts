import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeederlistpageComponent } from './feederlistpage.component';

describe('FeederlistpageComponent', () => {
  let component: FeederlistpageComponent;
  let fixture: ComponentFixture<FeederlistpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeederlistpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeederlistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
