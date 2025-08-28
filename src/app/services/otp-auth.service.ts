import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class OtpAuthService {
  private apiUrl = environment.apiURL;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasValidToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Send OTP to email/phone
  sendOtp(contact: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/request-otp`, { contact });
  }

  // Verify OTP and get token
  verifyOtp(contact: string, otp_code: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/verify-otp`, { contact, otp_code })
      .pipe(
        tap((response: any) => {
          if (response.token) {
            this.setSession(response);
          }
        })
      );
  }

  // Store authentication data (no expiry)
  private setSession(authResult: any): void {
    localStorage.setItem('access_token', authResult.token);
    localStorage.setItem('user_info', JSON.stringify(authResult.user || {}));
    
    this.isAuthenticatedSubject.next(true);
  }

  // Check if user is authenticated (no expiry check)
  public isAuthenticated(): boolean {
    return this.hasValidToken();
  }

  private hasValidToken(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token; // Just check if token exists
  }

  // Get stored token
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // Get user info
  getUserInfo(): any {
    const userInfo = localStorage.getItem('user_info');
    return userInfo ? JSON.parse(userInfo) : null;
  }

  // Logout
  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_info');
    this.isAuthenticatedSubject.next(false);
  }

  // Get headers with auth token
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }
}