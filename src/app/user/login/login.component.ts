import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error!:string
  isActive=true
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.user()
  }

  onLogin(form:NgForm){
    this.error = '';
    let email = form.value.email;
    let password = form.value.password;
   
    this.userService.loginUser( email, password).subscribe(
      (res: any) => {

        if (res.message) {
          this.userService.saveToken({userData:res.user,status:this.isActive})
          this.userService.user()
          form.reset();
        }
      },
      (err: any) => {
        this.error = err.error.error;
      }
    );
  }

}
