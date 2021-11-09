import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthEffects } from './auth/auth.effects';
import  * as authReduce from './auth/auth.reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(
       authReduce.authFeaturekey,
       authReduce.reducerAuth
    )
  ]
})
export class StoreAppModule { }
