import {Component, Input, OnInit} from '@angular/core';

import {Dates} from '../../interfaces/Dates';
import {DataService} from '../../services/data.service';
import {tsXLXS} from 'ts-xlsx-export';

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
  workersAmount: number;
  public items$: any;
  temp: string;
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
      days: daysOfWeek,
      amountOfWorkers: this.workersAmount
    };

    this.service.getRandomDuty(dates).subscribe(response => {
      this.items$ = response;

      let duties = [];
      for(let i = 0; i < this.items$.length; i++) {
        this.temp = '';
        for(let j = 0; j < this.items$[i].employeeDto.length; j++) {
          this.temp += this.items$[i].employeeDto[j].id + '. ' + this.items$[i].employeeDto[j].name + ' ' + this.items$[i].employeeDto[j].surname + ',  ';
        }
        duties.push ({
          data: this.items$[i].date.substr(0, 10),
          dyzurujacy: this.temp,
        });
      }

      console.log(duties);
      tsXLXS().exportAsExcelFile(duties).saveAsExcelFile('dyzury');
    });
  }


  get() {
    this.sendDatesToServer();
  }
}
