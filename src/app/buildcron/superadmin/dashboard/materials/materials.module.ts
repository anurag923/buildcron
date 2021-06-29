import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared/shared.module';
import { MaterialsRoutingModule } from './materials-routing.module';
import { MaterialsComponent } from './materials.component';


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
