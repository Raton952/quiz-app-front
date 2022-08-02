import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {

  isActiveUser = new Subject<boolean>()
  isActive=false
  token!:string

  constructor(private http: HttpClient) {}

  registerUser(name: string, email: string, password: string) {
    const url = 'http://localhost:5000';
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.append('Access-Control-Allow-Credentials', 'true');

    const postData: User = { name: name, email: email, password: password };
    return this.http.post(`${url}/user`,postData, {headers:headers})
  }

  loginUser(email:string,password:string){
    const url = 'http://localhost:5000';
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.append('Access-Control-Allow-Credentials', 'true');

    const postData={ email: email, password: password };
    return this.http.post(`${url}/user/login`,postData, {headers:headers})
  }

  saveToken(user:object){
    localStorage.setItem("user",JSON.stringify(user));
  }

  user(){
    let getData:any = localStorage.getItem('user');
    const user = JSON.parse(getData)
    if (user?.status) {
      this.isActive = user.status
      this.token = user.userData.access_token
    }
  }
  
}
