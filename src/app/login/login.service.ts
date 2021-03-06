import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import storage from '../shared/storage';

@Injectable()
export class LoginService {
  constructor(private http: Http) { }
  login(data: any): Observable<any> {
    return this.http.post('api/web/login?' + data, '').map((res) => res.json());
  }

  getMenuList(roleId: any): Observable<any> {
    return this.http.post(`api/com/yykj/sysMenu/getPageMenuByRoleId.json?id=${roleId}`, '').map((res) => res.json());
  }

}
