import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account';
import {AccountService} from '../services/account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: Account[];
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService
    .getAllAccounts()
    .subscribe(
      (accounts) => {
        this.accounts = accounts;
      }
    );
  }

}
