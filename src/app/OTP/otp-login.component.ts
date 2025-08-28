import { Component, OnInit } from '@angular/core';
import { OtpAuthService } from '../services/otp-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ag-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.css']
})
export class OtpLoginComponent implements OnInit {
  contact: string = '';
  otp_code: string = '';
  step: 'contact' | 'otp' = 'contact';
  loading: boolean = false;
  error: string = '';
  success: string = '';

  constructor(
    private otpAuthService: OtpAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.otpAuthService.isAuthenticated()) {
      this.router.navigate(['/member']);
    }
  }

  sendOtp() {
    if (!this.contact || this.contact.trim().length < 3) {
      this.error = 'Please enter a valid email address or phone number';
      return;
    }

    this.loading = true;
    this.error = '';

    this.otpAuthService.sendOtp(this.contact.trim()).subscribe(
      (response) => {
        this.loading = false;
        this.success = 'OTP sent successfully!';
        this.step = 'otp';
      },
      (error) => {
        this.loading = false;
        this.error = error.error && error.error.message || 'Failed to send OTP. Please try again.';
      }
    );
  }

  verifyOtp() {
    if (!this.otp_code || this.otp_code.length !== 6) {
      this.error = 'Please enter a valid 6-digit OTP';
      return;
    }

    this.loading = true;
    this.error = '';

    this.otpAuthService.verifyOtp(this.contact.trim(), this.otp_code).subscribe(
      (response) => {
        this.loading = false;
        this.success = 'Login successful!';
        this.router.navigate(['/home']);
      },
      (error) => {
        this.loading = false;
        this.error = error.error && error.error.message || 'Invalid OTP. Please try again.';
      }
    );
  }

  goBack() {
    this.step = 'contact';
    this.otp_code = '';
    this.error = '';
    this.success = '';
  }

  resendOtp() {
    this.sendOtp();
  }
}