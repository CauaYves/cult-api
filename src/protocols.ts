import { Session } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type loginAccess = {
  code: string;
  password: string;
};

export type AddressEnrollment = {
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  error?: string;
};

export type ViaCEPAddress = {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type SessionParams = Omit<Session, "id" | "createdAt" | "updatedAt">;
