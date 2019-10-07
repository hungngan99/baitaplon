import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { DoitkComponent } from './doitk/doitk.component';
import { DanhmucmonhocComponent } from './danhmucmonhoc/danhmucmonhoc.component';
import { ThitracnghiemComponent } from './thitracnghiem/thitracnghiem.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GioithieuComponent,
    LienheComponent,
    GopyComponent,
    HoidapComponent,
    DangnhapComponent,
    DangkyComponent,
    DoimatkhauComponent,
    DoitkComponent,
    DanhmucmonhocComponent,
    ThitracnghiemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:"", component:HomeComponent},
      {path:"home", component:HomeComponent},
      {path:"gioithieu", component:GioithieuComponent},
      {path:"lienhe", component:LienheComponent},
      {path:"gopy", component:GopyComponent},
      {path:"hoidap", component:HoidapComponent},
      {path:"dangnhap", component:DangnhapComponent},
      {path:"dangky", component:DangkyComponent},
      {path:"doimatkhau", component:DoimatkhauComponent},
      {path:"doitk", component:DoitkComponent},
      {path:"danhmucmonhoc", component:DanhmucmonhocComponent},
      {path:"thitracnghiem", component:ThitracnghiemComponent}
      

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
