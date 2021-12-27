import {
  compareSync,
  Context,
  createJwtToken,
  getNumericDate,
  hashSync,
} from "./../deps.ts";
import User from "../models/User.ts";
class AuthController {
  login = async (ctx: Context) => {
    const key = await crypto.subtle.generateKey(
      { name: "HMAC", hash: "SHA-512" },
      true,
      ["sign", "verify"],
    );

    const { email, password } = await ctx.request.body().value;
    const user = await User.findOne({ email });
    if (!user) {
      ctx.response.status = 401;
      ctx.response.body = { message: "User not found" };
      return;
    }
    if (!compareSync(password, user.password)) {
      ctx.response.status = 401;
      ctx.response.body = { message: "Invalid password" };
      return;
    }
    // A specific date:
    const exp = getNumericDate(new Date());
    // One hour from now:
    const nbf = getNumericDate(60 * 60);

    const jwt = await createJwtToken({ alg: "HS512", typ: "JWT" }, {
      iss: user.email || "deno-jwt",
      exp,
      nbf,
      foo: "bar",
    }, key);

    ctx.response.body = {
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token: jwt,
    };
  };

  register = async (ctx: Context) => {
    const { name, email, password } = await ctx.request.body().value;
    const user = await User.findOne({ email });
    if (user) {
      ctx.response.status = 400;
      ctx.response.body = { msg: "User already exists" };
      return;
    }
    const newUser = new User({ name, email, password: hashSync(password) });
    await newUser.save();
    ctx.response.body = { msg: "User created successfully", user: newUser };
    return;
  };
}

const authController = new AuthController();

export default authController;
