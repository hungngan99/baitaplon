import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  formdk =[];
  user={}

  constructor() { 
    this.addUser();
    console.log(this.formdk[0]);
  }

  ngOnInit() {
  }
  addUser()
  {
    this.formdk=JSON.parse(localStorage.getItem('createacc'));
    this.user=this.formdk[0];
  }
  sua()
  {
    localStorage.setItem('createacc',JSON.stringify(this.formdk));
    alert("Cập nhật thành công")
  }

}
