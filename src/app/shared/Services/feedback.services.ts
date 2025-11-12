import { Injectable } from '@angular/core';
import { FeedBack } from './models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

public feedbacks: FeedBack[] = [
    {
        id: 1,
        userName: 'Theo James',
        userPosition: 'Actor',
        userFeedback: 'Great Energy Drink, Loved it!',
        userImage: 'assets/images/feedback/Theo_James_2024.png'
    },
    {
        id: 2,
        userName: 'Micheal B. Jordan',
        userPosition: 'Athlete',
        userFeedback: 'Gives you the energy boost you need!',
        userImage: 'assets/images/feedback/video-frame-2593.jpg'
    },
    {
        id: 3,
        userName: 'Emily Johnson',
        userPosition: 'UX Designer',
        userFeedback: 'Fantastic taste and keeps me going throughout the day.',
        userImage: 'assets/images/feedback/bellahadidlattenails-56c52c7e96fc4264b8a7ca3018ab8951.webp'
    }
];  
getFeedbacks(): FeedBack[] {
    return this.feedbacks; 
}
}