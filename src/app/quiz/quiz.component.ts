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
  subjects:any;
  rowpage=1;
  page=1;
  // page;
  Id;
  Quizs;//chua cac cau hoi
  subject;
  subName;
 
  showTime : boolean = true;
  Second = 3600;
  Counter = 0;
  Interval = null;
  Marks = 0;
  answer=[];
  result;

//lọc đáp án đúng
  answers = [];
	point = 0;
  constructor(private http : HttpClient,private route:ActivatedRoute,private ds:DataServiceService) { }
  cur=1;
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.Id=params.get('Id');
      this.ds.getQuiz(this.Id).subscribe(data=>{
        this.Quizs=data;
        console.log(this.Quizs);
      //   if(this.Quizs.length%this.currentPage==0)
      // this.page=this.Quizs.length/this.itemsperPage;
      // else {
      //   this.page = Math.floor(this.Quizs.length / this.itemsperPage) + 1;
      // }
      })
    })
      
    }
    // nextPage() {
    //   console.log(this.page)
    //   console.log(this.currentPage)
    //   if (this.currentPage < this.page)
    //     this.currentPage++;
    // }
    // lastPage() {
    //   if (this.currentPage >1 )
    //     this.currentPage--;
    // }
    nextPage() {
      if (this.Quizs.length / this.rowpage > this.page) {
        this.page++;
      }
    }
    convertTime(s) {
      var timer = document.getElementById('timer');
      var min = Math.floor(s / 60);
      var sec = s % 60;
      var minute = (min < 10) ? "0" + min : min;
      var sencond = (sec < 10) ? "0" + sec : sec;
      return minute + "'" + ':' + sencond;
    }

    startTime() {
      clearInterval(this.Interval);
      var timer = document.getElementById('timer');
      timer.innerHTML = this.convertTime(this.Second - this.Counter);
      this.Interval = setInterval(() => {
        this.Counter++;
        timer.innerHTML = this.convertTime(this.Second - this.Counter);
        if ((this.Second - this.Counter) <= 0) {
          clearInterval(this.Interval);
          this.Second = 3600;
          this.Counter = 0;
          timer.innerHTML = "HẾT THỜI GIAN";
        }
      }, 1000);
    }

    tinhDiem() {
      for (var i = 0; i < this.Quizs.length; i++) {
        if (this.Quizs[i].AnswerId == this.answer[i]) {
          this.Marks += this.Quizs[i].Marks
        }
      }
    }
  
    endTime() {
  
      clearInterval(this.Interval);
      document.getElementById('timer-2').innerHTML = this.convertTime(this.Counter);
      document.getElementById('result').style.display = 'block';
      document.getElementById('training').style.display = 'none';
    }
  
    resetTime() {
      clearInterval(this.Interval);
      document.getElementById('timer').innerHTML = "60':00";
      this.Second = 2700;
      this.Counter = 0;
  
    }
    nameSub() {
      this.subject.forEach(element => {
        if (element.Id == this.Id) {
          this.subName = element.Name;
        }
      });
    }
    pointTest() {
      var sum = 0;
      for (var i = 0; i < this.Quizs.length; i++) {
        if (this.answers[i] == this.Quizs[i].AnswerId) {
          sum += this.Quizs[i].Marks;
          this.point = sum;
        }
      }
    }
  
}
