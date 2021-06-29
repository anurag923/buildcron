import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared/shared.module';
import { SiteinstructionreportsRoutingModule } from './siteinstructionreports-routing.module';
import { SiteinstructionreportsComponent } from './siteinstructionreports.component';


@NgModule({
  declarations: [
    SiteinstructionreportsComponent
  ],
  imports: [
    CommonModule,
    SiteinstructionreportsRoutingModule,
    SharedModule
  ]
})
export class SiteinstructionreportsModule { }
