import { Component, viewChild } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OffboardingFormComponent } from '../offboarding-form/offboarding-form.component';

@Component({
  selector: 'app-offboarding-dialog',
  imports: [MatDialogModule, MatButtonModule, OffboardingFormComponent],
  templateUrl: './offboarding-dialog.component.html',
})
export class OffboardingDialogComponent {
  private offboardingForm = viewChild(OffboardingFormComponent);

  constructor(private dialogRef: MatDialogRef<OffboardingDialogComponent>) {}

  onConfirm() {
    const formValue = this.offboardingForm()?.getValue();

    if (this.offboardingForm()?.offboardingForm.valid) {
      this.dialogRef.close({
        offboarded: true,
        data: formValue,
      });
    } else {
      this.offboardingForm()?.offboardingForm.markAllAsTouched();
    }
  }
}
