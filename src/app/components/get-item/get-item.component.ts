import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-get-item',
  templateUrl: './get-item.component.html',
  styleUrls: ['./get-item.component.css']
})
export class GetItemComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() surname: string;

  constructor() { }

  ngOnInit() {
  }

}
