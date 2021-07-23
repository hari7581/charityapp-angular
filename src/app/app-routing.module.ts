import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from  './home/home.component';
import { DonationsComponent } from './donations/donations.component';
import { AdminComponent } from './admin/admin.component';
import { DonateComponent } from './donate/donate.component';
import { RequestdetailComponent } from './requestdetail/requestdetail.component';
import { UserdetailsComponent } from './userdetails/userdetails.component'
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminviewComponent} from './adminview/adminview.component';
import { AdmincreateComponent} from './admincreate/admincreate.component';
import { AdmindonationComponent } from './admindonation/admindonation.component';

  
const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent},
  {path:"donations",component:DonationsComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'admin',component:AdminComponent},
  {path:'donate',component:DonateComponent},
  {path:'requestdetail',component:RequestdetailComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'adminheader',component:AdminheaderComponent},
  {path:'adminview',component:AdminviewComponent},
  {path:'admincreate',component:AdmincreateComponent},
  {path:'admindonation',component:AdmindonationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
