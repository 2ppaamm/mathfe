import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { OtpAuthService } from '../services/otp-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private otpAuthService: OtpAuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.otpAuthService.getToken();
    
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(authReq);
    }
    
    return next.handle(req);
  }
}