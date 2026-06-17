import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  email = '';
  message = '';
  success = false;
  loading = false;

  constructor(private apiService: ApiService) { }

  subscribe() {
    if (!this.email) return;
    this.loading = true;
    this.apiService.subscribe(this.email).subscribe({
      next: (res) => {
        this.message = res.message;
        this.success = true;
        this.loading = false;
        this.email = '';
      },
      error: (err) => {
        this.message = err.error?.message || 'Something went wrong. Please try again.';
        this.success = false;
        this.loading = false;
      }
    });
  }
}
