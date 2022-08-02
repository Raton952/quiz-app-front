import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {

  titleId!: string;
  result!:number
  quiz:any[]=[]
  questions: any[] = [];

  constructor(private quizService:QuizService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.titleId = params['id'];
    });

    this.result = this.quizService.result

    this.quizService.getAllQuestions(this.titleId).subscribe((res: any) => {
      this.questions = res.questions;
      // console.log(this.questions);
    });

  }

}
