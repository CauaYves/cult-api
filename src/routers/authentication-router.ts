import { authenticateToken, validateBody } from "@/middlewares";
import { accessSchema } from "@/schemas";
import { Router } from "express";
import { Refresh, Signin } from "@/controllers";

const authenticationRouter = Router();

authenticationRouter.post("/", validateBody(accessSchema), Signin);
authenticationRouter.post("/refresh", authenticateToken, Refresh);

export { authenticationRouter };
