import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { Http } from '@angular/http';
import storage from '../shared/storage';
@Injectable()
export class BloodPressureService extends BaseService {

  constructor(public http: Http) {
    super(http)
  }

  getBloodPressList(data) {
    return this.postInfo('api/v1/cust/getHealthExamDataByParams', storage.serialize(data));
  }
}
