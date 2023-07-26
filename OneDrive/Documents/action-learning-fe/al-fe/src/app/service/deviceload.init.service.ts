import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class DeviceloadInitServce{
    
    constructor( private http:HttpClient){

    }
    // Add device into the database
    addDevice(device:{deviceType: string, deviceId:string, mfgId: string, prodId:string, modelId: string,emergencyEnable: string, description:string}){
        console.log(device);
        const headers = new HttpHeaders({'mHeader':'HelloThere'})
        this.http.post<{name:string}>(
            'http://127.0.0.1:5000/addDevice',
            device,{headers:headers}
        ).subscribe((res) =>{
            console.log(res)
        })
    }

    signin(username:string, password:string){
        let isSuccess = false
        const headers = new HttpHeaders({'mHeader':'HelloThere'})
        this.http.post<{name:string}>('http://127.0.0.1:5000/signin',
        {'email':username, 'password':password}).subscribe((data:any) =>{
            console.log(data["res"])
            if (data["res"] === "valid user"){
                console.log("Success it is")
                isSuccess = true
            }
            else{
                isSuccess = false
            }
        })
        return isSuccess
    }
    //Get Manufacturer name
    getMfg(){
        const headers = new HttpHeaders({'mHeader':'HelloThere'})
        return this.http.get<{name:string}>(
            'http://127.0.0.1:5000/manufacturers',
            {headers:headers}
        )

    }
    //Get Product Name
    getProdName(){

    }
    //Get Model Name
    getModel(){

    }
    //Get Manufacturer name
    search(deviceId:string){
        const headers = new HttpHeaders({'mHeader':'HelloThere'})
        return this.http.post<{name:string}>(
            'http://127.0.0.1:5000/search',
            {'cmd':deviceId},
            {headers:headers}
        ).subscribe((data:any) =>{
            console.log(data)
            console.log(data["res"])
            window.alert(data["res"])
        })

    }
    postFile(fileToUpload: File): void {
        const endpoint = 'http://127.0.0.1:5000/upload';
        const formData: FormData = new FormData();
        const headers = new HttpHeaders({'mHeader':'HelloThere'})
        formData.append('file', fileToUpload, fileToUpload.name);
         this.http
          .post(endpoint, formData).subscribe(
            (response) => {
              alert('File uploaded successfully.');
            },
            (error) => {
              alert('Error uploading file.');
              console.error(error);
            }
          );
    }
}