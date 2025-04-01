import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {

  bookEventForm = new FormGroup({
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

  saveData(){
    console.log("saved!!");
    
  }
  
  
}
