import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-get-item-id',
  templateUrl: './get-item-id.component.html',
  styleUrls: ['./get-item-id.component.css']
})
export class GetItemIdComponent implements OnInit {

  @Input() id: number;
  constructor() { }

  ngOnInit() {
  }

}
