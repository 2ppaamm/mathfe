import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ConfirmDialogComponent } from "../../../confirm-dialog/confirm-dialog.component";
import { Router } from "@angular/router";
import { debug } from "util";
import { environment } from "environments/environment";
import { Track } from "../../../../models/track";
import { House } from "../../../../models/house";
import { SkillTrackService } from "../../../../services/skill-track.service";
import { HouseService } from "app/services/house.service";

@Component({
  selector: "ag-admin-add-house",
  templateUrl: "./admin-add-house.component.html",
  styleUrls: ["./admin-add-house.component.css"],
})
export class AdminAddHouseComponent implements OnInit {
  Houses: House[];
  public loading: boolean = true;
  houses_ids = [];
  error = false;
  constructor(
    private houseService: HouseService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AdminAddHouseComponent>
  ) {
    debugger;

    this.loading = true;
    this.error = false;
    this.houseService.getHouses().subscribe((x) => {
      this.houseService.getHousessByQuiz(this.data.houseid).subscribe((y) => {
        let aviableHouses = [];
        x.forEach((item, index) => {
          let isExist =
            y.class.filter((t) => {
              return t.id == item.id;
            }).length > 0;
          if (isExist) {
            this.houses_ids.push(item.id);
          }
          aviableHouses.push(item);
        });
        this.Houses = aviableHouses;
        console.log('hoses araray');
        console.log(this.Houses);
        this.loading = false;
      });
    });
  }
  saveHouse() {
    this.error = false;
    let selectedHouses = [];
    this.houses_ids.forEach((item, index) => {
      let t = this.Houses.filter((t) => {
        return t.id == item;
      })[0];
      selectedHouses.push(t.id);
    });
    this.houseService
      .addHousesByQuiz(selectedHouses, this.data.houseid)
      .subscribe(
        (result: any) => {
          // Handle result
          this.dialogRef.close(result.message);
        },
        (error) => {
          //Server error, please try after some time.
          this.error = true;
          console.error(error);
        }
      );
  }
  ngOnInit() {}
}
