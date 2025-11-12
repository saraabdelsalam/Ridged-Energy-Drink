import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavBar } from "./shared/nav-bar/nav-bar";
import { Footer } from "./shared/Footer/footer/footer";
import { LandingPage } from "./modules/landing-page/landing-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, NavBar, Footer, LandingPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Ridged-Energy-Drink';
date: any;
}
