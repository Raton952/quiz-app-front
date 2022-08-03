import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { AddQuizComponent } from './quiz/add-quiz/add-quiz.component';
import { SingleQuizComponent } from './quiz/single-quiz/single-quiz.component';
import { EditQuizComponent } from './quiz/edit-quiz/edit-quiz.component';
import { MyQuizComponent } from './quiz/my-quiz/my-quiz.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddQuizTitleComponent } from './quiz/add-quiz-title/add-quiz-title.component';
import { QuizResultComponent } from './quiz/quiz-result/quiz-result.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HeaderComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    QuizComponent,
    AddQuizComponent,
    SingleQuizComponent,
    EditQuizComponent,
    MyQuizComponent,
    AddQuizTitleComponent,
    QuizResultComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
