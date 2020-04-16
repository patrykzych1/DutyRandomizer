import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-get-item-name',
  templateUrl: './get-item-name.component.html',
  styleUrls: ['./get-item-name.component.css']
})
export class GetItemNameComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
