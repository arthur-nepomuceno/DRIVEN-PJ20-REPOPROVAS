import Joi from "joi";

export const examSchema = Joi.object({
    name: Joi.string().required(),
    pdfUrl: Joi.string().uri(),
    categoryId: Joi.number().integer().required(),
    teacherDisciplineId: Joi.number().integer().required()
})