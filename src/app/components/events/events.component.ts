import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events = [
    {
      day: '22',
      month: 'JUN',
      time: '7:00 PM',
      location: 'Online (Zoom)',
      title: 'Free Webinar: How to Crack Product-Based Company Interviews',
      description: 'Learn the exact strategies top candidates use to clear interviews at companies like Google, Amazon, and Microsoft.'
    },
    {
      day: '28',
      month: 'JUN',
      time: '6:00 PM',
      location: 'Online (Zoom)',
      title: 'Resume Roast — Get Your Resume Reviewed Live',
      description: 'Submit your resume and get live feedback from our HR experts. Limited seats available!'
    },
    {
      day: '05',
      month: 'JUL',
      time: '8:00 PM',
      location: 'Online (Zoom)',
      title: 'Mock Interview Marathon — Practice with Real Interviewers',
      description: 'A full day event where you get to practice back-to-back interviews with industry professionals.'
    }
  ];
}
