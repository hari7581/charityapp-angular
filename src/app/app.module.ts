import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DonationsComponent } from './donations/donations.component';
import { AdminComponent } from './admin/admin.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { AdmincreateComponent } from './admincreate/admincreate.component';
import { AdmindonationComponent } from './admindonation/admindonation.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { RequestsComponent } from './requests/requests.component';
import { DonateComponent } from './donate/donate.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DonationsComponent,
    AdminComponent,
    UserdetailsComponent,
    AdminhomeComponent,
    AdminheaderComponent,
    AdminviewComponent,
    AdmincreateComponent,
    AdmindonationComponent,
    AdminaddComponent,
    RequestsComponent,
    DonateComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
