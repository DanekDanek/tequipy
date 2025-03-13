import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Employee } from '../../../../shared';
import { OffboardingFormComponent } from '../offboarding-form/offboarding-form.component';

@Component({
  selector: 'app-offboarding-dialog',
  imports: [MatDialogModule, MatButtonModule, OffboardingFormComponent],
  templateUrl: './offboarding-dialog.component.html',
})
export class OffboardingDialogComponent {
  data = inject<{ employee: Employee }>(MAT_DIALOG_DATA);

  constructor(public dialogRef: MatDialogRef<OffboardingDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
