import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent {
  username : string ="";
  password : string ="";
  public loginValid = true;
  show: boolean= false;
  private readonly returnUrl: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '';
  }
  submit(){
  console.log("user name is " + this.username)
  this.clear();
  }
  clear(){
  this.username ="";
  this.password = "";
  this.show = true;
  }

  public onSubmit(): void {
    this.loginValid = true;
    this._router.navigate(['/deviceLoad'])
    // this._authService.login(this.username, this.password).pipe(
    //   take(1)
    // ).subscribe({
    //   next: _ => {
    //     this.loginValid = true;
    //     // this._router.navigateByUrl('/game');
    //   },
    //   error: _ => this.loginValid = false
    // });
  }
}
