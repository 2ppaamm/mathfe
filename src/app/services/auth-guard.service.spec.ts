import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OtpAuthService } from './otp-auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private otpAuthService: OtpAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.otpAuthService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}