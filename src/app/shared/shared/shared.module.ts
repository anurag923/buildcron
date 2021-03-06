import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../config/header/header.component';
import { FooterComponent } from '../../config/footer/footer.component';
import { SidenavComponent } from '../../config/sidenav/sidenav.component';
import { SupersidenavComponent } from '../../config/supersidenav/supersidenav.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SupersidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SupersidenavComponent
  ]
})
export class SharedModule { }
