import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: any[] = [];
  loading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getEvents().subscribe({
      next: (data) => {
        this.events = data.map(event => ({
          ...event,
          day: new Date(event.eventDate).getDate().toString().padStart(2, '0'),
          month: new Date(event.eventDate).toLocaleString('en', { month: 'short' }).toUpperCase(),
          time: event.eventTime ? event.eventTime.substring(0, 5) + (parseInt(event.eventTime) >= 12 ? ' PM' : ' AM') : ''
        }));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        // Fallback static data
        this.events = [
          { day: '22', month: 'JUN', time: '7:00 PM', location: 'Online (Zoom)', title: 'Free Webinar: How to Crack Product-Based Company Interviews', description: 'Learn strategies top candidates use to clear interviews at Google, Amazon, Microsoft.' },
          { day: '28', month: 'JUN', time: '6:00 PM', location: 'Online (Zoom)', title: 'Resume Roast - Get Your Resume Reviewed Live', description: 'Submit your resume and get live feedback from HR experts. Limited seats!' }
        ];
      }
    });
  }
}
