import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: {
    class: 'flex flex-col min-h-screen bg-gray-100',
  },
  imports: [RouterModule, HeaderComponent, FooterComponent],
})
export class AppComponent {}
