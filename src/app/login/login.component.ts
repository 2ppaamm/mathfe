import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ag-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  public login(){
  	this.authService.login(false);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    debugger;
   const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
   return new Date().getTime() < expiresAt;
  }
}
