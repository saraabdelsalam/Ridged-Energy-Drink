import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Input } from '@angular/core';
import { FeedbackService } from '../Services/feedback.services';
import { FeedBack } from '../Services/models/feedback.model';
import { AvatarModule, Avatar } from 'primeng/avatar';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms'; // ✅ ADD THIS
@Component({
  selector: 'app-feedback-item',
  imports: [CardModule, Avatar, RatingModule, FormsModule],
  templateUrl: './feedback-item.html',
  styleUrl: './feedback-item.scss',
})
export class FeedbackItem {
  constructor(
    private FeedbackService: FeedbackService
  ) {}
  @Input()feedback!: FeedBack;
}
