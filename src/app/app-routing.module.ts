import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authGuard/auth.guard';
import { AddQuizTitleComponent } from './quiz/add-quiz-title/add-quiz-title.component';
import { AddQuizComponent } from './quiz/add-quiz/add-quiz.component';
import { EditQuizComponent } from './quiz/edit-quiz/edit-quiz.component';
import { MyQuizComponent } from './quiz/my-quiz/my-quiz.component';
import { QuizComponent } from './quiz/quiz.component';
import { SingleQuizComponent } from './quiz/single-quiz/single-quiz.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path:"", component: QuizComponent},
  {path:"myquiz",canActivate:[AuthGuard], component: MyQuizComponent},
  {path:"singlequiz",canActivate:[AuthGuard], component: SingleQuizComponent},
  {path:"addquiz",canActivate:[AuthGuard], component: AddQuizTitleComponent},
  {path:"addquiz/addquestion",canActivate:[AuthGuard], component: AddQuizComponent},
  {path:"myquiz/edit",canActivate:[AuthGuard], component: EditQuizComponent},
  {path:"login", component: LoginComponent},
  {path:"registration", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
