import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';


@Injectable({ providedIn: 'root' })
export class QuizService {

    allTitle=[]


    constructor(private http: HttpClient,private userService: UserService) {}

    addTitle(title:string){
        this.userService.user()
        let token = `${this.userService.token}`;
        const url = 'http://localhost:5000';
        
        let headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + token)
        .set('Content-Type', 'application/json'); 
    
        const postData = { title:title };
        return this.http.post(`${url}/quiz/quiztitle`,postData, {headers:headers})
    }

    getAllTitle(){
        
        this.userService.user()
        let token = `${this.userService.token}`;
        const url = 'http://localhost:5000';
        
        let headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + token)
        .set('Content-Type', 'application/json'); 
        

        return this.http.get(`${url}/quiz/quiztitle`, {headers})
    }
}