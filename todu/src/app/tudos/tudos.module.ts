import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TudosRoutingModule } from './tudos-routing.module';
import { TudosComponent } from './tudos.component';
import { TudoComponent } from '../component/tudo/tudo.component';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    TudosComponent,
    TudoComponent
  ],
  imports: [
    CommonModule,
    TudosRoutingModule,
    NzTableModule
  ]
})
export class TudosModule { }
