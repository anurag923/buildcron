import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../../../shared/shared/shared.module';
import { LibrarylistRoutingModule } from './librarylist-routing.module';
import { LibrarylistComponent } from './librarylist.component';

@NgModule({
  declarations: [
    LibrarylistComponent
  ],
  imports: [
    CommonModule,
    LibrarylistRoutingModule,
    SharedModule
  ]
})
export class LibrarylistModule { }
