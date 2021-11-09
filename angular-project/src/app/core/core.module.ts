import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreAppModule } from '@storeApp/store-app.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreAppModule
  ]
})
export class CoreModule { }
