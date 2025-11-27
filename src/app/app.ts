import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavBar } from "./shared/nav-bar/nav-bar";
import { Footer } from "./shared/Footer/footer/footer";
import { LandingPage } from "./modules/landing-page/landing-page";
import { ToastNotification } from "./shared/toast-notification/toast-notification";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, ButtonModule, NavBar, Footer, LandingPage, ToastNotification],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'Ridged-Energy-Drink';
  date: any;
}
