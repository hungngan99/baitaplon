import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from './temp/user';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
urlStudent="../assets/db/Students.json";
urlQuiz="../assets/db/Quizs";
getStudent(){
  return this.http.get(this.urlStudent);
}
listUser():Observable<User[]>
 {
  return this.http.get<User[]>(`../assets/db/Students.json`)
 }
getQuiz(Id:String){
  return this.http.get(this.urlQuiz + `/${Id}.json`)
  // return this.http.get(this.urlQuiz+"/"+Id+".json");
}
  constructor(private http: HttpClient) {}
}
