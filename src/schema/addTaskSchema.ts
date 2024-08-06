import { object, string } from "yup";

export const addTaskSchema = object().shape({
    name:string().required(),
    status:string().required()
})