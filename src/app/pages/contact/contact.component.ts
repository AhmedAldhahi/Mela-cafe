import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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
      const name = this.contactForm.value.name;
      const email = this.contactForm.value.email;
      const message = this.contactForm.value.message;

      // Subject & body
      const subject = encodeURIComponent(`Contact Request from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

      // Create mailto link
      const mailtoLink = `mailto:post@melacafe.no?subject=${subject}&body=${body}`;

      // Open user's default mail app with the message
      window.location.href = mailtoLink;

      // Optional: reset form (since we handled sending)
      this.contactForm.reset();
    }
  }
}
