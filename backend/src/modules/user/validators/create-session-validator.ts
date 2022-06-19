import { celebrate, Joi, Segments } from 'celebrate';

export const createSessionValitdator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    password: Joi.string().required(),
    email: Joi.string().email().required()
})});
