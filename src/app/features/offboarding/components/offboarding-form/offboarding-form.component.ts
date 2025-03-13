import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-offboarding-form',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './offboarding-form.component.html',
})
export class OffboardingFormComponent {
  private fb = inject(FormBuilder);

  offboardingForm: FormGroup = this.fb.group({
    receiver: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    streetLine: ['', [Validators.required]],
    city: ['', [Validators.required]],
    postalCode: ['', [Validators.required]],
    country: ['', [Validators.required]],
    notes: [''],
  });

  getValue() {
    return this.offboardingForm.value;
  }
}
