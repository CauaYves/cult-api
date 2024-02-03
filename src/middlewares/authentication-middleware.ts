import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";
import { prisma } from "../config/database";
import { unauthorizedError } from "../errors/index";
import { env } from "@/schemas";

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.header("Authorization");
  if (!authHeader) return generateUnauthorizedResponse(res);

  const token = authHeader.split(" ")[1];
  if (!token) return generateUnauthorizedResponse(res);

  try {
    const { codeId } = jwt.verify(token, env.JWT_SECRET) as JWTPayload;
    const session = await prisma.session.findFirst({
      where: {
        codeId,
      },
    });
    if (!session) return generateUnauthorizedResponse(res);

    req.codeId = codeId;

    const tokenExpired = await isTokenExpired(token);
    if (!tokenExpired) {
      return next();
    } else {
      generateUnauthorizedResponse(res);
    }
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
}

function generateUnauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  codeId: number;
};

async function isTokenExpired(token: string) {
  try {
    const decodedToken = jwt.verify(token, env.JWT_SECRET) as { exp: number };
    const currentTimestamp = Math.floor(Date.now() / 1000);

    return decodedToken.exp < currentTimestamp;
  } catch (error) {
    return true;
  }
}
