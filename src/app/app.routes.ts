import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { RegisterComponent } from './modules/Auth/register/register';
import { Login } from './modules/Auth/login/login';
import { LandingPage } from './modules/landing-page/landing-page';
import { VerifyAccount } from './modules/Auth/verify-account/verify-account';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'register', component: RegisterComponent },
    { path: 'verify-account', component: VerifyAccount },
    { path: 'login', component: Login },
];
