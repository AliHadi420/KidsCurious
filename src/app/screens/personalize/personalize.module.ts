import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizePageRoutingModule } from './personalize-routing.module';

import { PersonalizePage } from './personalize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizePageRoutingModule
  ],
  declarations: [PersonalizePage]
})
export class PersonalizePageModule {}
