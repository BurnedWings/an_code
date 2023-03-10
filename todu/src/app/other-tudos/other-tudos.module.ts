import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherTudosRoutingModule } from './other-tudos-routing.module';
import { OtherTudosComponent } from './other-tudos.component';


@NgModule({
  declarations: [
    OtherTudosComponent
  ],
  imports: [
    CommonModule,
    OtherTudosRoutingModule
  ]
})
export class OtherTudosModule { }
