import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BaseService } from '../../shared/base.service';
import storage from '../../shared/storage';

@Injectable()
export class SleepAssessmentService extends BaseService {
  constructor(public http: Http) {
    super(http);
  }
  getList(data) {
    return this.postInfo('api/sleepReport/SleepReportListByPage', storage.serialize(data));
  }

}
