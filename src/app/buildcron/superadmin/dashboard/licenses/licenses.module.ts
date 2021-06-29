import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared/shared.module';
import { LicensesRoutingModule } from './licenses-routing.module';
import { LicensesComponent } from './licenses.component';


@NgModule({
  declarations: [
    LicensesComponent
  ],
  imports: [
    CommonModule,
    LicensesRoutingModule,
    SharedModule
  ]
})
export class LicensesModule { }
