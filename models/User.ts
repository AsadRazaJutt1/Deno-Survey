import { usersCollection } from "../mongo.ts";

export default class User {
  public name: string;
  public email: string;
  public password: string;

  constructor({ name = "", email = "", password = "" }) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static async findOne(params: object) {
    return await usersCollection.findOne(params, { noCursorTimeout: false });
  }

  save = async () => {
    return await usersCollection.insertOne(this);
  };
}
