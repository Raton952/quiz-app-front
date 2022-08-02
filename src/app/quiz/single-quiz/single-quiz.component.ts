import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-single-quiz',
  templateUrl: './single-quiz.component.html',
  styleUrls: ['./single-quiz.component.css'],
})
export class SingleQuizComponent implements OnInit {
  titleId!: string;
  questions: any[] = [];
  ans: any[] = [];
  trueList: any[] = [];
  getAnswersFromDb: any[] = [];
  getOnlyAns:any[]=[]

  result: number = 0;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.titleId = params['id'];
    });

    this.quizService.getAllQuestions(this.titleId).subscribe((res: any) => {
      this.questions = res.questions;
      // console.log(this.questions);
    });

    this.quizService.getQuizAnswer(this.titleId).subscribe((res: any) => {
      this.getAnswersFromDb = res.answers;
      this.getAnswersFromDb.forEach((x) => {
        this.getOnlyAns.push(x.correctAnswer)
      });
    });
  }

  handleAnswer(form: NgForm) {
    const getAns = form.value;
    let obkeys = Object.keys(getAns);
    let obValues = Object.values(getAns);

    for (let i = 0; i < obkeys.length; i++) {
      if (obValues[i] == true) {
        this.trueList.push(obkeys[i]);
      }
    }
    
    for (let i = 0; i < this.trueList.length; i++) {
      for (let j = 0; j < this.getOnlyAns.length; j++) {
         if(this.getOnlyAns[j] === this.trueList[i]){
             this.result++;
         }   
     }
    }

    
    this.quizService.result = this.result;
    console.log("re",this.quizService.result);
    this.trueList = [];
    this.result=0
    this.router.navigate(["result",this.titleId])
  }
}
