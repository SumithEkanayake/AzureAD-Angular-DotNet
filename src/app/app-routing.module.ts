import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MsalGuard } from '@azure/msal-angular';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[MsalGuard]
  },
  {
    path:'reports',
    component:ReportComponent,
    canActivate:[MsalGuard]
  },
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      initialNavigation:'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
