import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionlistComponent } from './questionlist.component';

const routes: Routes = [{ path: '', component: QuestionlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionlistRoutingModule { }
