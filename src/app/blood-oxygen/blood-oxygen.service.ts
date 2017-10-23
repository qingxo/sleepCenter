import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { Http } from '@angular/http';
import storage from '../shared/storage';
@Injectable()
export class BloodOxygenService extends BaseService {

  constructor(public http: Http) {
    super(http)
  }

  oxygenList(data) {
    return this.postInfo('api/webHealthExamData/list', storage.serialize(data));
  }

}
