import jwt from "jsonwebtoken";
const JWT_SECRET = "VJHDV";
export function middlewareauth(req, res, next) {
  const authheader = req.headers.authorization;
  if (!authheader) {
    return res.json({
      msg: "token missing",
    });
  }
  const token = authheader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userid = decoded.userid;
    next();
  } catch (error) {
    res.json({
      msg: "token is invalid",
    });
  }
}
