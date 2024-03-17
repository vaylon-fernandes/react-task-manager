import { object, string } from "yup";

export const addTaskSchema = object().shape({
    task:string().required(),
    status:string().required()
})