import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BaseService } from '../shared/base.service';
import storage from '../shared/storage';

@Injectable()
export class SleepMonitorService extends BaseService {
  constructor(public http: Http) {
    super(http)
  }
  reportDetail(equipmentNo: string, date: string) {
    return this.postInfo(`api/bedSignDetection/getSleepReport/${equipmentNo}/${date}`, '');
  }

  reportSleepHeart(equipmentNo, date) {
    return this.postInfo(`api/bedSignDetection/getSleepHeart/${equipmentNo}/${date}`, '');
  }

  reportSleepOnBed(equipmentNo, date) {
    return this.postInfo(`api/bedSignDetection/getSleepOnBed/${equipmentNo}/${date}`, '');
  }

}
