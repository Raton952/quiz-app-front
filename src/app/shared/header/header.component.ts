import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  user!:boolean

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.user()
    this.user = this.userService.isActive;  
  }

  handleLogOut(){
    localStorage.clear()
    this.router.navigate(['home']);
  }

}
