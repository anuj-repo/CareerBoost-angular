import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  // Courses
  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/courses/list`);
  }

  getCourseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/courses/${id}`);
  }

  // Events
  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/events/list`);
  }

  // Testimonials
  getTestimonials(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/testimonials/list`);
  }

  // Newsletter
  subscribe(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/newsletter/subscribe`, { email });
  }

  // Contact
  submitContact(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/contact/submit`, data);
  }

  // Auth
  signup(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/signup`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, data);
  }
}
