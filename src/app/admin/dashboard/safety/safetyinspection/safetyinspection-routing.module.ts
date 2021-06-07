import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SafetyinspectionComponent } from './safetyinspection.component';

const routes: Routes = [{ path: '', component: SafetyinspectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafetyinspectionRoutingModule { }
