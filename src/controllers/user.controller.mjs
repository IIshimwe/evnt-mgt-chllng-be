import _ from "lodash";
import { User } from "../../db/models/user.model.mjs";
import { validateUser } from "../helpers/validations.mjs";
import { hashPassword } from "../helpers/helper.mjs";

export const createUser = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const userExists = await User.findOne({ email: req.body.email });
  if (userExists)
    return res.status(400).send("You are creating an existing user");

  const user = new User(_.pick(req.body, ["name", "email", "password"]));
  user.password = await hashPassword(user.password);
  await user.save();

  res.status(200).send(_.pick(user, ["_id", "name", "email"]));
};
