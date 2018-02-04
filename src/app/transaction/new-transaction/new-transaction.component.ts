import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account';
import {AccountService} from '../../services/account.service';
import { Transaction } from '../../models/transaction';
import {TransactionService} from '../../services/transaction.service';
@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {

  accounts: Account[];
  transaction: Transaction = new Transaction();

  constructor(private accountService: AccountService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transaction.targetAccount = new Account();
    this.transaction.sourceAccount = new Account();

    this.accountService
    .getAllAccounts()
    .subscribe(
      (accounts) => {
        this.accounts = accounts;
      }
    );
  }

  addTransaction(): void {
    this.transactionService.addTransaction(this.transaction)    
    .subscribe(
      (transaction) => {
        this.transaction = transaction;
      }
    );
    //this.router.navigate(['/home']);
  }	
}
