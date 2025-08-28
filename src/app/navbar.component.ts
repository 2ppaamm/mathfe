import { Component, OnInit } from '@angular/core';
import { OtpAuthService } from './services/otp-auth.service';
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: 'ag-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private otpAuthService: OtpAuthService, public router: Router) {
    // Remove profile image subscription since OTP auth doesn't have profile images
    // If you need user info, you can get it from otpAuthService.getUserInfo()
  }

  isHomeActive = false;
  profilePic = "/assets/images/no_user.png";
  
  handleImageLoadError = (event) => {
    event.target.src = "/assets/images/no_user.png";
  }

  ngOnInit() {
    // Set default profile pic if authenticated
    if (this.otpAuthService.isAuthenticated()) {
      this.profilePic = "/assets/images/user.png";
    }

    this.router.events.subscribe((r: any) => {
      if (r.url == "/" || r.url == "/member") {
        this.isHomeActive = true;
      } else {
        this.isHomeActive = false;
      }
    });

    $(document).ready(function () {
      $('.main-navigation').onePageNav({
        scrollThreshold: 0.2,
        filter: ':not(.external)',
        changeHash: false
      });
    })
  }

  public login() {
    // Redirect to home page where OTP login is available
    this.router.navigate(['/']);
  }

  public logout() {
    this.otpAuthService.logout();
    localStorage.clear();
  }

  public isAuthenticated(): boolean {
    return this.otpAuthService.isAuthenticated();
  }

  public collapseMenuOnMobile() {
    if (matchMedia('(max-width: 480px)').matches) {
      $(".navbar-toggle").click();
    }
  }
}