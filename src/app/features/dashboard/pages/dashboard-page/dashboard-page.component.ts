import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutComponent } from '../../../../shared';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  imports: [LayoutComponent, MatTabsModule, RouterModule],
  templateUrl: './dashboard-page.component.html',
  styles: `
    .stretched-tabs {
      max-width: 200px;
    }
  `,
})
export class DashboardPageComponent {}
