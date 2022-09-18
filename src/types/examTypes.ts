import { Exams } from "@prisma/client";

export type IExamData = Omit<Exams, 'id'>;