import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { LoginComponent } from './components/login/login.component';
import { ChangeProjectComponent } from './components/modals/change-project/change-project.component';
import { AddProjectComponent } from './components/modals/add-project/add-project.component';
import { DeleteProjectComponent } from './components/modals/delete-project/delete-project.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EducationComponent } from './components/education/education.component';

import { AddAboutComponent } from './components/modals/add-about/add-about.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { ButtonLogoutComponent } from './components/button-logout/button-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProjectComponent,
    HeaderComponent,
    PresentationComponent,
    FooterComponent,
    ListProjectsComponent,
    LoginComponent,
    ChangeProjectComponent,
    AddProjectComponent,
    DeleteProjectComponent,
    SkillsComponent,
    PageNotFoundComponent,
    EducationComponent,
    AddAboutComponent,
    DashboardComponent,
    ButtonLoginComponent,
    ButtonLogoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
