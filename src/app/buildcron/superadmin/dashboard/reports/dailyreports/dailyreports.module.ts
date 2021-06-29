import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared/shared.module';
import { DailyreportsRoutingModule } from './dailyreports-routing.module';
import { DailyreportsComponent } from './dailyreports.component';


@NgModule({
  declarations: [
    DailyreportsComponent
  ],
  imports: [
    CommonModule,
    DailyreportsRoutingModule,
    SharedModule
  ]
})
export class DailyreportsModule { }
