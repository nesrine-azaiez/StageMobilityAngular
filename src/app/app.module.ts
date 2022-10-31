import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ListCandidatComponent } from './Candidat/list-candidat/list-candidat.component';
import {DashboardComponent} from './BackEnd/dashboard/dashboard.component';
import {LayoutComponent} from './BackEnd/layout/layout.component';
import {NavbarComponent} from './BackEnd/navbar/navbar.component';
import {SidbarComponent} from './BackEnd/sidbar/sidbar.component';
import {FooterComponent} from './BackEnd/footer/footer.component';
import {HomeComponent} from './BackEnd/home/home.component';
import {AddCandidatComponent} from "./Candidat/add-candidat/add-candidat.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ListCandidatComponent,
    DashboardComponent,
    LayoutComponent,
    NavbarComponent,
    SidbarComponent,
    FooterComponent,
    AddCandidatComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
