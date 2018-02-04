import { User } from "./user";

export class Account {
    id: number;
    name: string = '';
    user: User[] = [];
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
