import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BaseService } from '../../shared/base.service';
import storage from '../../shared/storage';

@Injectable()
export class PatientSubjectService extends BaseService {
  constructor(public http: Http) {
    super(http)
  }
  getList(data) {
    return this.postInfo('api/v1/cust/getCustomerMIndexList', storage.serialize(data))
  }


  getDetailList(data) {
    return this.postInfo('api/v1/cust/getCustomerByParams', storage.serialize(data))
  }

  pullDownData(data) {
    return this.postInfo('api/v1/cust/mIndexMarge', storage.serialize(data))
  }

}
