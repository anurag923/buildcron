import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/auth/login/login.component';
import { RegisterComponent } from './admin/auth/register/register.component';
const routes: Routes = [
  { path: '', pathMatch:'full', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'home', loadChildren: () => import('./admin/dashboard/home/home.module').then(m => m.HomeModule) }, 
  { path: 'projects', loadChildren: () => import('./admin/dashboard/projects/projects.module').then(m => m.ProjectsModule) }, 
  { path: 'employees', loadChildren: () => import('./admin/dashboard/employees/employees.module').then(m => m.EmployeesModule) }, 
  { path: 'vendors', loadChildren: () => import('./admin/dashboard/vendors/vendors.module').then(m => m.VendorsModule) }, 
  { path: 'materials', loadChildren: () => import('./admin/dashboard/materials/materials.module').then(m => m.MaterialsModule) }, 
  { path: 'qualityinspection', loadChildren: () => import('./admin/dashboard/quality/qualityinspection/qualityinspection.module').then(m => m.QualityinspectionModule) }, 
  { path: 'qualitytesting', loadChildren: () => import('./admin/dashboard/quality/qualitytesting/qualitytesting.module').then(m => m.QualitytestingModule) }, 
  { path: 'safetyinspection', loadChildren: () => import('./admin/dashboard/safety/safetyinspection/safetyinspection.module').then(m => m.SafetyinspectionModule) }, 
  { path: 'safetypermit', loadChildren: () => import('./admin/dashboard/safety/safetypermit/safetypermit.module').then(m => m.SafetypermitModule) }, 
  { path: 'reports', loadChildren: () => import('./admin/dashboard/reports/reports.module').then(m => m.ReportsModule) }, 
  { path: 'contactus', loadChildren: () => import('./admin/dashboard/contactus/contactus.module').then(m => m.ContactusModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
