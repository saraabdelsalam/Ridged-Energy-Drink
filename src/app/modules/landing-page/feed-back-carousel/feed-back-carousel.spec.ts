import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackCarousel } from './feed-back-carousel';

describe('FeedBackCarousel', () => {
  let component: FeedBackCarousel;
  let fixture: ComponentFixture<FeedBackCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedBackCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedBackCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
