let Joi = require("joi");

const schemas = {
  "POST>>/login": {
    body: Joi.object({
      username: Joi.string().alphanum().min(3).max(30),
      password: Joi.string().min(3).max(15).required(),
    }),
  },
  "POST>>/signup": {
    body: Joi.object({
      username: Joi.string().alphanum().min(3).max(30),
      password: Joi.string().min(3).max(15).required(),
      age : Joi.number().min(15).max(100),
      score: Joi.number().min(0).max(100)
    }),
  },
};




module.exports = schemas;
