import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

 
  optionLength=2
  optionNumber: any = [1]
  showTitleSec=true

  constructor() { }

  ngOnInit(): void {
  }

  addOption(){
    let v = this.optionLength++
    this.optionNumber.push(v)
    console.log(this.optionNumber.length);
    console.log(this.optionNumber);
    
  }


  handleAddQuiz(form:NgForm){
    console.log(form.value);
    
  }

}
