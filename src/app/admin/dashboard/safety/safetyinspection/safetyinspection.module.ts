import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafetyinspectionRoutingModule } from './safetyinspection-routing.module';
import { SafetyinspectionComponent } from './safetyinspection.component';
import { SharedModule } from '../../../../shared/shared/shared.module';

@NgModule({
  declarations: [
    SafetyinspectionComponent
  ],
  imports: [
    CommonModule,
    SafetyinspectionRoutingModule,
    SharedModule
  ]
})
export class SafetyinspectionModule { }
