import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigimonRoutingModule } from './digimon-routing.module';
import { DigimonComponent } from './digimon.component';


@NgModule({
  declarations: [
    DigimonComponent
  ],
  imports: [
    CommonModule,
    DigimonRoutingModule
  ]
})
export class DigimonModule { }
