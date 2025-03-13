import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  host: {
    class: 'w-full shrink-0 shadow',
  },
  template: `
    <mat-toolbar>
      <span class="text-xl font-bold">Home task</span>
    </mat-toolbar>
  `,
  imports: [MatToolbarModule],
})
export class HeaderComponent {}
