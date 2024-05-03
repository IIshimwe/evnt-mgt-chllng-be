import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(400).send("No token provided");

  try {
    const decodedPayload = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = decodedPayload;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};
