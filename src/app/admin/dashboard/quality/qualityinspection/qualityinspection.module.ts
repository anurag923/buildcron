import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityinspectionRoutingModule } from './qualityinspection-routing.module';
import { QualityinspectionComponent } from './qualityinspection.component';
import { SharedModule } from '../../../../shared/shared/shared.module';

@NgModule({
  declarations: [
    QualityinspectionComponent
  ],
  imports: [
    CommonModule,
    QualityinspectionRoutingModule,
    SharedModule
  ]
})
export class QualityinspectionModule { }
