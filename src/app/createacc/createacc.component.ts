import { Component, OnInit } from '@angular/core';
import { User } from '../temp/user';
import { DataServiceService } from '../data-service.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-createacc',
  templateUrl: './createacc.component.html',
  styleUrls: ['./createacc.component.css']
})
export class CreateaccComponent implements OnInit {
  hidden=true;
  formdk =
    {
      id: 3,
      fullname: '',
      email: '',
      password: '',
      gender: '',
      birthday: '',
      username: '',
    }
  user: User[];
  taikhoanUser = [];
  constructor( private data: DataServiceService) {
  
  }
  getListUer() {
    this.data.listUser().subscribe(data => this.user = data)
  }
  submit(form: NgForm) {
    this.taikhoanUser.push({
      id: this.formdk.id += 1,
      fullname: this.formdk.fullname,
      email: this.formdk.email,
      password: this.formdk.password,
      username: this.formdk.username,
      birthday: this.formdk.birthday,
      gender: this.formdk.gender,
    });
    localStorage.setItem("createacc", JSON.stringify(this.taikhoanUser))
    this.hidden=false;
  }

  ngOnInit() {
    this.getListUer();
  }

}
