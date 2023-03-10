import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTudosRoutingModule } from './my-tudos-routing.module';
import { MyTudosComponent } from './my-tudos.component';
import { TudoComponent } from '../component/tudo/tudo.component';


@NgModule({
  declarations: [
    MyTudosComponent,
  ],
  imports: [
    CommonModule,
    MyTudosRoutingModule
  ]
})
export class MyTudosModule { }
