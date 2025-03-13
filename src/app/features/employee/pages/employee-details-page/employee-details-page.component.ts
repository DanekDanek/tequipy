import { Component, inject, OnInit } from '@angular/core';
import { EmployeeDetailsComponent } from '../../components/employee-details/employee-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Employee } from '../../../../shared';
import { OffboardingDialogComponent } from '../../../offboarding/components/offboarding-dialog/offboarding-dialog.component';
import { EmployeesStoreService } from '../../../dashboard/services/employees-store.service';
import { UsersService } from '../../../offboarding/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-details-page',
  imports: [
    EmployeeDetailsComponent,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './employee-details-page.component.html',
})
export class EmployeeDetailsPageComponent implements OnInit {
  route = inject(ActivatedRoute);
  employeesStoreService = inject(EmployeesStoreService);
  usersService = inject(UsersService);
  employee: Employee | null = null;
  dialog = inject(MatDialog);

  private _snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.employee = this.route.snapshot.data['employee'];

    this.employeesStoreService.employees$.subscribe((employees) => {
      this.employee = employees.filter((employee) => employee.id === this.employee?.id)[0];
    });
  }

  onOpenDialog() {
    const dialogRef = this.dialog.open(OffboardingDialogComponent, {
      width: '600px',
      data: {
        employee: this.employee,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.offboarded && this.employee) {
        this.employeesStoreService.offboardEmployee(this.employee.id);
        this.usersService.offboardUser(result.data, this.employee.id);
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this._snackBar.open('Status has been changed to OFFBOARDED', 'Close', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 2000,
    });
  }
}
