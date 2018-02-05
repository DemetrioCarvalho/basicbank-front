import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../models/transaction';
import {TransactionService} from '../services/transaction.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: Transaction[];
  @Input() idaccount: number; 

  constructor(private transactionService: TransactionService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    // this.transactionService
    // .getTransactionsByAccountId(this.idaccount)
    // .subscribe(
    //   (transactions) => {
    //     this.transaction = transactions;
    //   }
    // );

    // this.route.params
    // .switchMap((params: Params) => this.transactionService.getTransactionsByAccountId(+params['accountid']))
    // .subscribe(transaction => this.transactions = transaction);
  }
}