import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDetailsMapPageRoutingModule } from './event-details-map-routing.module';

import { EventDetailsMapPage } from './event-details-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailsMapPageRoutingModule
  ],
  declarations: [EventDetailsMapPage]
})
export class EventDetailsMapPageModule {}
