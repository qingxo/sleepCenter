import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BaseService } from '../shared/base.service';
import storage from '../shared/storage';

@Injectable()
export class MedicalDetailService extends BaseService {
  constructor(public http: Http) {
    super(http);
  }

  getRecordTpl() {
    return this.postInfo('api/v1/cust/getAdviceTemplate', '');
  }

  saveRecord(data) {
    return this.postInfo('api/v1/cust/createDiagnosticRecords', storage.serialize(data));
  }

  getPdf(data) {
    return this.postInfo('api/v1/cust/getSleepMonitorReportList', storage.serialize(data));
  }

}
