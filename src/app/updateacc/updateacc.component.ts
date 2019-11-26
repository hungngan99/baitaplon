import { Component, OnInit } from '@angular/core';
import { User } from '../temp/user';

@Component({
  selector: 'app-updateacc',
  templateUrl: './updateacc.component.html',
  styleUrls: ['./updateacc.component.css']
})
export class UpdateaccComponent implements OnInit {
  formdk =[];
  user={};
  selectStudents:User;

  constructor() { }

  ngOnInit() {
    this.addUser();
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
