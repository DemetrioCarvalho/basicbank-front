import { Account } from "./account";

export class Transaction {
    idtransaction: number;
    amount: number;
    sourceAccount: Account;
    targetAccount: Account;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
