import { Component } from '@angular/core';
import { HeroSection } from "./hero-section/hero-section";
import { FeedBackCarousel } from "./feed-back-carousel/feed-back-carousel";

@Component({
  selector: 'app-landing-page',
  imports: [HeroSection, FeedBackCarousel],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

}
