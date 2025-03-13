import { Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutComponent } from '@shared/layout.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    LayoutComponent,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './dashboard-page.component.html',
  styles: `
    .stretched-tabs {
      max-width: 200px;
    }
  `,
})
export class DashboardPageComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  protected searchPhrase = '';

  onFilterChange() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: this.searchPhrase },
    });
  }
}
