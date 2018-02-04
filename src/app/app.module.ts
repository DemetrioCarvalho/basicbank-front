import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { AppRoutingModule }  from './app-routing.module';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { AccountComponent } from './account/account.component';
import { AccountService } from './services/account.service';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionService } from './services/transaction.service';
import { NewTransactionComponent } from './transaction/new-transaction/new-transaction.component';
import { ManageTransactionsComponent } from './transaction/manage-transactions/manage-transactions.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AccountComponent,
    TransactionComponent,
    NewTransactionComponent,
    ManageTransactionsComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		AppRoutingModule,
    HttpModule
  ],
  providers: [UserService,AccountService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
