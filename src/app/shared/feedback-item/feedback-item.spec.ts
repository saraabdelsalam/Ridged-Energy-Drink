import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackItem } from './feedback-item';

describe('FeedbackItem', () => {
  let component: FeedbackItem;
  let fixture: ComponentFixture<FeedbackItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
