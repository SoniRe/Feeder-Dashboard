import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeederpageComponent } from './feederpage.component';

describe('FeederpageComponent', () => {
  let component: FeederpageComponent;
  let fixture: ComponentFixture<FeederpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeederpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeederpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
