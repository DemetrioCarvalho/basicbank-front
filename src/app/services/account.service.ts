import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Http, Response } from '@angular/http';
import { Account } from '../models/account';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from '../models/user';

const API_URL = environment.apiUrl;
@Injectable()
export class AccountService {

  constructor(private http: Http) { }

  public getAllAccounts(): Observable<Account[]> {
    return this.http
      .get(API_URL + '/account')
      .map(response => {
        const accounts = response.json();
        return accounts.map((account) => new Account(account));
      })
      .catch(this.handleError);
  }

  public getAccountByUserId(userId: number): Observable<User> {
    return this.http
      .get(API_URL + '/accounts/' + userId)
      .map(response => {
        return new Account(response.json());
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('AccountService::handleError', error);
    return Observable.throw(error);
  }
}
