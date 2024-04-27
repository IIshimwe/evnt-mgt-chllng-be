import Joi from "joi";

export const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().max(50).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(user);
};
