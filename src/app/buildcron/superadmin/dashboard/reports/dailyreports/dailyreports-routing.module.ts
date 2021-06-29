import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyreportsComponent } from './dailyreports.component';

const routes: Routes = [{ path: '', component: DailyreportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyreportsRoutingModule { }
