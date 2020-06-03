import {Component, Input, OnInit} from '@angular/core';
import {CheckboxControlValueAccessor} from "@angular/forms";
import {start} from "repl";
import {Dates} from "../../interfaces/Dates";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  fromDate: Date;
  toDate: Date;

  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  private dates: any[];

  constructor(private service: DataService) { }

  ngOnInit() {
  }

  sendDatesToServer() {
    const daysOfWeek = [];
    if (this.monday === true) {daysOfWeek.push('monday'); }
    if (this.tuesday === true) {daysOfWeek.push('tuesday'); }
    if (this.wednesday === true) {daysOfWeek.push('wednesday'); }
    if (this.thursday === true) {daysOfWeek.push('thursday'); }
    if (this.friday === true) {daysOfWeek.push('friday'); }
    if (this.saturday === true) {daysOfWeek.push('saturday'); }
    if (this.sunday === true) {daysOfWeek.push('sunday'); }
    const dates: Dates = {
      startDate: this.fromDate,
      endDate: this.toDate,
      days: daysOfWeek
    };
    this.service.getRandomDuty(dates).subscribe();

    /*
    if (this.fromDate.getDate() < 10) {
      startDate += '0' + this.fromDate.getDate() + '-';
    } else {
      startDate += this.fromDate.getDate() + '-';
    }

    if ((this.fromDate.getMonth() + 1) < 10) {
      startDate += '0' + (this.fromDate.getMonth() + 1) + '-';
    } else {
      startDate += (this.fromDate.getMonth() + 1) + '-';
    }

    startDate += this.fromDate.getFullYear();

    if (this.toDate.getDate() < 10) {
      endDate += '0' + this.toDate.getDate() + '-';
    } else {
      endDate += this.toDate.getDate() + '-';
    }

    if ((this.toDate.getMonth() + 1) < 10) {
      endDate += '0' + (this.toDate.getMonth() + 1) + '-';
    } else {
      endDate += (this.toDate.getMonth() + 1) + '-';
    }

    endDate += this.toDate.getFullYear();
*/


  }
  get() {
    this.sendDatesToServer();
  }
}
