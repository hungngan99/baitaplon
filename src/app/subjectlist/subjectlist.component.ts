import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})
export class SubjectlistComponent implements OnInit {
  itemperpage= 4;
  page:number;
  curpage:number=1;
  url = './assets/Subjects.js';
  subject;
  oderby:String = "name";

  nextPage() {
    console.log(this.page)
    console.log(this.curpage)
    if (this.curpage < this.page)
      this.curpage++;
  }
  lastPage() {
    if (this.curpage >1 )
      this.curpage--;
  }
  constructor( private http : HttpClient,private router:ActivatedRoute ) { }

  ngOnInit() {  
    this.getAll().subscribe(data => {
      this.subject=data;
      if(this.subject.length%this.curpage==0)
      this.page=this.subject.length/this.itemperpage;
      else {
        this.page = Math.floor(this.subject.length / this.itemperpage) + 1;
      }
    })
  }
  order(strOder:string){
   
  }
  getAll(){
    return this.http.get(this.url);
  }
  

}
