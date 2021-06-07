import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';
import { MaterialsComponent } from './materials.component';
import { SharedModule } from '../../../shared/shared/shared.module';

@NgModule({
  declarations: [
    MaterialsComponent
  ],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    SharedModule
  ]
})
export class MaterialsModule { }
