import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QualityinspectionComponent } from './qualityinspection.component';

const routes: Routes = [{ path: '', component: QualityinspectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualityinspectionRoutingModule { }
