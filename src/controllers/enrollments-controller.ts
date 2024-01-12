import { Request, Response } from "express";
import enrollmentsService from "@/services/enrollments-service";
import httpStatus from "http-status";

export async function getAddressFromCEP(req: Request, res: Response) {
  const { cep } = req.query as Record<string, string>;

  try {
    const address = await enrollmentsService.getAddressFromCEP(cep);
    return res.status(httpStatus.OK).send(address);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
}
