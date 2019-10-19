import {Injectable} from '@angular/core';
import {Data} from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    const dataList = localStorage.getItem('dataList');
    return this.toDataObject(JSON.parse(dataList || '[]'));
  }

  setData(data: Data) {
    let dataList = this.getData();
    dataList.push(data);
    localStorage.setItem('dataList', JSON.stringify(dataList));
  }

  toDataObject(dataArray){
    let dataObjects = [];
    for (let data in dataArray) {
      data = dataArray[data];
      let obj = new Data(data._value, parseInt(data._index));
      dataObjects.push(obj);
    }
    return dataObjects;
  }

  constructor() {
  }
}
