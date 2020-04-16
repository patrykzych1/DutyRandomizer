import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  public items$: any;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.getAll();

  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
    console.log(this.items$);
  }

}
