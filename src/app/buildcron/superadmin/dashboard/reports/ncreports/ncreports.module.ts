import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared/shared.module';
import { NcreportsRoutingModule } from './ncreports-routing.module';
import { NcreportsComponent } from './ncreports.component';


@NgModule({
  declarations: [
    NcreportsComponent
  ],
  imports: [
    CommonModule,
    NcreportsRoutingModule,
    SharedModule
  ]
})
export class NcreportsModule { }
