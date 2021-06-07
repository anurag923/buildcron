import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QualitytestingComponent } from './qualitytesting.component';

const routes: Routes = [{ path: '', component: QualitytestingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualitytestingRoutingModule { }
