import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  template: `
    <div class="flex flex-col text-center">
      <h1 class="text-4xl mb-8">Oop! Page not found!</h1>
      <p class="text-2xl">Sorry, but we can't find this page.</p>
      <p class="text-2xl mb-6">Please go back to the dashboard.</p>
      <a mat-button [routerLink]="['/dashboard']">Back to dashboard</a>
    </div>
  `,
})
export class PageNotFoundComponent {}
