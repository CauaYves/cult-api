import { Response, Request } from "express";
import httpStatus from "http-status";
import authenticationService from "@/services/authentication-service";
import { AuthenticatedRequest } from "@/middlewares";

export async function Signin(req: Request, res: Response) {
  try {
    const body = req.body;
    const result = await authenticationService.makeAccess(body);
    return res.send(result).status(httpStatus.OK);
  } catch (error) {
    if (error.name === "UnauthorizedError") return res.status(httpStatus.UNAUTHORIZED).send(error.message);
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function Refresh(req: AuthenticatedRequest, res: Response) {
  try {
    const codeId = req.codeId;
    const result = await authenticationService.refreshToken(codeId);
    return res.send(result);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}

export async function CheckToken(req: Request, res: Response) {
  try {
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send(error);
  }
}
