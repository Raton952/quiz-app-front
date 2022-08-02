import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizService: QuizService) {}

  title:any[] = [];

  ngOnInit(): void {
    this.quizService.getAllTitle().subscribe((res:any) => {
      
      this.title = res.titles
    });
  }

}
