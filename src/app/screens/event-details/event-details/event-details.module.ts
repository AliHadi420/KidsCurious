import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDetailsPageRoutingModule } from './event-details-routing.module';

import { EventDetailsPage } from './event-details.page';
import { EventDetailsAboutPage } from '../event-details-about/event-details-about.page';
import { EventDetailsMapPage } from '../event-details-map/event-details-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailsPageRoutingModule
  ],
  declarations: [EventDetailsPage, EventDetailsAboutPage, EventDetailsMapPage]
})
export class EventDetailsPageModule {}
