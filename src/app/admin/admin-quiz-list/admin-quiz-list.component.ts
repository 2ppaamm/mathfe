import { quiz } from './../../models/quiz';
import { Component, OnInit } from '@angular/core';
import { QuizService } from 'app/services/quiz.service';
// import { quiz } from 'app/models/quiz';
import { MatDialog } from '@angular/material';

import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { AdminAddSkillComponent } from '../admin-track-list/modal/admin-add-skill/admin-add-skill.component';
import { NotifyDialogComponent } from '../notify-dialog/notify-dialog.component';

import { HelperService } from 'app/services/helper.service';
import { AdminHouseSkillsTrackListComponent } from '../admin-track-list/modal/admin-house-skills-track-list/admin-house-skills-track-list.component';
import { HouseService } from 'app/services/house.service';
import { House } from 'app/models/house';
import { AdminAddHouseComponent } from '../admin-track-list/modal/admin-add-house/admin-add-house.component';
@Component({
  selector: 'ag-admin-quiz-list',
  templateUrl: './admin-quiz-list.component.html',
  styleUrls: ['./admin-quiz-list.component.css']
})

export class AdminQuizListComponent implements OnInit {

  // public quiz: quiz[] = [];
  loading = true;
  quizzes: quiz;
  allQuizzes;
  all_quizzes = [];
  houses: House[];
  public copyMessage: string;
  public copyMessageSuccess: boolean;

  // public houses: House[];
  message: '';

  ShowColumns = {
    quiz: true,
    description: true,
    diagnostic: true,
    source: true,
    start_available_time: true,
    end_available_time: true,
    due_time: true,
    Action: true
  }

  constructor(private helperService: HelperService, private houseService: HouseService, private quizService: QuizService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getQuizzes();
    this.houseService.getHouses().subscribe(x => {

      console.log("houses data");
      console.log(x);
      this.houses = x;
    });
  }

  openViewHouses(housesid): void {

    const dialogRef = this.dialog.open(AdminHouseSkillsTrackListComponent, {
      data: {
        housesid: housesid,
        type : 'quiz'

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



  deleteAllSHoses(housesid) {
    this.dialog.open(ConfirmDialogComponent, { data: { message: "Do you really want to delete all Houses from this class? ", title: "Delete All Houses" } }).afterClosed().
      subscribe(ifYes => {
        if (ifYes) {
          this.loading = true;
          this.houseService.deleteAllSHouses(housesid).subscribe((x: any) => {
            this.loading = false;
            this.dialog.open(NotifyDialogComponent, {
              data: {
                message: x.message,
                title: "Delete Houses",
                error: false,
                housesid: housesid
              }
            });
          }, (err) => {
            this.loading = false;
            this.dialog.open(NotifyDialogComponent, {
              data: {
                message: this.helperService.ParseErrorMsg(err),
                title: "Delete Skills",
                error: true
              }
            });
          })
        } else {
          //rejected
        }
      });
  }


  getAddHouse(houseid) {
    const dialogRef = this.dialog.open(AdminAddHouseComponent, {
      width: '400px',
      data: { houseid: houseid }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialog.open(NotifyDialogComponent, {
          data: {
            message: result,
            title: "Add Skills",
            error: false
          }
        });
      }
    });
  }


  getQuizzes() {
    this.loading = true;
    this.quizService.allQuiz().subscribe(x => {
      // x.start_available_time = this.tConvert(x.start_available_time);
      x.start_available_time;
      //  this.tConvert(x.start_available_time)
      this.quizzes = x;
      console.log('quizzes list');
      console.log(this.quizzes);
      this.allQuizzes = x;
      this.loading = false;
      if (localStorage.getItem('last_quiz_edit_id')) {
        setTimeout(() => {
          let id = localStorage.getItem('last_quiz_edit_id');
          var elmnt = document.getElementById('quiz_' + id);
          // elmnt.scrollIntoView({ block: 'end', behavior: 'smooth' });
          localStorage.removeItem('last_quiz_edit_id');
        }, 1000)
      }
    });
  }

  public doSearch(query) {
    let filtered = [];
    this.allQuizzes.forEach((v, i) => {
      let add = false;
      if (query) {
        query = query.toLowerCase();
        if (v.description) {
          if (v.description.toLowerCase().indexOf(query) != -1) {
            add = true;
          }
        }
        if (v.track) {
          if (v.track.toLowerCase().indexOf(query) != -1) {
            add = true;
          }
        }
      } else {
        add = true;
      }
      if (add) {
        filtered.push(v);
      }
    })
    // this.quizzes = filtered;
  }


  public copyQuiz(id: string): void {

    this.quizService.copyQuiz(id).subscribe(result => {
      if (result != null) {
        this.copyMessageSuccess = true;
        this.copyMessage = 'Quiz copied successfully!';
        this.getQuizzes();
      }else {
        this.copyMessageSuccess = false;
        this.copyMessage = result['message'];
      }
      setTimeout(() => {
        // this.copyMessageSuccess = true;
        // this.copyMessage = "Quiz copied successfully!!";
        // this.getQuizzes();
        this.copyMessageSuccess = false;
        this.copyMessage = null;
      }, 3000);
    });
  }


  // public copySkill(id: string) : void{

  //   this.skillService.copySkill(id).subscribe(result =>{
  //     if(result["code"] == 201){
  //       this.copyMessageSuccess = true;
  //       this.copyMessage = result["message"];
  //       let skill = result["skill"];
  //       let cSkill = this.skills.find(x => x.id == id);
  //       cSkill.id = skill.id;
  //       this.skills.push(cSkill);
  //     }
  //     else{
  //       this.copyMessageSuccess = false;
  //       this.copyMessage = result["message"];
  //     }
  //     setTimeout(()=>{
  //       this.copyMessageSuccess = false;
  //         this.copyMessage = null;
  //     }, 3000);
  //   });
  // }

  resetUpdateStatus() {
    this.quizService.updateStatus = '';
  }

  get updateStatus(): string {
    return this.quizService.updateStatus;
  }

  keepManageSkills() {

  }

  addManageHouses() {

  }

  addManageQuestions() {

  }



}
