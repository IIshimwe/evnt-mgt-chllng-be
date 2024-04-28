import { User } from "../../db/models/user.model.mjs";
import { validateLoginInputs } from "../helpers/validations.mjs";
import { comparePassword } from "../helpers/helper.mjs";
import _ from "lodash";

export const auth = async (req, res) => {
  const { error } = validateLoginInputs(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send("Invalid email or password. Try again");

  const validPassowrd = await comparePassword(req.body.password, user.password);
  if (!validPassowrd)
    return res.status(400).send("Invalid email or password. Try again");

  const token = user.generateToken();

  res.header("x-auth-token", token).send(_.pick(user, ["_id", "email"]));
};
