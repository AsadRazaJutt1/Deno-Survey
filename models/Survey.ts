import { surveyCollection } from "../mongo.ts";

export default class Survey {
  public user_id: string;
  public name: string;
  public description: string;

  constructor({ user_id = "", name = "", description = "" }) {
    this.user_id = user_id;
    this.name = name;
    this.description = description;
  }

  create = async () => {
  };
  //   static async findOne(params: object) {
  //     return await usersCollection.findOne(params, { noCursorTimeout: false });
  //   }
}
