import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { RegisterComponent } from './admin/auth/register/register.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { LandingpageComponent } from './admin/dashboard/landingpage/landingpage.component';
import { SuperadminlandingpageComponent } from './buildcron/superadmin/dashboard/superadminlandingpage/superadminlandingpage.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LandingpageComponent,
    SuperadminlandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
