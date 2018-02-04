import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UserComponent }  from './user/user.component';
import {AccountComponent }  from './account/account.component';
import {TransactionComponent }  from './transaction/transaction.component';
import { NewTransactionComponent } from './transaction/new-transaction/new-transaction.component';
import { ManageTransactionsComponent } from './transaction/manage-transactions/manage-transactions.component';

const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'view-accounts/:userid', component: AccountComponent },
    { path: 'view-transactions/:accountid', component: TransactionComponent },
    { path: 'add-transaction', component: NewTransactionComponent },
    { path: 'manage-transactions', component: ManageTransactionsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ }
