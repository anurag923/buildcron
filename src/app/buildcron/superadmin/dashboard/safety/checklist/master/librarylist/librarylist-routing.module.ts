import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrarylistComponent } from './librarylist.component';

const routes: Routes = [{ path: '', component: LibrarylistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrarylistRoutingModule { }
