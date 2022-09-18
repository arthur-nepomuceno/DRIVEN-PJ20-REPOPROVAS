import Joi from "joi";

export const examSchema = Joi.object({
    name: Joi.string().required(),
    pdfURL: Joi.string().uri(),
    categoryID: Joi.number().integer().required(),
    teacherDisciplineID: Joi.number().integer().required()
})