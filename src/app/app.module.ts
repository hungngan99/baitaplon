import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuestionComponent } from './question/question.component';
import { SubjectlistComponent } from './subjectlist/subjectlist.component';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UpdateaccComponent } from './updateacc/updateacc.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgottenaccountComponent } from './forgottenaccount/forgottenaccount.component';
import { CreateaccComponent } from './createacc/createacc.component';
import { AdavComponent } from './adav/adav.component';
import { DbavComponent } from './dbav/dbav.component';
import { DbbsComponent } from './dbbs/dbbs.component';
import { WebuComponent } from './webu/webu.component';
import {FormsModule} from '@angular/forms';
import { ThiTnComponent } from './thi-tn/thi-tn.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroduceComponent,
    ContactComponent,
    FeedbackComponent,
    QuestionComponent,
    SubjectlistComponent,
    QuizComponent,
    LoginComponent,
    ChangepasswordComponent,
    UpdateaccComponent,
    LogoutComponent,
    ForgottenaccountComponent,
    CreateaccComponent,
    AdavComponent,
    DbavComponent,
    DbbsComponent,
    WebuComponent,
    ThiTnComponent,
    ForgotpassComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"", component:HomeComponent},
      {path:"home", component:HomeComponent},
      {path:"introduce", component:IntroduceComponent},
      {path:"contact", component:ContactComponent},
      {path:"feedback", component:FeedbackComponent},
      {path:"question", component:QuestionComponent},
      {path:"login", component:LoginComponent},
      {path:"changepass", component:ChangepasswordComponent},
      {path:"updateacc", component:UpdateaccComponent},
      {path:"subjectlist/:Id", component:QuizComponent},
      {path:"subjectlist", component:SubjectlistComponent},
      {path:"quiz", component:QuizComponent},
      {path:"createacc", component:CreateaccComponent},
      {path:"forgot", component:ForgotpassComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
