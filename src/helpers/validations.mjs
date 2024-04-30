import Joi from "joi";

export const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().max(50).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(user);
};

export const validateLoginInputs = (req) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });
  return schema.validate(req);
};

export const validateEvent = (event) => {
  const schema = Joi.object({
    title: Joi.string().max(50).required(),
    description: Joi.string().max(255).required(),
    location: Joi.string().max(50).required(),
    date: Joi.date().required(),
  });
  return schema.validate(event);
};
