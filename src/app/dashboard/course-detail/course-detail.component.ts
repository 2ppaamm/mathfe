import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../models/course';
import { environment } from '../../../environments/environment';
import { OtpAuthService } from '../../services/otp-auth.service';

@Component({
  selector: 'ag-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnChanges {
  beURL = environment.apiURL + '/';
  @Input() selectedCourse: Course;
  
  constructor(private otpAuthService: OtpAuthService, private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    // console.log(changes.selectedCourse);
  }

  public login(obj) {
    // Redirect to landing page or show login modal since OTP doesn't have a direct login method
    localStorage.setItem('house', JSON.stringify(obj));
    this.router.navigate(['/']);
  }

  public directEnrol(obj) {
    localStorage.setItem('house', JSON.stringify(obj));
  }

  public isAuthenticated(): boolean {
    return this.otpAuthService.isAuthenticated();
  }
}