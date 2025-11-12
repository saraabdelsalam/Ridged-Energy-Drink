import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Input } from '@angular/core';
import { FeedbackService } from '../Services/feedback.services';
import { FeedBack } from '../Services/models/feedback.model';
import { AvatarModule, Avatar } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
@Component({
  selector: 'app-feedback-item',
  imports: [CardModule, Avatar],
  templateUrl: './feedback-item.html',
  styleUrl: './feedback-item.scss',
})
export class FeedbackItem {
  constructor(
    private FeedbackService: FeedbackService
  ) {}
  @Input()feedback!: FeedBack;
}
