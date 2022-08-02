import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-add-quiz-title',
  templateUrl: './add-quiz-title.component.html',
  styleUrls: ['./add-quiz-title.component.css'],
})
export class AddQuizTitleComponent implements OnInit {
  constructor(private quizService: QuizService) {}

  title:any[] = [];

  ngOnInit(): void {
    
    this.quizService.getAllTitle().subscribe((res:any) => {
      this.title = res.titles
    });
    
  }

  handleAddQuiztitle(form: NgForm) {
    
    let title = form.value.title;
    this.quizService.addTitle(title).subscribe(
      (res: any) => {
        console.log(res);
        
        if (res.message) {
          this.quizService.getAllTitle().subscribe((res:any) => {
            this.title = res.titles
          });
          form.reset();
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
