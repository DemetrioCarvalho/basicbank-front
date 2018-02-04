import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Http, Response } from '@angular/http';
import { Account } from '../models/account';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Transaction } from '../models/transaction';

const API_URL = environment.apiUrl;
@Injectable()
export class TransactionService {

  constructor(private http: Http) { }


  public getTransactionsByAccountId(accountId: number): Observable<Transaction> {
    return this.http
      .get(API_URL + '/transaction/' + accountId)
      .map(response => {
        const transactions = response.json();
        return transactions.map((transaction) => new Transaction(transaction));
        //const accounts = response.json();
        //return accounts.map((account) => new Account(account));



        //return new Transaction(response.json());
      })
      .catch(this.handleError);
  }

  public addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http
      .post(API_URL + '/transaction', transaction)
      .map(response => {
        return new Transaction(response.json());
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    //console.error('Transaction Service::handleError', error);
    return Observable.throw(error);
  }

}
