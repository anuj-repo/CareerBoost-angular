import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  message = '';
  success = false;
  loading = false;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.loading = true;
    this.apiService.submitContact(this.contactForm.value).subscribe({
      next: (res) => {
        this.message = res.message;
        this.success = true;
        this.loading = false;
        this.contactForm.reset();
      },
      error: (err) => {
        this.message = err.error?.message || 'Something went wrong. Please try again.';
        this.success = false;
        this.loading = false;
      }
    });
  }
}
