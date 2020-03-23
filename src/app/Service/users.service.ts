import { User } from "../Entities/user";

export class Users {
  constructor() {}

  Users: User[] = [
    { login: "Константин", password: "123", region: "Кировская область" },
    { login: "Александр", password: "234", region: "Московская область" }
  ];

  getUsers() {
    return this.Users;
  }

  addUser(user: User) {
    this.Users.push(user);
  }
}
