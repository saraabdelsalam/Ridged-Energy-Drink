import { Component } from '@angular/core';
import { HeroSection } from "./hero-section/hero-section";
import { FeedBackCarousel } from "./feed-back-carousel/feed-back-carousel";
import { Products } from "./products/products";
import { AboutUsComponent } from "./about-us/about-us";
import { NavBar } from "../../shared/nav-bar/nav-bar";
import { Footer } from "../../shared/Footer/footer/footer";

@Component({
  selector: 'app-landing-page',
  imports: [HeroSection, FeedBackCarousel, Products, AboutUsComponent, NavBar, Footer],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

}
