import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'ag-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Observable<Course[]>;
  selectedCourse: Course;

  @Output() selectedEvent: EventEmitter<Course> = new EventEmitter<Course>();

  public masonryOptions: NgxMasonryOptions = {
		gutter: 10,
		resize: true,
		initLayout: true,
		fitWidth: true
	};

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.getOpenCourses();
  }

  onSelect(course:Course){
    this.selectedEvent.emit(course);
  }

}
