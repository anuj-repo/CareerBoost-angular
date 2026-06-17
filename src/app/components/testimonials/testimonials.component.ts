import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials: any[] = [];
  loading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTestimonials().subscribe({
      next: (data) => {
        this.testimonials = data.map(t => ({
          name: t.name,
          role: `${t.role} at ${t.company}`,
          text: t.message,
          rating: t.rating
        }));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        // Fallback static data
        this.testimonials = [
          { name: 'Rahul Sharma', role: 'Frontend Developer at Infosys', text: 'CareerBoost trained me in React and helped me crack my first interview.', rating: 5 },
          { name: 'Priya Patel', role: 'Backend Developer at TCS', text: 'The mock interviews were a game changer. Got placed within 2 months.', rating: 5 },
          { name: 'Amit Kumar', role: 'Full Stack Developer at Wipro', text: 'Live projects and resume building made my profile stand out.', rating: 5 }
        ];
      }
    });
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
