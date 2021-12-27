import { Bson, MongoClient } from "./deps.ts";

const client = new MongoClient();

await client.connect(Deno.env.get("MONGO_DB_URI")!);
// y4ijsJOhsWgJpizp
const db = client.database("DenoSurvey");

interface UserSchema {
  _id: Bson.ObjectId;
  name: string;
  email: string;
  password: string;
}

export const usersCollection = db.collection<UserSchema>("users");
