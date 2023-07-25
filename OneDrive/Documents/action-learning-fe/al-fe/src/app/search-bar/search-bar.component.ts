import { Component } from '@angular/core';
import { DeviceloadInitServce } from '../service/deviceload.init.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
 deviceId:any

 ngOnInit(){

 }

 constructor(private deviceLoadInitService : DeviceloadInitServce){

 }

 search(){
  console.log(this.deviceId)
  this.deviceLoadInitService.search(this.deviceId)
 }
}
