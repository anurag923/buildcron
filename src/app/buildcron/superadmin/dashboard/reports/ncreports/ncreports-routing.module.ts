import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NcreportsComponent } from './ncreports.component';

const routes: Routes = [{ path: '', component: NcreportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NcreportsRoutingModule { }
