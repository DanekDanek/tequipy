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

  readonly dialog = inject(MatDialog);

  ngOnInit(): void {
    this.employee = this.route.snapshot.data['employee'];
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
      }
    });
  }
}
