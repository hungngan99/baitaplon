import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  formStudent = {
    username: "",
    email: "",
  }
  hiddenbaoloi: Boolean = true;
  hiddenshowpass: Boolean = true;
  students;
  constructor(private ds: DataServiceService) { }

  ngOnInit() {
    this.ds.getStudent().subscribe(data=>{
      this.students=data;
    })
  }
  student = null;//tìm ra tg student trùng username và email
  HienThiMatKhau() {
    this.student = null;//để khi mỗi lần bấm lại là nó xóa tg student cũ đi

    
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].username == this.formStudent.username &&
        this.students[i].email == this.formStudent.email) {
        this.student = this.students[i];
        break;
      }
    }
    console.log(this.student);
    if (this.student == null) {
      this.hiddenbaoloi = false;
      this.hiddenshowpass = true;
    }
    else {
      this.hiddenbaoloi = true;
      this.hiddenshowpass = false;
      alert(`Mật khẩu của bạn là ${this.student.password}`)
    }

  }
}

