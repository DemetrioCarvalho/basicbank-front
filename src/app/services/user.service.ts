import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Http, Response } from '@angular/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;
@Injectable()
export class UserService {

  constructor(private http: Http) { }

  public getAllUsers(): Observable<User[]> {
    return this.http
      .get(API_URL + '/user')
      .map(response => {
        const users = response.json();
        return users.map((user) => new User(user));
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('UserService::handleError', error);
    return Observable.throw(error);
  }
}
