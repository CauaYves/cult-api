import { isValidCEP } from "@brazilian-utils/brazilian-utils";
import Joi from "joi";
export declare function isValid(cep: string): boolean;

export const cepValidationSchema = Joi.string().length(9).custom(JoiCepValidation).required();

function JoiCepValidation(value: string, helpers: Joi.CustomHelpers<string>) {
  if (!value) return value;

  if (!isValidCEP(value)) {
    return helpers.error("any.invalid");
  }

  return value;
}
