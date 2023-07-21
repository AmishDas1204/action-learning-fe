import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceLoadComponent } from './device-load/device-load.component';
import { HomeBarComponent } from './home-bar/home-bar.component';
import { BrowserModule } from '@angular/platform-browser'
import { LoginBarComponent } from './login-bar/login-bar.component';
const routes: Routes = [
  {
  path: 'deviceLoad',
  component: DeviceLoadComponent,
},
{
  path: 'home',
  component: HomeBarComponent
}
];

@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot([
    {
    path: '',
    component: LoginBarComponent,
  },
  {
    path: 'home',
    component: HomeBarComponent
  },
  {
    path: 'deviceLoad',
    component: DeviceLoadComponent,
  }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
