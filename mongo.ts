import { Bson, MongoClient } from "./deps.ts";

const client = new MongoClient();

await client.connect(Deno.env.get("MONGO_DB_URI")!);

const db = client.database("DenoSurvey");

interface UserSchema {
  _id: Bson.ObjectId;
  name: string;
  email: string;
  password: string;
}

interface SurveySchema {
  _id: Bson.ObjectId;
  user_id: string;
  name: string;
  description: string;
}

export const usersCollection = db.collection<UserSchema>("users");
export const surveyCollection = db.collection<SurveySchema>("surveys");
