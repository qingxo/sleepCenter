import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../shared/base.service';
import storage from '../shared/storage';
@Injectable()
export class HeatLineService extends BaseService {

  constructor(public http: Http) {
    super(http);
  }
  heatList(data) {
    return this.postInfo('api/v1/cust/getHealthExamDataByParams', storage.serialize(data));
  }
}
