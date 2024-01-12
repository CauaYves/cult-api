import { ApplicationError } from "@/protocols";

export function unauthorizedError(): ApplicationError {
  return {
    name: "UnauthorizedError",
    message: "Você precisa estar logado para esta ação",
  };
}
