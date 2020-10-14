import { quiz } from './../../models/quiz';
import { Time } from '@angular/common';
import { SkillService } from './../../services/skill.service';
import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../services/track.service';
import { Router } from '@angular/router';
import { HelperService } from '../../services/helper.service';
import { QuizService } from 'app/services/quiz.service';
import { EnrolmentService } from '../../services/enrolment.service';
// import { quiz } from 'app/models/quiz';
import { Skill } from 'app/models/skill';
import { HouseService } from 'app/services/house.service';

@Component({
  selector: 'ag-admin-quiz-add',
  templateUrl: './admin-quiz-add.component.html',
  styleUrls: ['./admin-quiz-add.component.css']
})
export class AdminQuizAddComponent implements OnInit {

  public status: string;
  public message: string;
  levels = [];
  quizzes: any;
  statuses = [];
  fields = [];
  skills_array: any;
  houses_array: any;
  houses = [];
  formData: any;

  start_date;
  end_date;

  constructor(
    private skillService: SkillService,
    private houseService: HouseService,
    private enrolmentService: EnrolmentService,
    private quizService: QuizService,
    private TrackService: TrackService,
    private router: Router, private helperService: HelperService) { }

  ngOnInit() {

    debugger;
    this.enrolmentService.test().subscribe(
      data => {
        console.log("new test");
        this.houses = data['houses'];
        console.log('this.houses');
        console.log(data);
      }, error => console.error(<any>error));

    this.quizService.allQuiz().subscribe(
      data => {
        console.log('quizzes data check now');
        debugger;
        console.log(data);
        this.quizzes = data;
        this.statuses = data['statuses'];
        // this.skills_array = data['skills'];
        console.log("new test");
        console.log(this.skills_array);
      }, error => console.error(<any>error));


    this.skillService.getSkills().subscribe(
      data => {
        this.skills_array = data;
      }, error => console.error(<any>error));


    this.houseService.getHouses().subscribe(
      data => {
        this.houses_array = data;
      }, error => console.error(<any>error));
  }


  diagnostic_number(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }

  public addNewQuiz(quiz: quiz): void {

    quiz.start_available_time = this.start_date;

    quiz.end_available_time = this.end_date;

    var z = quiz.due_time.split('T');

    quiz.due_time = z[0] + ' ' + z[1] + ':' + (new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds());

    this.quizService.addQuiz(quiz)
      .subscribe(
        quiz => {
          this.quizService.updateStatus = quiz['message'];
          setTimeout(() => this.quizService.updateStatus = '', 2000);
          this.router.navigate(['admin/quizzes']);
          // setTimeout(() => window.scrollTo(0, 0), 0);
        },
        error => {
          this.status = 'error';
          this.message = this.helperService.ParseErrorMsg(error);
        }
      );
  }



  changeDate(c_date, update) {

    const date = new Date(c_date);
    var time = new Date().toLocaleTimeString().split(':');

    const hh = Number(time[0]) < 10 ? '0' + Number(time[0]) : Number(time[0]);
    const mm = Number(time[1]) < 10 ? '0' + Number(time[1]) : Number(time[1]);
    const sec = time[2].split(' ');
    const ss = Number(sec[0]) < 10 ? '0' + Number(sec[0]) : Number(sec[0]);

    const formatted_start_available_date = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) :
    (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())
      + ' ' + hh + ':' + mm + ':' + ss;
    const x = formatted_start_available_date.split(' ');

    if (update === 'start_date') {

      this.start_date = x[0] + ' ' + x[1];
    } else if (update === 'end_date') {

      this.end_date = x[0] + ' ' + x[1];
    }

  }


}
