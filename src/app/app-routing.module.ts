import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/auth/login/login.component';
import { RegisterComponent } from './admin/auth/register/register.component';
import { LandingpageComponent } from './admin/dashboard/landingpage/landingpage.component';
import { SuperadminlandingpageComponent } from './buildcron/superadmin/dashboard/superadminlandingpage/superadminlandingpage.component';
const routes: Routes = [
  { path: '', pathMatch:'full', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'dashboard', component:LandingpageComponent, children:
  [
    { path: '', loadChildren: () => import('./admin/dashboard/home/home.module').then(m => m.HomeModule) },
    { path: 'projects', loadChildren: () => import('./admin/dashboard/projects/projects.module').then(m => m.ProjectsModule) }, 
    { path: 'employees', loadChildren: () => import('./admin/dashboard/employees/employees.module').then(m => m.EmployeesModule) }, 
    { path: 'vendors', loadChildren: () => import('./admin/dashboard/vendors/vendors.module').then(m => m.VendorsModule) }, 
    { path: 'materials', loadChildren: () => import('./admin/dashboard/materials/materials.module').then(m => m.MaterialsModule) }, 
    { path: 'qualityinspection', loadChildren: () => import('./admin/dashboard/quality/qualityinspection/qualityinspection.module').then(m => m.QualityinspectionModule) }, 
    { path: 'qualitytesting', loadChildren: () => import('./admin/dashboard/quality/qualitytesting/qualitytesting.module').then(m => m.QualitytestingModule) }, 
    { path: 'safetyinspection', loadChildren: () => import('./admin/dashboard/safety/safetyinspection/safetyinspection.module').then(m => m.SafetyinspectionModule) }, 
    { path: 'safetypermit', loadChildren: () => import('./admin/dashboard/safety/safetypermit/safetypermit.module').then(m => m.SafetypermitModule) }, 
    { path: 'reports', loadChildren: () => import('./admin/dashboard/reports/reports.module').then(m => m.ReportsModule) }, 
    { path: 'contactus', loadChildren: () => import('./admin/dashboard/contactus/contactus.module').then(m => m.ContactusModule) },
  ]
  },
  { path: 'superadmin', component:SuperadminlandingpageComponent, children:[
  { path: '', loadChildren: () => import('./buildcron/superadmin/dashboard/home/home.module').then(m => m.HomeModule) },
  { path: 'registrations', loadChildren: () => import('./buildcron/superadmin/dashboard/registrations/registrations.module').then(m => m.RegistrationsModule) },
  { path: 'licenses', loadChildren: () => import('./buildcron/superadmin/dashboard/licenses/licenses.module').then(m => m.LicensesModule) },
  { path: 'quality/checklist/master/library', loadChildren: () => import('./buildcron/superadmin/dashboard/quality/checklist/master/librarylist/librarylist.module').then(m => m.LibrarylistModule) },
  { path: 'quality/checklist/master/library/questions', loadChildren: () => import('./buildcron/superadmin/dashboard/quality/checklist/master/librarylist/questionlist/questionlist.module').then(m => m.QuestionlistModule) },
  { path: 'quality/testdata/master/library/questions', loadChildren: () => import('./buildcron/superadmin/dashboard/quality/testdata/master/librarylist/questionlist/questionlist.module').then(m => m.QuestionlistModule) },
  { path: 'quality/testdata/master/library', loadChildren: () => import('./buildcron/superadmin/dashboard/quality/testdata/master/librarylist/librarylist.module').then(m => m.LibrarylistModule) },
  { path: 'safety/checklist/master/library', loadChildren: () => import('./buildcron/superadmin/dashboard/safety/checklist/master/librarylist/librarylist.module').then(m => m.LibrarylistModule) },
  { path: 'safety/checklist/master/library/questions', loadChildren: () => import('./buildcron/superadmin/dashboard/safety/checklist/master/librarylist/questionlist/questionlist.module').then(m => m.QuestionlistModule) },
  { path: 'safety/testdata/master/library/questions', loadChildren: () => import('./buildcron/superadmin/dashboard/safety/testdata/master/librarylist/questionlist/questionlist.module').then(m => m.QuestionlistModule) },
  { path: 'safety/testdata/master/library', loadChildren: () => import('./buildcron/superadmin/dashboard/safety/testdata/master/librarylist/librarylist.module').then(m => m.LibrarylistModule) },
  { path: 'materials', loadChildren: () => import('./buildcron/superadmin/dashboard/materials/materials.module').then(m => m.MaterialsModule) },
  { path: 'siteinstructionreports', loadChildren: () => import('./buildcron/superadmin/dashboard/reports/siteinstructionreports/siteinstructionreports.module').then(m => m.SiteinstructionreportsModule) },
  { path: 'dailyreports', loadChildren: () => import('./buildcron/superadmin/dashboard/reports/dailyreports/dailyreports.module').then(m => m.DailyreportsModule) },
  { path: 'ncreports', loadChildren: () => import('./buildcron/superadmin/dashboard/reports/ncreports/ncreports.module').then(m => m.NcreportsModule) },
  { path: 'queries', loadChildren: () => import('./buildcron/superadmin/dashboard/queries/queries.module').then(m => m.QueriesModule) },
  { path: 'feedbacks', loadChildren: () => import('./buildcron/superadmin/dashboard/feedbacks/feedbacks.module').then(m => m.FeedbacksModule) },
  { path: 'faqs', loadChildren: () => import('./buildcron/superadmin/dashboard/faqs/faqs.module').then(m => m.FaqsModule) }
  ]},
  // { path: 'superadmin/home', loadChildren: () => import('./buildcron/superadmin/dashboard/home/home.module').then(m => m.HomeModule) },
  // { path: 'superadmin/registrations', loadChildren: () => import('./buildcron/superadmin/dashboard/registrations/registrations.module').then(m => m.RegistrationsModule) },
  // { path: 'superadmin/licenses', loadChildren: () => import('./buildcron/superadmin/dashboard/licenses/licenses.module').then(m => m.LicensesModule) },
  // { path: 'superadmin/quality/checklist/master/library', loadChildren: () => import('./buildcron/superadmin/dashboard/quality/checklist/master/librarylist/librarylist.module').then(m => m.LibrarylistModule) },
  // { path: 'superadmin/quality/checklist/master/library/questions', loadChildren: () => import('./buildcron/superadmin/dashboard/quality/checklist/master/librarylist/questionlist/questionlist.module').then(m => m.QuestionlistModule) },
  // { path: 'superadmin/quality/testdata/master/library/questions', loadChildren: () => import('./buildcron/superadmin/dashboard/quality/testdata/master/librarylist/questionlist/questionlist.module').then(m => m.QuestionlistModule) },
  // { path: 'superadmin/quality/testdata/master/library', loadChildren: () => import('./buildcron/superadmin/dashboard/quality/testdata/master/librarylist/librarylist.module').then(m => m.LibrarylistModule) },
  // { path: 'superadmin/safety/checklist/master/library', loadChildren: () => import('./buildcron/superadmin/dashboard/safety/checklist/master/librarylist/librarylist.module').then(m => m.LibrarylistModule) },
  // { path: 'superadmin/safety/checklist/master/library/questions', loadChildren: () => import('./buildcron/superadmin/dashboard/safety/checklist/master/librarylist/questionlist/questionlist.module').then(m => m.QuestionlistModule) },
  // { path: 'superadmin/safety/testdata/master/library/questions', loadChildren: () => import('./buildcron/superadmin/dashboard/safety/testdata/master/librarylist/questionlist/questionlist.module').then(m => m.QuestionlistModule) },
  // { path: 'superadmin/safety/testdata/master/library', loadChildren: () => import('./buildcron/superadmin/dashboard/safety/testdata/master/librarylist/librarylist.module').then(m => m.LibrarylistModule) },
  // { path: 'superadmin/materials', loadChildren: () => import('./buildcron/superadmin/dashboard/materials/materials.module').then(m => m.MaterialsModule) },
  // { path: 'superadmin/siteinstructionreports', loadChildren: () => import('./buildcron/superadmin/dashboard/reports/siteinstructionreports/siteinstructionreports.module').then(m => m.SiteinstructionreportsModule) },
  // { path: 'superadmin/dailyreports', loadChildren: () => import('./buildcron/superadmin/dashboard/reports/dailyreports/dailyreports.module').then(m => m.DailyreportsModule) },
  // { path: 'superadmin/ncreports', loadChildren: () => import('./buildcron/superadmin/dashboard/reports/ncreports/ncreports.module').then(m => m.NcreportsModule) },
  // { path: 'superadmin/queries', loadChildren: () => import('./buildcron/superadmin/dashboard/queries/queries.module').then(m => m.QueriesModule) },
  // { path: 'superadmin/feedbacks', loadChildren: () => import('./buildcron/superadmin/dashboard/feedbacks/feedbacks.module').then(m => m.FeedbacksModule) },
  // { path: 'superadmin/faqs', loadChildren: () => import('./buildcron/superadmin/dashboard/faqs/faqs.module').then(m => m.FaqsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
