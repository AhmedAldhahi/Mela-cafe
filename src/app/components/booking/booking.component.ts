import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  constructor(private http: HttpClient) {}
  successMessage: string = '';
  errorMessage: string = '';

  bookEventForm = new FormGroup({
    emne: new FormControl('', [Validators.required, Validators.minLength(3)]),

    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\+?\d{10,15}$/),
    ]),
    people: new FormControl('', [Validators.required]),
    note: new FormControl(''),
  });

  // Getter methods to access form controls
  get name() {
    return this.bookEventForm.get('name');
  }

  get email() {
    return this.bookEventForm.get('email');
  }

  get phoneNumber() {
    return this.bookEventForm.get('phoneNumber');
  }

  get people() {
    return this.bookEventForm.get('people');
  }

  get emne() {
    return this.bookEventForm.get('emne');
  }
  


  saveData() {
    if (this.bookEventForm.valid) {
      const formData = this.bookEventForm.value;

      this.http
        .post('http://localhost:3000/api/send-booking-email', formData)
        .subscribe({
          next: (response: any) => {
            this.successMessage =
              'Your booking request has been sent successfully!';
            this.errorMessage = '';
            this.bookEventForm.reset();
            setTimeout(() => (this.successMessage = ''), 5000); // Hide after 5 seconds
          },
          error: (error) => {
            console.error('Error sending booking request', error);
            this.errorMessage = 'Something went wrong. Please try again later.';
            this.successMessage = '';

            setTimeout(() => (this.errorMessage = ''), 5000); // Hide after 5 seconds
          },
        });
    }
  }
}
