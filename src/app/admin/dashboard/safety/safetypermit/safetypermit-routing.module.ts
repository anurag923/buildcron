import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SafetypermitComponent } from './safetypermit.component';

const routes: Routes = [{ path: '', component: SafetypermitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafetypermitRoutingModule { }
