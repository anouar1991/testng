import {Component, Input, OnInit} from '@angular/core';
import {Data} from '../models/data';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.css']
})
export class DataRowComponent implements OnInit {
  @Input() data: Data;

  ngOnInit() {
  }

}
