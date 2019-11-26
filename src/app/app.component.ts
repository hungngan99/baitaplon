import { Component } from '@angular/core';
import {DataServiceService} from '../app/data-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BaiTapCuoiKi';
  userdangnhap = [];
  taikhoan= [
      {
          id: null,
    username: "TÀI KHOẢN",
    password: "",
    fullname: "",
    email: "",
    gender: "",
    birthday: "",
    schoolfee: null,
    marks: null
      }
  ]
  constructor(
		private service: DataServiceService
	) { }
  ngOnInit() {
		this.service.listUser().subscribe(data => {
			localStorage.setItem("users", JSON.stringify(data));
        });
        this.userdangnhap = JSON.parse(localStorage.getItem("dangnhap"));
        this.dangnhap();
	}
    dangxuat() {
        localStorage.removeItem("dangnhap");
        location.assign("");
    }
    dangnhap() {
        if (this.userdangnhap !== null) {
            this.taikhoan = this.userdangnhap;
        }
    }
}
