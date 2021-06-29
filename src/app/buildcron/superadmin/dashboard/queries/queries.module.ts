import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared/shared.module';
import { QueriesRoutingModule } from './queries-routing.module';
import { QueriesComponent } from './queries.component';


@NgModule({
  declarations: [
    QueriesComponent
  ],
  imports: [
    CommonModule,
    QueriesRoutingModule,
    SharedModule
  ]
})
export class QueriesModule { }
