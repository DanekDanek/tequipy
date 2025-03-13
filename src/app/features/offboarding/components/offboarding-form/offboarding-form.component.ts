import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-offboarding-form',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './offboarding-form.component.html',
})
export class OffboardingFormComponent {}
