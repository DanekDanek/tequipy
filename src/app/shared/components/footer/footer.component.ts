import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  host: {
    class: 'w-full shrink-0 shadow',
  },
  template: `
    <footer>
      <mat-toolbar>
        <p class="w-full flex justify-center align-center text-sm">
          &copy; {{ currentYear() }} All rights reserved
        </p>
      </mat-toolbar>
    </footer>
  `,
  imports: [MatToolbarModule],
})
export class FooterComponent {
  private date = new Date();
  protected currentYear = signal(this.date.getFullYear());
}
