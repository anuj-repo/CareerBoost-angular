import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  stats = [
    { icon: 'fas fa-laptop-code', count: '8000', label: 'Online Courses' },
    { icon: 'fas fa-chalkboard-teacher', count: '2700', label: 'Expert Instructors' },
    { icon: 'fas fa-tv', count: 'Unlimited', label: 'Course Access' },
    { icon: 'fas fa-globe', count: 'Learn', label: 'From Anywhere' }
  ];
}
