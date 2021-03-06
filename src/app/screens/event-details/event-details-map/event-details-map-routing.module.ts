import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventDetailsMapPage } from './event-details-map.page';

const routes: Routes = [
  {
    path: '',
    component: EventDetailsMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventDetailsMapPageRoutingModule {}
