import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  host: {
    class: 'w-full shrink-0 shadow',
  },
  imports: [MatToolbarModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  date = new Date();
  currentYear = signal(this.date.getFullYear());
}
