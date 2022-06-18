import { celebrate, Joi, Segments } from 'celebrate';

export const createUserValitdator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required()
})});
