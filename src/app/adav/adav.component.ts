import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adav',
  templateUrl: './adav.component.html',
  styleUrls: ['./adav.component.css']
})
export class AdavComponent implements OnInit {



  constructor() { }


  ngOnInit() {
    var timeStart = 5;
function TimeCounter() {  
    document.getElementById('time-count').innerHTML ="Thời gian: &nbsp&nbsp" + timeStart;
    setInterval(()=>{
        if(timeStart<0) {
            
            document.getElementById('time-count').className = "badge badge-pill badge-danger float-right p-2";
            document.getElementById('time-count').innerHTML = "HÊT GIỜ";
            clearInterval(this);
        }

        else {
        document.getElementById('time-count').innerHTML ="Thời gian: &nbsp&nbsp" + timeStart;
        timeStart = timeStart-1;
    }
    },1000);
    // if (timeStart<=0){    clearInterval(i);
    //     timeStart = 0;

    // }
}
  }

}
