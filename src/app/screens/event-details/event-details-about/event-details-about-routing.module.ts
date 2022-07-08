import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventDetailsAboutPage } from './event-details-about.page';

const routes: Routes = [
  {
    path: '',
    component: EventDetailsAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventDetailsAboutPageRoutingModule {}
