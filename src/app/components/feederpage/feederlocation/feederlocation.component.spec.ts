import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeederlocationComponent } from './feederlocation.component';

describe('FeederlocationComponent', () => {
  let component: FeederlocationComponent;
  let fixture: ComponentFixture<FeederlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeederlocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeederlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
