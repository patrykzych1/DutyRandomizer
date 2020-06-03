import { Component, OnInit } from '@angular/core';
import {Employee} from '../../interfaces/Employee';
import {DataService} from '../../services/data.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {



  constructor(private service: DataService) {
  }

  ngOnInit() {
  }

  addEmployee() {
   // this.employee.name = document.querySelector('#name').innerHTML;

//    this.employee.name = document.querySelector('#surname').innerHTML;
    const employee: Employee = {
      name: ( document.querySelector('#name') as HTMLInputElement).value,
      surname: ( document.querySelector('#surname') as HTMLInputElement).value,
    };

    console.log(employee);
    this.service.addEmployee(employee).subscribe();
  }
}
