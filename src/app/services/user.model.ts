export class User {
  constructor(
    public _id: string,
    public name: string,
    public email: string,
    public password: string,
    public image: string,
    public publicid: string,
    public header: string,
    public hpublicid: string,
    public role: string,
    public token: string,
    public date: string
  ) {}
}
