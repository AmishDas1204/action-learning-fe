import { Component } from '@angular/core';

@Component({
  selector: 'app-device-load',
  templateUrl: './device-load.component.html',
  styleUrls: ['./device-load.component.css']
})
export class DeviceLoadComponent {
  test1 = "";
  constructor(){
    console.log("In the device load")
  }

}
