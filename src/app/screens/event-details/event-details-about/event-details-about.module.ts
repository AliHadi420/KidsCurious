import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDetailsAboutPageRoutingModule } from './event-details-about-routing.module';

import { EventDetailsAboutPage } from './event-details-about.page';
import { EventDetailsMapPage } from '../event-details-map/event-details-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailsAboutPageRoutingModule
  ],
  declarations: [EventDetailsAboutPage,EventDetailsMapPage]
})
export class EventDetailsAboutPageModule {}
