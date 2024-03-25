import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedertableComponent } from './feedertable.component';

describe('FeedertableComponent', () => {
  let component: FeedertableComponent;
  let fixture: ComponentFixture<FeedertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedertableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
