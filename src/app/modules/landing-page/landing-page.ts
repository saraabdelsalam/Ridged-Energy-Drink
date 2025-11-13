import { Component } from '@angular/core';
import { HeroSection } from "./hero-section/hero-section";
import { FeedBackCarousel } from "./feed-back-carousel/feed-back-carousel";
import { Products } from "./products/products";
import { AboutUsComponent } from "./about-us/about-us";

@Component({
  selector: 'app-landing-page',
  imports: [HeroSection, FeedBackCarousel, Products, AboutUsComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

}
