import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  email = '';

  subscribe() {
    if (this.email) {
      alert('Thanks for subscribing! We will keep you updated.');
      this.email = '';
    }
  }
}
