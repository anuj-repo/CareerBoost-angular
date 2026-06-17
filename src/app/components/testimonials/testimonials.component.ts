import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Frontend Developer at Infosys',
      text: 'I was jobless for 8 months after graduation. CareerBoost trained me in React and helped me crack my first interview. Forever grateful!',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Backend Developer at TCS',
      text: 'The mock interviews were a game changer. They identified my weak points and helped me improve. Got placed within 2 months of joining.',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      role: 'Full Stack Developer at Wipro',
      text: 'The live projects and resume building service made my profile stand out. Received 3 offers within a month!',
      rating: 5
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
