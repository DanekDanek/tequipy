import { Component, inject, OnInit } from '@angular/core';
import { EmployeeDetailsComponent } from '../../components/employee-details/employee-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Employee } from '../../../../shared';

@Component({
  selector: 'app-employee-details-page',
  imports: [EmployeeDetailsComponent, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './employee-details-page.component.html',
})
export class EmployeeDetailsPageComponent implements OnInit {
  route = inject(ActivatedRoute);
  employee: Employee | null = null;

  ngOnInit(): void {
    this.employee = this.route.snapshot.data['employee'];
  }
}
