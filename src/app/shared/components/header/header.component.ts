import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  host: {
    class: 'w-full shrink-0',
  },
  imports: [MatToolbarModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
