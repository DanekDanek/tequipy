import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: ` <div class="mx-auto w-full max-w-screen-xl px-4 py-8"><ng-content /></div> `,
})
export class LayoutComponent {}
