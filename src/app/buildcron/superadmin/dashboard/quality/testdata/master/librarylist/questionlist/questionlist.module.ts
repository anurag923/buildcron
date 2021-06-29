import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../../../../shared/shared/shared.module';
import { QuestionlistRoutingModule } from './questionlist-routing.module';
import { QuestionlistComponent } from './questionlist.component';


@NgModule({
  declarations: [
    QuestionlistComponent
  ],
  imports: [
    CommonModule,
    QuestionlistRoutingModule,
    SharedModule
  ]
})
export class QuestionlistModule { }
