import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeedbackService } from '../../../shared/Services/feedback.services';
import { FeedBack } from '../../../shared/Services/models/feedback.model';
import { FeedbackItem } from '../../../shared/feedback-item/feedback-item';

@Component({
  selector: 'app-feed-back-carousel',
  imports: [FeedbackItem],
  templateUrl: './feed-back-carousel.html',
  styleUrl: './feed-back-carousel.scss',
})
export class FeedBackCarousel implements OnInit, OnDestroy {
  FeedBacks: FeedBack[] = [];
  currentIndex: number = 0;
  private autoScrollInterval: any;

  constructor( private FeedbackService: FeedbackService) {
    this.FeedBacks = this.FeedbackService.getFeedbacks();
  }

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.nextFeedback();
    }, 3000); // Auto-scroll every 3 seconds
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  get CurrentFeedbacks(): FeedBack {
      return this.FeedBacks[this.currentIndex];
    }

  previousFeedback() {
    this.stopAutoScroll(); // Stop auto-scroll when user manually navigates
    if(this.currentIndex > 0) {
        this.currentIndex--;
    } else{
        this.currentIndex = this.FeedBacks.length - 1;
    }
    this.startAutoScroll(); // Restart auto-scroll
  }

  nextFeedback() {
    this.stopAutoScroll(); // Stop auto-scroll when user manually navigates
    if(this.currentIndex < this.FeedBacks.length - 1) {
        this.currentIndex++;
    } else{
        this.currentIndex = 0;
    }
    this.startAutoScroll(); // Restart auto-scroll
  }

  get hasPrevious(): boolean {
    return this.FeedBacks.length > 1;
  }
  
  get hasNext(): boolean {
    return this.FeedBacks.length > 1;
  }
}
