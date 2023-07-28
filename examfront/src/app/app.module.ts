import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { MatSelectModule } from '@angular/material/select';
import { AddSubjectComponent } from './pages/admin/add-subject/add-subject.component';
import { NgFor } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ViewSemestersComponent } from './pages/admin/view-semesters/view-semesters.component';
import { AddSemesterComponent } from './pages/admin/add-semester/add-semester.component';
import { ViewSubjectsComponent } from './pages/admin/view-subjects/view-subjects.component';
import { UpdateSubjectComponent } from './pages/admin/update-subject/update-subject.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


//kept this as an Alias 
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';
import { LoadSubjectComponent } from './pages/user/load-subject/load-subject.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    ProfileComponent,
    WelcomeComponent,
    AddSubjectComponent,
    ViewSemestersComponent,
    AddSemesterComponent,
    ViewSubjectsComponent,
    UpdateSubjectComponent,
    ViewQuestionsComponent,
    AddQuestionComponent,
    UserDashboardComponent,
    UserSidebar,
    LoadSubjectComponent,
    UpdateQuestionComponent,
    InstructionsComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    NgFor,
    MatDividerModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    
      {

        provide:HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
  
      }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
