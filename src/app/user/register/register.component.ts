import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  error!: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSignUp(form: NgForm) {
    this.error = '';
    console.log(form.value);

    let name = form.value.name;
    let email = form.value.email;
    let password = form.value.password;

    this.userService.registerUser(name, email, password).subscribe(
      (res: any) => {
        if (res.message) {
          form.reset();
        }
      },
      (err: any) => {
        this.error = err.error.error;
      }
    );
  }
}
