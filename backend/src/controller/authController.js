import usermodel from "../database/usermodel.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
const JWT_SECRET = "VJHDV";
export async function register(req, res) {
const { username, password, email , image } = req.body;
const hashpassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
const findone = await usermodel.findOne({
    $or: [{ username }, { email }]
  });
if (findone) {
    return res.json({
      msg: "user already exist change your username or email"
    });
  }
await usermodel.create({
    username: username,
    password: hashpassword,
    email: email,
    image : image
  });
res.json({
    msg: "client registered"
  });
}
export async function login(req, res) {
const { email, password } = req.body;
const hashpassword = crypto
    .createHash("sha256")   
    .update(password)
    .digest("hex");
const findmail = await usermodel.findOne({
    email: email
  });
  if (!findmail) {
    return res.json({
      msg: "mail not found"
    });
  }
if (findmail.password != hashpassword) {
    return res.json({
      msg: "password incorrect"
    });
  }
const token = jwt.sign(
    {
      userid: findmail._id   
    },
    JWT_SECRET,
    {
      expiresIn: "1d"
    }
  );
res.json({
    msg: "user logined",
    token: token   
  });
}