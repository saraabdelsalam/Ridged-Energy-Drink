import { Component } from '@angular/core';
import { FeedbackService } from '../../../shared/Services/feedback.services';
import { FeedBack } from '../../../shared/Services/models/feedback.model';
import { FeedbackItem } from '../../../shared/feedback-item/feedback-item';

@Component({
  selector: 'app-feed-back-carousel',
  imports: [FeedbackItem],
  templateUrl: './feed-back-carousel.html',
  styleUrl: './feed-back-carousel.scss',
})
export class FeedBackCarousel {
  FeedBacks: FeedBack[] = [];
  currentIndex: number = 0;

  constructor( private FeedbackService: FeedbackService) {
    this.FeedBacks = this.FeedbackService.getFeedbacks();
  }

  get CurrentFeedbacks(): FeedBack {
      return this.FeedBacks[this.currentIndex];
    }

  previousFeedback() {
    if(this.currentIndex > 0) {
        this.currentIndex--;
    } else{
        this.currentIndex = this.FeedBacks.length - 1;
    }
  }

  nextFeedback() {
    if(this.currentIndex < this.FeedBacks.length - 1) {
        this.currentIndex++;
    } else{
        this.currentIndex = 0;
    }
  }

  get hasPrevious(): boolean {
    return this.FeedBacks.length > 1;
  }
  
  get hasNext(): boolean {
    return this.FeedBacks.length > 1;
  }
}
