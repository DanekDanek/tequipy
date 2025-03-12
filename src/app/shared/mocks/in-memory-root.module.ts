import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';

@NgModule({
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      //   passThruUnknownUrl: true,
      delay: 500,
    }),
  ],
})
export class InMemoryRootModule {}
