import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-hero></app-hero>
    <app-stats></app-stats>
    <app-services></app-services>
    <app-testimonials></app-testimonials>
    <app-pricing></app-pricing>
    <app-events></app-events>
    <app-newsletter></app-newsletter>
  `
})
export class HomeComponent { }
