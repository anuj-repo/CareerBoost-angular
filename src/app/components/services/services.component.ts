import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services = [
    { icon: 'fas fa-laptop-code', title: 'Technical Training', description: 'Learn full-stack development, DSA, system design from industry experts with hands-on projects.' },
    { icon: 'fas fa-file-alt', title: 'Resume Building', description: 'Get ATS-friendly resumes crafted by HR professionals that actually get shortlisted.' },
    { icon: 'fas fa-comments', title: 'Mock Interviews', description: 'Practice with real interviewers from top companies. Get feedback and improve your confidence.' },
    { icon: 'fas fa-handshake', title: 'Interview Support', description: 'We guide you through the entire interview process — from prep to negotiation.' },
    { icon: 'fas fa-project-diagram', title: 'Live Projects', description: 'Work on real-world projects to build your portfolio and stand out from other candidates.' },
    { icon: 'fas fa-user-tie', title: 'Placement Assistance', description: 'Direct referrals and connections with 200+ hiring partners across the industry.' }
  ];

  courses: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: () => {
        // Keep using static services if API fails
      }
    });
  }
}
