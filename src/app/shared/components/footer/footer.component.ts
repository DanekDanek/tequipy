import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  host: {
    class: 'w-full shrink-0',
  },
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  date = new Date();
  currentYear = signal(this.date.getFullYear());
}
