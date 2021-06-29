import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteinstructionreportsComponent } from './siteinstructionreports.component';

const routes: Routes = [{ path: '', component: SiteinstructionreportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteinstructionreportsRoutingModule { }
