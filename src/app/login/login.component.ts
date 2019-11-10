import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  students;
  password;
  email;

  constructor(private router:Router,private s:DataServiceService) { }

  ngOnInit() {
    this.s.getStudent().subscribe(data=>{
      this.students=data;
    })

  }
  loGin(){
    for(let i = 0;i<this.students.length;i++) {
      if(this.email == this.students[i].email && this.password == this.students[i].password) {
        alert ('Đăng nhập thành công');
        this.router.navigate(['/subjectlist'])
        return
      }
    }
    alert('Đăng nhập thất bại')

  }
      


}
