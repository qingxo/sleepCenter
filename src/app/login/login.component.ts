import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import * as md5 from 'md5';
import storage from '../shared/storage';
import { User } from './user'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  user = new User('', '', true)
  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {

  }

  loginConfirm() {
    this.router.navigate(['/'])
  }

}
