import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DeviceloadInitServce } from '../service/deviceload.init.service';
import { data } from 'jquery';
import { Manufacturers } from '../ValueObject/manufacturers';
@Component({
  selector: 'app-home-bar',
  templateUrl: './home-bar.component.html',
  styleUrls: ['./home-bar.component.css']
})
export class HomeBarComponent {
  websiteList = ['1','2']
  deviceType = ['IMEI','ICCID','EID','ESN']
  // changeWebsite(e) {  
  //   console.log(e.target.value);  
  // } 
  selectedDeviceType :String = ''
  mfgType$: any 
  selectedMfgType : String = ''
  prodType = ['iPhone','Galaxy','Note']
  selectedProdType : String =''
  modelType = ['iPhone11', 'iPhone 11 XS', 'iPhone 12', 'iPhone13']
  selectedModelType : String = ''
  eType = ['Yes','No']
  selectedEType : String = ''
  // fileToUpload: File;
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file!: File; // Variable to store file
  constructor(private deviceService: DeviceloadInitServce){
    
  }

  ngOnInit(){
    console.log("Hello")
    this.mfgType$ = this.deviceService.getMfg()
    console.log(this.mfgType$)
  }

  handleFileInput(event:any) {
    this.file = event.target.files[0];
}
// uploadFileToActivity() {
//   this.deviceService.postFile(this.fileToUpload).subscribe(data => {
//     // do something, if upload success
//     }, error => {
//       console.log(error);
//     });

    
// }

uploadFileToActivity() {
  this.loading = !this.loading;
  console.log(this.file);
  this.deviceService.postFile(this.file).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              this.shortLink = event.link;

              this.loading = false; // Flag variable 
          }
      }
  );
}
}
