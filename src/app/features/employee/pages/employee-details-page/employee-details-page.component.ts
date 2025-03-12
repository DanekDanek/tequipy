import { Component } from '@angular/core';
import { EmployeeDetailsComponent } from '../../components/employee-details/employee-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-details-page',
  imports: [EmployeeDetailsComponent, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './employee-details-page.component.html',
})
export class EmployeeDetailsPageComponent {}
