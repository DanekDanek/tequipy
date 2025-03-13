import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '@shared/in-memory-data.service';

@NgModule({
  imports: [HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)],
})
export class InMemoryRootModule {}
