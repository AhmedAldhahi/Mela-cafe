import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {}


  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      this.http.post('http://localhost:3000/api/send-contact-email', formData)
        .subscribe({
          next: () => {
            this.successMessage = 'Your message has been sent successfully!';
            this.errorMessage = '';
            this.contactForm.reset();
            setTimeout(() => this.successMessage = '', 5000);
          },
          error: (error) => {
            console.error('Error sending contact form:', error);
            this.errorMessage = 'Something went wrong. Please try again later.';
            this.successMessage = '';
            setTimeout(() => this.errorMessage = '', 5000);
          }
        });
    }
  }
}
