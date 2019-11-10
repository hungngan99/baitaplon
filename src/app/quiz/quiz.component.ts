import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router'
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  itemsperPage=1;
  currentPage=1;
  page;
  Id;
  Quizs;//chua cac cau hoi
  constructor(private http : HttpClient,private route:ActivatedRoute,private ds:DataServiceService) { }
  cur=1;
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.Id=params.get('Id');
      this.ds.getQuiz(this.Id).subscribe(data=>{
        this.Quizs=data;
        console.log(this.Quizs);
        if(this.Quizs.length%this.currentPage==0)
      this.page=this.Quizs.length/this.itemsperPage;
      else {
        this.page = Math.floor(this.Quizs.length / this.itemsperPage) + 1;
      }
      })
    })
      
    }
    nextPage() {
      console.log(this.page)
      console.log(this.currentPage)
      if (this.currentPage < this.page)
        this.currentPage++;
    }
    lastPage() {
      if (this.currentPage >1 )
        this.currentPage--;
    }
 

}
