import {Injectable} from '@angular/core';
import {Data} from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData(): Data[] {
    const dataList = localStorage.getItem('dataList');
    return eval(dataList || '[]');
  }

  setData(data: Data) {
    let dataList = this.getData();
    dataList.push(data);
    dataList = JSON.stringify(dataList);
    localStorage.setItem('dataList', dataList);
  }

  constructor() {
  }
}
