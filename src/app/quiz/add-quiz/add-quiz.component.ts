import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {

  options: any = [];
  titleId!: string;
  _optionList: any[] = [];
  option: number = 1;
  question: string = '';
  correctAnswer: string = '';
  userAnswer: string = '';
  questions: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.titleId = params['id'];
    });

    this.quizService.getAllQuestions(this.titleId).subscribe((res: any) => {
      this.questions = res.questions;
    });
  }

  addOption() {
    

    let ob = {
      id: this.option,
      name: '',
    };

    this._optionList.push({ ...ob, ob });
    this.option++;
  }

  handleAddQuiz() {
    this._optionList.forEach((x) => {
      this.options.push(x.name);
    });

    this.quizService
      .addQuestion(
        this.question,
        this.correctAnswer,
        this.options,
        this.titleId,
        this.userAnswer
      )
      .subscribe(
        (res: any) => {
          if (res.message) {
            this.quizService
              .getAllQuestions(this.titleId)
              .subscribe((res: any) => {
                this.questions = res.questions;
              });

              this._optionList = [];
              this.question = '';
              this.correctAnswer = '';
              this.userAnswer = '';
          }
        },
        (err: any) => {
          console.log(err);
        }
      );
  
  
  }
}
