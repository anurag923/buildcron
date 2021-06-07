import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualitytestingRoutingModule } from './qualitytesting-routing.module';
import { QualitytestingComponent } from './qualitytesting.component';
import { SharedModule } from '../../../../shared/shared/shared.module';

@NgModule({
  declarations: [
    QualitytestingComponent
  ],
  imports: [
    CommonModule,
    QualitytestingRoutingModule,
    SharedModule
  ]
})
export class QualitytestingModule { }
