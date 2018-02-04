export class User {
    iduser: number;
    firstname: string = '';
    lastname: string = '';
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
