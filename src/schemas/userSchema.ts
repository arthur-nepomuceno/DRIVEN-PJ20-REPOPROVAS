import Joi from "joi";

export const userSchema = Joi.object({
    emai: Joi.string().email().required(),
    password: Joi.string().required(),
    confirm: Joi.string().required()
})