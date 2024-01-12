import { getAddressFromCEP } from "@/controllers";
import { Router } from "express";

const enrollmentsRouter = Router();

enrollmentsRouter.get("/cep", getAddressFromCEP);

export { enrollmentsRouter };
