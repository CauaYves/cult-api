import { loginAccess } from "@/protocols";
import Joi from "joi";

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regexCode = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{11}$|^[0-9a-zA-Z]*$/;

export const accessSchema = Joi.object<loginAccess>({
  password: Joi.string().min(8).max(24).pattern(regexPassword).required(),
  code: Joi.string().pattern(regexCode).required(),
});
