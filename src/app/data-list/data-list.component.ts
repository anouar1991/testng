import {Component, OnInit} from '@angular/core';
import {Data} from '../models/data';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
})
export class DataListComponent implements OnInit {
  dataList: Data[] = [];
  dataForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.dataForm = this.formBuilder.group({
      data: [''],
    });

    this.dataList = this.dataService.getData();
  }

  onSubmit(data): void {
    if (!Data.estVide(data.data)) {
      this.dataService.setData(new Data(data.data, this.dataList.length + 1));
      this.dataList = this.dataService.getData();
      this.dataForm.reset();
    }

  }

  ngOnInit() {
  }

}
