import {Component, Input, OnInit} from '@angular/core';
import {Data} from '../models/data';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() dataList: Data[];

  constructor() {
  }

  ngOnInit() {
  }

}
