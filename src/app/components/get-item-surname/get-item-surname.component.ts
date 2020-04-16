import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-get-item-surname',
  templateUrl: './get-item-surname.component.html',
  styleUrls: ['./get-item-surname.component.css']
})
export class GetItemSurnameComponent implements OnInit {
  @Input() surname: string;
  constructor() { }

  ngOnInit() {
  }

}
