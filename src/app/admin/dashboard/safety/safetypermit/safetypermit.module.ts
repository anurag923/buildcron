import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafetypermitRoutingModule } from './safetypermit-routing.module';
import { SafetypermitComponent } from './safetypermit.component';
import { SharedModule } from '../../../../shared/shared/shared.module';

@NgModule({
  declarations: [
    SafetypermitComponent
  ],
  imports: [
    CommonModule,
    SafetypermitRoutingModule,
    SharedModule
  ]
})
export class SafetypermitModule { }
